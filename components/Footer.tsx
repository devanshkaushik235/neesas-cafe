
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F1EA] text-[#2C2420] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="serif text-3xl mb-4 tracking-wider uppercase">Neesa's Cafe</h3>
            <p className="text-[#5D4B42] max-w-sm leading-relaxed text-sm">
              We believe in the beauty of slow mornings and the quiet artistry of a perfect brew. 
              No distractions, just warm moments.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-[#A68B77] hover:text-[#2C2420] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-[#A68B77] hover:text-[#2C2420] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-[#A68B77] hover:text-[#2C2420] transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Hours</h4>
            <ul className="text-sm text-[#5D4B42] space-y-3">
              <li>Mon — Fri: 7am - 6pm</li>
              <li>Sat — Sun: 8am - 8pm</li>
              <li className="pt-2 text-[#A68B77]">124 Quiet Lane, Hearthstone</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Contact</h4>
            <ul className="text-sm text-[#5D4B42] space-y-3">
              <li>hello@neesascafe.com</li>
              <li>+1 (555) 482-9012</li>
              <li className="pt-4">
                <button className="text-[10px] uppercase tracking-[0.2em] border-b border-[#A68B77] pb-1 hover:text-[#A68B77]">
                  Newsletter Signup
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#D9C5B2]/30 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-[#A68B77]">
          <p>&copy; 2024 NEESA'S CAFE. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#2C2420]">Privacy Policy</a>
            <a href="#" className="hover:text-[#2C2420]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
