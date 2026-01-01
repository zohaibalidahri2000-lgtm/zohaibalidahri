
export enum QRType {
  URL = 'URL',
  WIFI = 'WiFi',
  EMAIL = 'Email',
  VCARD = 'vCard'
}

export interface QRConfig {
  fgColor: string;
  bgColor: string;
  level: 'L' | 'M' | 'Q' | 'H';
  size: number;
  includeMargin: boolean;
  imageSettings?: {
    src: string;
    x?: number;
    y?: number;
    height: number;
    width: number;
    excavate: boolean;
  };
}

export interface WifiData {
  ssid: string;
  password?: string;
  encryption: 'WEP' | 'WPA' | 'nopass';
  hidden: boolean;
}

export interface EmailData {
  email: string;
  subject: string;
  body: string;
}

export interface VCardData {
  firstName: string;
  lastName: string;
  organization: string;
  title: string;
  phone: string;
  email: string;
  url: string;
  address: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
}
