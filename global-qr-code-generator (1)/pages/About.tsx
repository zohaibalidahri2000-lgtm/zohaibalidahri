
import React from 'react';
import { Target, Users, Sparkles, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0D47A1] mb-8 leading-tight">
              One Scan. <br />
              Infinite Connections.
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Global QR Code Generator started with a simple mission: to make the most reliable and user-friendly QR technology accessible to everyone, everywhere. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we serve millions of individuals and businesses, helping them bridge the gap between their physical presence and their digital footprint. From local coffee shops to multinational corporations, our platform provides the tools needed to connect in an instant.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Team at work" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold">Accuracy</h3>
            <p className="text-gray-500 text-sm">Precision-engineered code generation for 100% scan reliability.</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-bold">Ease of Use</h3>
            <p className="text-gray-500 text-sm">Intuitive interfaces that require zero technical expertise.</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold">Privacy</h3>
            <p className="text-gray-500 text-sm">Your data belongs to you. We generate, you own.</p>
          </div>
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold">Community</h3>
            <p className="text-gray-500 text-sm">Built on feedback from our global community of users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
