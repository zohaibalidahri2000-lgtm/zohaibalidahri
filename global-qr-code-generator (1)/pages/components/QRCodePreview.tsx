
import React, { useRef } from 'react';
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { Download, Share2, Copy, Check } from 'lucide-react';
import { QRConfig } from '../types';

interface Props {
  value: string;
  config: QRConfig;
}

const QRCodePreview: React.FC<Props> = ({ value, config }) => {
  const [copied, setCopied] = React.useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleDownload = (format: 'png' | 'svg') => {
    if (format === 'svg') {
      const svg = document.querySelector('#qr-svg-preview');
      if (!svg) return;
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const svgUrl = URL.createObjectURL(svgBlob);
      const downloadLink = document.createElement('a');
      downloadLink.href = svgUrl;
      downloadLink.download = `qr-code-${Date.now()}.svg`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      const canvas = document.querySelector('#qr-canvas-preview canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `qr-code-${Date.now()}.png`;
      link.href = url;
      link.click();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-8 rounded-2xl qr-shadow flex flex-col items-center">
      <div 
        className="relative bg-white p-4 rounded-xl border border-gray-100 mb-8"
        style={{ backgroundColor: config.bgColor }}
      >
        <div id="qr-svg-preview" className="hidden">
           <QRCodeSVG
            value={value}
            size={config.size}
            fgColor={config.fgColor}
            bgColor={config.bgColor}
            level={config.level}
            includeMargin={config.includeMargin}
            imageSettings={config.imageSettings}
          />
        </div>
        <div id="qr-canvas-preview">
          <QRCodeCanvas
            value={value}
            size={config.size}
            fgColor={config.fgColor}
            bgColor={config.bgColor}
            level={config.level}
            includeMargin={config.includeMargin}
            imageSettings={config.imageSettings}
          />
        </div>
      </div>

      <div className="w-full space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => handleDownload('png')}
            className="flex items-center justify-center space-x-2 bg-[#0D47A1] text-white py-3 rounded-lg hover:bg-[#1976D2] transition-colors"
          >
            <Download size={18} />
            <span>PNG</span>
          </button>
          <button
            onClick={() => handleDownload('svg')}
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Download size={18} />
            <span>SVG</span>
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={handleCopy}
            className="flex-1 flex items-center justify-center space-x-2 border border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
          >
            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            <span>{copied ? 'Copied' : 'Copy Value'}</span>
          </button>
          <button className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400">High Resolution Vector & Raster Ready</p>
      </div>
    </div>
  );
};

export default QRCodePreview;
