
import React, { useState, useMemo } from 'react';
import { Contact2, Building2, Phone, Globe, MapPin } from 'lucide-react';
import QRCodePreview from '../components/QRCodePreview';
import { VCardData, QRConfig } from '../types';

const VCardQR: React.FC = () => {
  const [data, setData] = useState<VCardData>({
    firstName: '',
    lastName: '',
    organization: '',
    title: '',
    phone: '',
    email: '',
    url: '',
    address: ''
  });

  const qrValue = useMemo(() => {
    return `BEGIN:VCARD
VERSION:3.0
N:${data.lastName};${data.firstName};;;
FN:${data.firstName} ${data.lastName}
ORG:${data.organization}
TITLE:${data.title}
TEL;TYPE=CELL:${data.phone}
EMAIL;TYPE=WORK:${data.email}
URL:${data.url}
ADR;TYPE=WORK:;;${data.address};;;;
END:VCARD`;
  }, [data]);

  const [config] = useState<QRConfig>({
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'L',
    size: 256,
    includeMargin: true
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[#0D47A1] mb-2">vCard (Business Card) QR</h1>
        <p className="text-gray-500">Share your complete professional profile with a single scan.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Contact2 className="text-purple-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  value={data.firstName}
                  onChange={(e) => setData({ ...data, firstName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  value={data.lastName}
                  onChange={(e) => setData({ ...data, lastName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="text-blue-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Professional Details</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Organization</label>
                <input
                  type="text"
                  value={data.organization}
                  onChange={(e) => setData({ ...data, organization: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="Acme Corp"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="Senior Developer"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Phone className="text-gray-600" size={20} />
              </div>
              <h2 className="text-xl font-semibold">Contact & Links</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Website URL</label>
                <input
                  type="url"
                  value={data.url}
                  onChange={(e) => setData({ ...data, url: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="https://company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Location / Address</label>
                <input
                  type="text"
                  value={data.address}
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1976D2] transition-all"
                  placeholder="New York, USA"
                />
              </div>
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

export default VCardQR;
