
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D47A1] mb-6">Get In Touch</h1>
            <p className="text-gray-600 text-lg">
              Have questions or need custom QR solutions? Our global support team is here to help you 24/7.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Email Support</h4>
                <p className="text-gray-600">zohaibalidahri08@gmail.com</p>
                <p className="text-xs text-gray-400 mt-1">Average response time: 2 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-green-50 rounded-xl text-green-600">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Live Chat</h4>
                <p className="text-gray-600">Available Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-yellow-50 rounded-xl text-yellow-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Headquarters</h4>
                <p className="text-gray-600">Global Tech Center, Suite 500 <br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-bold">Message Sent!</h3>
              <p className="text-gray-500">Thank you for reaching out. Our team will get back to you shortly.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-blue-600 font-semibold underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help?"
                  value={form.subject}
                  onChange={(e) => setForm({...form, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Type your message here..."
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0D47A1] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#1976D2] transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
