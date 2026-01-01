
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link2, Palette, Settings } from 'lucide-react';
import QRCodePreview from '../components/QRCodePreview';
import { QRConfig } from '../types';

const UrlQR: React.FC = () => {
  const [url, setUrl] = useState('https://google.com');
  const [config, setConfig] = useState<QRConfig>({
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'M',
    size: 256,
    includeMargin: true
  });

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const data = params.get('data');
    if (data) setUrl(data);
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0D47A1] mb-2">URL to QR Code</h1>
        <p className="text-gray-500">Convert web links, social profiles, and articles into scannable codes.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Link2 className="text-blue-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Enter URL</h2>
            </div>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
              placeholder="https://example.com"
            />
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Palette className="text-yellow-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Customization</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Foreground Color</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={config.fgColor}
                    onChange={(e) => setConfig({ ...config, fgColor: e.target.value })}
                    className="h-10 w-10 border-0 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={config.fgColor}
                    onChange={(e) => setConfig({ ...config, fgColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Background Color</label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={config.bgColor}
                    onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                    className="h-10 w-10 border-0 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={config.bgColor}
                    onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Settings className="text-purple-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Technical Settings</h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="space-y-2 flex-1 min-w-[150px]">
                <label className="text-sm text-gray-500">Error Correction</label>
                <select 
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
                  value={config.level}
                  onChange={(e) => setConfig({...config, level: e.target.value as any})}
                >
                  <option value="L">Low (7%)</option>
                  <option value="M">Medium (15%)</option>
                  <option value="Q">Quartile (25%)</option>
                  <option value="H">High (30%)</option>
                </select>
              </div>
              <div className="space-y-2 flex-1 min-w-[150px]">
                <label className="text-sm text-gray-500">Margin</label>
                <div className="flex items-center space-x-2 py-2">
                  <input 
                    type="checkbox" 
                    checked={config.includeMargin}
                    onChange={(e) => setConfig({...config, includeMargin: e.target.checked})}
                    className="h-4 w-4 text-blue-600 rounded"
                  />
                  <span className="text-sm">Include Quiet Zone</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <QRCodePreview value={url} config={config} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlQR;
