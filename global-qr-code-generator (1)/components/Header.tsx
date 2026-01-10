
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, QrCode } from 'lucide-react';
import { NAV_ITEMS, COLORS } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-[#0D47A1] rounded-lg group-hover:bg-[#1976D2] transition-colors">
              <QrCode className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold text-[#0D47A1] tracking-tight">QR<span className="text-[#1976D2]">Global</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#0D47A1] bg-blue-50'
                    : 'text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <button className="bg-[#FFC107] text-[#0D47A1] font-semibold px-5 py-2 rounded-full shadow-sm hover:shadow-md hover:bg-yellow-400 transition-all active:scale-95">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#0D47A1] hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 absolute w-full animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-[#0D47A1] bg-blue-50'
                    : 'text-gray-600 hover:text-[#0D47A1] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 px-3">
              <button className="w-full bg-[#0D47A1] text-white font-semibold px-4 py-3 rounded-lg hover:bg-[#1976D2] transition-all">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
