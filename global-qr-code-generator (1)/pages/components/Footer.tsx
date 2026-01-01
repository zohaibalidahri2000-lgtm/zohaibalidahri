
import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-[#1976D2] rounded-lg">
                <QrCode className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight">QR<span className="text-[#1976D2]">Global</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses and individuals worldwide with professional, fast, and free QR code solutions. Built for a connected future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#1976D2] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1976D2] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1976D2] transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#1976D2] transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Generators</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/url" className="hover:text-white transition-colors">URL to QR Code</Link></li>
              <li><Link to="/wifi" className="hover:text-white transition-colors">WiFi QR Code</Link></li>
              <li><Link to="/email" className="hover:text-white transition-colors">Email QR Code</Link></li>
              <li><Link to="/vcard" className="hover:text-white transition-colors">vCard QR Code</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Platform</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & News</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail className="text-[#1976D2] mt-1 group-hover:scale-110 transition-transform" size={20} />
                <span className="text-gray-400 text-sm">zohaibalidahri08@gmail.com</span>
              </div>
              <p className="text-gray-400 text-sm">
                24/7 Global Support available for premium users.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs uppercase tracking-widest">
          <p>© 2024 QR Global Platform. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Server Status: Optimal</span>
            <span>Security: AES-256</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
