// GlobalReach.jsx
import React, { useMemo, useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from 'react-simple-maps';
import { geoCentroid } from 'd3-geo';
import './GlobalReach.css';

const US_TOPO = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
const CA_TOPO = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/canada/canada-provinces.json";

const GlobalReach = () => {
  const [hoverName, setHoverName] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });

  // Helpful: keep a memoized list of centroid coords for each feature
  const buildMarkers = (features) =>
    features
      .map((f) => {
        try {
          const [lng, lat] = geoCentroid(f);
          if (!isFinite(lng) || !isFinite(lat)) return null;
          const name =
            f.properties?.name ||
            f.properties?.NAME_1 ||
            f.properties?.NAME ||
            f.id ||
            "Region";
          return { name, coordinates: [lng, lat] };
        } catch {
          return null;
        }
      })
      .filter(Boolean);

  return (
    <section className="global-reach-section">
      <div className="global-bg-blobs" />
      <Container className="text-center">
        <h2 className="global-heading">Serving the US and Canada </h2>
        <p className="global-subtext">
          Protecting <span className="highlight">Over 100,000 Devices Secured.</span>
        </p>

        <div
          className="map-wrapper"
          onMouseMove={(e) =>
            setHoverPos({ x: e.clientX, y: e.clientY + window.scrollY })
          }
        >
          <ComposableMap
            projection="geoAlbers"
            className="world-map"
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup
              zoom={1}
              center={[-100, 50]} // nicely centers US + Canada
              minZoom={0.8}
              maxZoom={4}
            >
              {/* United States states */}
              <Geographies geography={US_TOPO}>
                {({ geographies }) => {
                  const markers = buildMarkers(geographies);
                  return (
                    <>
                      {geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() =>
                            setHoverName(
                              geo.properties?.name ||
                                geo.properties?.NAME ||
                                "State"
                            )
                          }
                          onMouseLeave={() => setHoverName(null)}
                          className="geo-shape"
                        />
                      ))}
                      {markers.map((m, idx) => (
                        <Marker key={`us-${idx}`} coordinates={m.coordinates}>
                          <circle className="dot dot-pulse" r={2.6} />
                        </Marker>
                      ))}
                    </>
                  );
                }}
              </Geographies>

              {/* Canada provinces */}
              <Geographies geography={CA_TOPO}>
                {({ geographies }) => {
                  const markers = buildMarkers(geographies);
                  return (
                    <>
                      {geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() =>
                            setHoverName(
                              geo.properties?.name ||
                                geo.properties?.NAME_1 ||
                                "Province"
                            )
                          }
                          onMouseLeave={() => setHoverName(null)}
                          className="geo-shape ca-shape"
                        />
                      ))}
                      {markers.map((m, idx) => (
                        <Marker key={`ca-${idx}`} coordinates={m.coordinates}>
                          <circle className="dot dot-pulse" r={2.6} />
                        </Marker>
                      ))}
                    </>
                  );
                }}
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip */}
          {hoverName && (
            <div
              className="map-tooltip"
              style={{ left: hoverPos.x + 12, top: hoverPos.y + 12 }}
            >
              {hoverName}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default GlobalReach;
