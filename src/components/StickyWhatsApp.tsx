import React from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '../constants';

export default function StickyWhatsApp() {
  return (
    <a 
      href={waLink}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group overflow-hidden"
    >
      <MessageCircle className="w-8 h-8 relative z-10" />
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    </a>
  );
}
