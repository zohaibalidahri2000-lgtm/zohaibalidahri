
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Link2, Wifi, Mail, Contact2, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const Home: React.FC = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleQuickGen = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      navigate(`/url?data=${encodeURIComponent(url)}`);
    }
  };

  const featureCards = [
    { title: 'URL to QR', description: 'Convert any web link into a scannable code.', icon: <Link2 className="text-blue-600" />, path: '/url', color: 'bg-blue-50' },
    { title: 'WiFi QR', description: 'Share your network without revealing passwords.', icon: <Wifi className="text-green-600" />, path: '/wifi', color: 'bg-green-50' },
    { title: 'Email QR', description: 'Pre-filled email address, subject, and body.', icon: <Mail className="text-red-600" />, path: '/email', color: 'bg-red-50' },
    { title: 'vCard QR', description: 'The modern way to share professional contacts.', icon: <Contact2 className="text-purple-600" />, path: '/vcard', color: 'bg-purple-50' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-5 pointer-events-none">
           <QRCodeSVG value="https://qr-global.com" size={600} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Fast & Free Generation</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-[#0D47A1] leading-tight">
                Generate Professional <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D47A1] to-[#1976D2]">QR Codes Instantly</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Empower your marketing, business operations, and personal networking with high-quality, customizable QR codes. 
              </p>

              <form onSubmit={handleQuickGen} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto lg:mx-0">
                <input
                  type="url"
                  placeholder="Paste your URL here..."
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] shadow-sm transition-all"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0D47A1] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-[#1976D2] hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Generate</span>
                  <ArrowRight size={20} />
                </button>
              </form>

              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <ShieldCheck className="text-blue-600" size={18} />
                  <span>Privacy First</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Zap className="text-yellow-500" size={18} />
                  <span>Instant Render</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Globe className="text-green-600" size={18} />
                  <span>Global Reach</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-3xl rotate-6 -z-10 blur-xl opacity-50"></div>
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <QRCodeSVG value="https://qr-global.com" size={240} fgColor="#0D47A1" />
                  <div className="mt-6 text-center">
                    <p className="font-bold text-[#0D47A1]">Scan to Explore</p>
                    <p className="text-xs text-gray-400">Sample Professional QR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Formats for Every Need</h2>
            <p className="text-gray-600">Choose from our specialized generators optimized for different use cases.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featureCards.map((card, idx) => (
              <Link
                key={idx}
                to={card.path}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
              >
                <div className={`p-4 rounded-xl ${card.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(card.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0D47A1] py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start Generating Your QR Now</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto font-light">
              Join thousands of businesses worldwide using our platform for fast, reliable, and professional QR codes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/url" className="bg-[#FFC107] text-[#0D47A1] font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-400 transition-all hover:scale-105 active:scale-95">
                Get Started Free
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white/10 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
