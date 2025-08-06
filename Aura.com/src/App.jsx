// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import keepAlive from './utils/keepalive';
import Layout from './Layout';
import Home from './Pages/Home';
import Feature from './Pages/Feature';
import DefendPro from './Pages/DefendPro';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
// import ExpertPanel from './Pages/ExpertPanel';
import UserDashboard from './Pages/UserDashboard';
import OtpVerify from './Pages/Otp';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Terms from './Components/Terms';
import ReturnPolicy from './Components/ReturnPolicy';
import WhyChooseUs from './Components/WhyChooseUs';
import ProtectedRoute from './Components/ProtectRoute';
import Solution from './Pages/Solution';
import Resources from './Pages/Resources'
import HowSaffronWorks from './Pages/HowSaffronWorks'
import Fox from './Pages/Fox';
import CBS from './Pages/CBS';
import ABC11 from './Pages/ABC11';
import NewYorkPolice from './Pages/NewYorkPolice';
import ABCNational from './Pages/ABCNational';
import AccountIn from './Pages/AccountIn';
import LearnMore from './Pages/LearnMore';
const App = () => {
  useEffect(() => {
    keepAlive(); // 👈 call it once when app loads
  }, []);
  return (
<div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>

    <Router>
      <Routes>
        {/* ✅ Public routes */}
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-otp" element={<OtpVerify />} />
        

        {/* 🔒 Protected routes */}
        <Route path="/home" element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route path="/features" element={<ProtectedRoute><Layout><Feature /></Layout></ProtectedRoute>} />
        <Route path="/DefendPro" element={<ProtectedRoute><DefendPro /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Layout><Contact /></Layout></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><Layout><About /></Layout></ProtectedRoute>} />
        <Route path="/privacy-policy" element={<ProtectedRoute><Layout><PrivacyPolicy /></Layout></ProtectedRoute>} />
        <Route path="/terms" element={<ProtectedRoute><Layout><Terms /></Layout></ProtectedRoute>} />
        <Route path="/return-policy" element={<ProtectedRoute><Layout><ReturnPolicy /></Layout></ProtectedRoute>} />
        <Route path="/why-us" element={<ProtectedRoute><Layout><WhyChooseUs /></Layout></ProtectedRoute>} />
        {/* <Route path="/expert" element={<ProtectedRoute><Layout><ExpertPanel /></Layout></ProtectedRoute>} /> */}
        <Route path="/userdashboard" element={<ProtectedRoute><Layout><UserDashboard /></Layout></ProtectedRoute>} />
        <Route path="/solution" element={<ProtectedRoute><Solution /></ProtectedRoute>} />
        <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
        <Route path="/HowSaffronWorks" element={<ProtectedRoute><HowSaffronWorks /></ProtectedRoute>} />
        <Route path="/Fox" element={<ProtectedRoute><Fox /></ProtectedRoute>} />
        <Route path="/CBS" element={<ProtectedRoute><CBS /></ProtectedRoute>} />
        <Route path="/ABC11" element={<ProtectedRoute><ABC11 /></ProtectedRoute>} />
        <Route path="/NewYorkPolice" element={<ProtectedRoute><NewYorkPolice /></ProtectedRoute>} />
        <Route path="/ABCNational" element={<ProtectedRoute><ABCNational /></ProtectedRoute>} />
        <Route path="/AccountIn" element={<ProtectedRoute><AccountIn /></ProtectedRoute>} />
        <Route path="/LearnMore" element={<ProtectedRoute><LearnMore /></ProtectedRoute>} />










        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
    </div>

  );
};

export default App;
