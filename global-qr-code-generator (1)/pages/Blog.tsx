
import React from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0D47A1] mb-6">QR Insights & Trends</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Discover the latest in QR technology, marketing strategies, and best practices to help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group">
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#0D47A1] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                <span className="flex items-center"><Calendar size={14} className="mr-1.5" /> {post.date}</span>
                <span className="flex items-center"><User size={14} className="mr-1.5" /> QR Team</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#1976D2] transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <button className="text-[#0D47A1] font-bold flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 bg-gray-50 rounded-3xl p-12 text-center border border-gray-200">
        <Tag className="mx-auto text-blue-600 mb-6" size={40} />
        <h3 className="text-2xl font-bold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {['Marketing', 'WiFi', 'Security', 'vCard', 'Design', 'Case Study', 'Tech', 'Enterprise'].map(tag => (
            <span key={tag} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-600 hover:border-blue-500 hover:text-blue-600 cursor-pointer transition-colors">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
