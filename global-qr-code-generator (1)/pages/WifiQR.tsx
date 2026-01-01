
import React, { useState, useMemo } from 'react';
import { Wifi, Shield, Eye, EyeOff } from 'lucide-react';
import QRCodePreview from '../components/QRCodePreview';
import { WifiData, QRConfig } from '../types';

const WifiQR: React.FC = () => {
  const [data, setData] = useState<WifiData>({
    ssid: '',
    password: '',
    encryption: 'WPA',
    hidden: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const qrValue = useMemo(() => {
    return `WIFI:S:${data.ssid};T:${data.encryption};P:${data.password};H:${data.hidden ? 'true' : 'false'};;`;
  }, [data]);

  const [config] = useState<QRConfig>({
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'M',
    size: 256,
    includeMargin: true
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0D47A1] mb-2">WiFi QR Code</h1>
        <p className="text-gray-500">Let guests connect to your network instantly without typing passwords.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Wifi className="text-green-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Network Details</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">SSID (Network Name)</label>
                <input
                  type="text"
                  value={data.ssid}
                  onChange={(e) => setData({ ...data, ssid: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="My Home WiFi"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Encryption Type</label>
                <select
                  value={data.encryption}
                  onChange={(e) => setData({ ...data, encryption: e.target.value as any })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                >
                  <option value="WPA">WPA/WPA2 (Most Common)</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">None (Open)</option>
                </select>
              </div>
            </div>

            {data.encryption !== 'nopass' && (
              <div className="space-y-2 relative">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center space-x-3">
              <input
                type="checkbox"
                id="hidden-ssid"
                checked={data.hidden}
                onChange={(e) => setData({ ...data, hidden: e.target.checked })}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="hidden-ssid" className="text-sm text-gray-600 cursor-pointer">
                This is a hidden network
              </label>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex items-start space-x-4">
            <Shield className="text-blue-600 mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-blue-900">Security Note</h4>
              <p className="text-sm text-blue-700 leading-relaxed">
                We never store your WiFi credentials. The QR code is generated entirely in your browser. It is safe to print and share this code in your guest areas.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
             <QRCodePreview value={qrValue} config={config} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WifiQR;
