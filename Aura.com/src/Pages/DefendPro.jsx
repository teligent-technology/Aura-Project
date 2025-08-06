import React, { useState, useEffect } from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { Accordion, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import './DefendPro.css';

const data = [
  {
    title: "Protection Built for the Real World — Not Just Viruses.",
    content: `Antivirus tools were built for old-school threats like trojans and worms. But scammers have evolved.
Now, threats look like refund scams, remote access traps, or phishing popups that mimic your bank. DefendMePro goes beyond antivirus to protect how scams actually happen today — intercepting manipulations before they reach you.`
  },
  {
    title: "⚠️ The Threat Isn't Just Malware. It's Manipulation.",
    content: `Modern scams don’t just infect — they influence. From fake tech support to AI-powered voice scams, attackers play on your trust.
DefendMePro identifies behavioral red flags, blocks social engineering tactics, and empowers you with real-time warnings when something feels off — because it often is.`
  },
  {
    title: "📊 The Reality in Numbers",
    content: `🟨 $16.6B in cybercrime losses in 2024 (up 33%)  
🟨 Over 850,000 official reports  
🟨 83% of total damage caused by fraud — not malware  
🟨 $4.9B stolen from users over 60  
🟨 1 in 4 Americans report scam contact monthly  
🟨 98% of scams bypass traditional antivirus  
Scammers no longer "hack" — they persuade.`
  },
  {
    title: "❌ Why Traditional Security Falls Short",
    content: `Traditional tools can't:  
🛑 Block full-screen browser popups  
🛑 Detect fake refund calls  
🛑 Stop remote tool abuse  
🛑 Identify cloned websites  
🛑 Adapt to new scam tactics weekly  
🛑 Alert you to manipulation in real-time  
DefendMePro addresses these exact blind spots.`
  },
  {
    title: "🛡️ That’s Why We Built DefendMePro",
    content: `It’s more than antivirus — it's scam armor.  
We built DefendMePro for real-world threats:  
• AI-driven scam detection  
• Browser trap blocking  
• Remote access lockdown  
• Scam Alerts Hub  
• Live human support  
All in one place — and all designed for everyday users.`
  },
  {
    title: "✅ Scam Detection & Alerts",
    content: `Before a scam reaches your screen, we warn you.
Refund cons, screen freeze scams, fake support popups — all detected in real time through behavioral and pattern recognition filters.`
  },
  {
    title: "✅ Browser Trap Protection",
    content: `We identify and block phishing websites before they load — including sites impersonating Amazon, banks, antivirus software, and delivery companies.
No clicking required. We intercept it first.`
  },
  {
    title: "✅ Remote Access Blocker",
    content: `Scammers use tools like TeamViewer, AnyDesk, and Chrome Remote Desktop to take over your system.
We block all remote access apps unless manually approved — and monitor for hidden variants.`
  },
  {
    title: "✅ Live Scam Alerts (via Alerts Hub)",
    content: `Our Alerts Hub notifies you in real time about scams spreading across the country.  
From fake Microsoft calls to PayPal refund traps — we send alerts inside the app and via email or SMS.`
  },
  {
    title: "✅ Real Human Support, 7 Days a Week",
    content: `No bots. No queues. No scripts.  
Get expert help from trained scam support specialists via chat, phone, or remote session — any day of the week.`
  },
  {
    title: "✅ System Hardening & Lockdown",
    content: `We disable vulnerabilities scammers exploit:  
• PowerShell/CMD abuse  
• Scripted keyloggers  
• Port sniffers  
• Exploit kits  
All configured to your device and needs.`
  },
  {
    title: "✅ Ongoing Scam Education",
    content: `Every week, we publish a short Scam Playbook — what’s trending, what to avoid, and how to spot it.
Plain language, no jargon. You’ll never be in the dark.`
  },
  {
    title: "✅ Emergency Callback Button",
    content: `Suspicious popup? Weird email? Hit the emergency button and a human expert will call you immediately.
No scheduling. No delays. Just real help when it matters most.`
  },
  {
    title: "🔐 Identity Theft Protection",
    content: `We monitor the dark web, breached databases, and suspicious activity linked to your name, SSN, phone, or email.
If a leak happens, we alert you instantly and help you take action.`
  },
  {
    title: "🔒 Zero-Day Threat Defense",
    content: `Most antivirus reacts after a threat launches.  
DefendMePro prevents zero-day threats — malware, ransomware, or exploits — from executing at all using process-level blocking with AppGuard.`
  },
  {
    title: "🚫 Fraud Detection",
    content: `We monitor your digital footprint and financial signals — unusual logins, rogue transactions, new devices.
You get real-time alerts before they escalate into damage.`
  },
  {
    title: "🔔 Scam Alerts Hub",
    content: `Central hub that updates daily with verified scam trends — refund, support, romance, AI voice, crypto, and more.
Every alert includes what it looks like and how to avoid it.`
  },
  {
    title: "💰 Financial Security",
    content: `Scammers don’t just steal — they drain life savings.  
We help prevent fake bank emails, fake payment portals, fraudulent invoices, and phishing links before you enter a single detail.`
  },
  {
    title: "🔑 Password Manager",
    content: `Stop reusing the same passwords or writing them down on paper.  
DefendMePro includes a secure, encrypted password manager that creates, stores, and autofills strong passwords across all devices.  
Your credentials stay safe — and so does your peace of mind.`
  },
  {
    title: "🖥️ Antivirus & Device Security",
    content: `Hackers don’t need your password — they just need one weak device.  
DefendMePro locks down your system with real-time malware detection, silent background scanning, and proactive protection against keyloggers, spyware, and screen recorders.  
No tech skills required. We configure it for you.`
  },
  {
    title: "🌐 VPN & Online Privacy",
    content: `Whether you're using public Wi-Fi, shopping online, or just browsing — your internet activity can be tracked.  
DefendMePro includes a high-speed, no-log VPN to encrypt your traffic, hide your IP, and protect your identity online.  
Stay anonymous. Stay secure.`
  },
  {
    title: "📞 Spam Call Protection",
    content: `Scammers don't just email — they call.  
DefendMePro flags known scam numbers, filters robocalls, and silences fake tech support or refund scams before you answer.  
No more distractions. Just peace of mind.`
  }
];

const DefendPro = () => {
  const [activeKey, setActiveKey] = useState(null);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  const toggle = (key) => {
    const keyStr = key.toString();
    setActiveKey(activeKey === keyStr ? null : keyStr);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const itemParam = query.get('item');
    if (itemParam) {
      const normalized = itemParam.toLowerCase().replace(/-/g, ' ');
      const matchedIndex = data.findIndex(d =>
        d.title.toLowerCase().includes(normalized)
      );
      if (matchedIndex !== -1) {
        const indexStr = matchedIndex.toString();
        setActiveKey(indexStr);
        setTimeout(() => {
          const card = document.querySelectorAll('.defend-card')[matchedIndex];
          if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    }
  }, [location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppNavbar />
      <div className="defend-container">
        <h1 className="defend-heading">🛡️ DefendMePro</h1>
        <Accordion activeKey={activeKey}>
          {data.map((item, index) => (
            <Card key={index} className={`defend-card ${activeKey === index.toString() ? 'active' : ''}`}>
              <Card.Header onClick={() => toggle(index)} className="defend-toggle">
                <div className="toggle-title">{item.title}</div>
                <div className="toggle-icon">{activeKey === index.toString() ? '➖' : '➕'}</div>
              </Card.Header>
              <Accordion.Collapse eventKey={index.toString()}>
                <Card.Body className="defend-body">{item.content}</Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      </div>

      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ⬆️ Back to Top
        </button>
      )}

      <AllSection />
    </>
  );
};

export default DefendPro;
