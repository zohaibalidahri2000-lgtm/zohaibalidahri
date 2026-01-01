
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UrlQR from './pages/UrlQR';
import WifiQR from './pages/WifiQR';
import EmailQR from './pages/EmailQR';
import VCardQR from './pages/VCardQR';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#F5F5F5] selection:bg-[#FFC107] selection:text-[#0D47A1]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/url" element={<UrlQR />} />
            <Route path="/wifi" element={<WifiQR />} />
            <Route path="/email" element={<EmailQR />} />
            <Route path="/vcard" element={<VCardQR />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
