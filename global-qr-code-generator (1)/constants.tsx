
import React from 'react';
import { Link2, Wifi, Mail, Contact2, FileText, Info, HelpCircle } from 'lucide-react';
import { QRType } from './types';

export const COLORS = {
  primary: '#0D47A1',
  secondary: '#1976D2',
  accent: '#FFC107',
  background: '#FFFFFF',
  surface: '#F5F5F5',
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: <Link2 size={18} /> },
  { label: 'URL QR', path: '/url', icon: <Link2 size={18} /> },
  { label: 'WiFi QR', path: '/wifi', icon: <Wifi size={18} /> },
  { label: 'Email QR', path: '/email', icon: <Mail size={18} /> },
  { label: 'Business Card', path: '/vcard', icon: <Contact2 size={18} /> },
  { label: 'Blog', path: '/blog', icon: <FileText size={18} /> },
  { label: 'About', path: '/about', icon: <Info size={18} /> },
  { label: 'Contact', path: '/contact', icon: <HelpCircle size={18} /> },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Top 5 QR Code Marketing Strategies for 2024',
    excerpt: 'Learn how leading brands are leveraging QR codes to bridge the physical and digital gap.',
    category: 'Marketing',
    date: 'Oct 12, 2024',
    imageUrl: 'https://picsum.photos/seed/qr1/800/400'
  },
  {
    id: '2',
    title: 'Securing Your WiFi with QR Codes',
    excerpt: 'Sharing your password manually is a thing of the past. Discover the safest way to share your network.',
    category: 'Security',
    date: 'Oct 15, 2024',
    imageUrl: 'https://picsum.photos/seed/qr2/800/400'
  },
  {
    id: '3',
    title: 'The Future of Networking: Digital Business Cards',
    excerpt: 'Why vCard QR codes are replacing traditional cardstock in professional circles.',
    category: 'Business',
    date: 'Oct 18, 2024',
    imageUrl: 'https://picsum.photos/seed/qr3/800/400'
  }
];
