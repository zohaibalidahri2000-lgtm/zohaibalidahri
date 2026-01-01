
import React, { useState, useMemo } from 'react';
import { Mail, Type, MessageSquare } from 'lucide-react';
import QRCodePreview from '../components/QRCodePreview';
import { EmailData, QRConfig } from '../types';

const EmailQR: React.FC = () => {
  const [data, setData] = useState<EmailData>({
    email: '',
    subject: '',
    body: ''
  });

  const qrValue = useMemo(() => {
    return `MATMSG:TO:${data.email};SUB:${data.subject};BODY:${data.body};;`;
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
        <h1 className="text-4xl font-bold text-[#0D47A1] mb-2">Email QR Code</h1>
        <p className="text-gray-500">Perfect for feedback forms, newsletter signups, or support requests.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Mail className="text-red-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Recipient Details</h2>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="hello@company.com"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Type className="text-blue-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Message Content</h2>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Subject Line</label>
                <input
                  type="text"
                  value={data.subject}
                  onChange={(e) => setData({ ...data, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="Inquiry about services"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Message Body</label>
                <textarea
                  rows={4}
                  value={data.body}
                  onChange={(e) => setData({ ...data, body: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all resize-none"
                  placeholder="Type the message you want pre-filled..."
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl flex items-center space-x-4 border border-gray-100">
             <MessageSquare className="text-gray-400" size={24} />
             <p className="text-sm text-gray-500">
               When scanned, the user's default email app will open with these details already filled in. They just need to press send!
             </p>
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

export default EmailQR;
