
import React from 'react';
import Card from '../components/Card';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">Get in Touch</span>
            <h1 className="serif text-6xl mb-8 leading-tight">We’d love to <br /><span className="italic">hear from you.</span></h1>
            
            <div className="space-y-10 mt-16">
              <div className="flex items-start space-x-6">
                <div className="bg-[#F5F1EA] p-4 rounded-full text-[#A68B77]"><MapPin size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Location</h4>
                  <p className="text-sm text-[#5D4B42] leading-relaxed font-light">124 Quiet Lane, Hearthstone Valley <br />Countryside, SC 82910</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-[#F5F1EA] p-4 rounded-full text-[#A68B77]"><Phone size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Phone</h4>
                  <p className="text-sm text-[#5D4B42] font-light">+1 (555) 482-9012</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="bg-[#F5F1EA] p-4 rounded-full text-[#A68B77]"><Mail size={24} /></div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Email</h4>
                  <p className="text-sm text-[#5D4B42] font-light">hello@neesascafe.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 rounded-3xl overflow-hidden h-64 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all shadow-xl">
               <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200" alt="Map Placeholder" className="w-full h-full object-cover" />
            </div>
          </div>

          <Card className="p-12 border-none shadow-2xl bg-white">
            <h2 className="serif text-3xl mb-10">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#A68B77] font-bold">Your Name</label>
                  <input type="text" className="w-full bg-[#FDFBF7] border-b border-[#F5F1EA] p-3 focus:border-[#A68B77] outline-none transition-colors text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#A68B77] font-bold">Email Address</label>
                  <input type="email" className="w-full bg-[#FDFBF7] border-b border-[#F5F1EA] p-3 focus:border-[#A68B77] outline-none transition-colors text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A68B77] font-bold">Subject</label>
                <select className="w-full bg-[#FDFBF7] border-b border-[#F5F1EA] p-3 focus:border-[#A68B77] outline-none transition-colors text-sm appearance-none">
                  <option>General Inquiry</option>
                  <option>Reservations</option>
                  <option>Private Events</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#A68B77] font-bold">Message</label>
                <textarea rows={5} className="w-full bg-[#FDFBF7] border-b border-[#F5F1EA] p-3 focus:border-[#A68B77] outline-none transition-colors text-sm resize-none"></textarea>
              </div>
              <button className="w-full py-5 bg-[#2C2420] text-white rounded-full text-xs uppercase tracking-widest hover:bg-[#A68B77] transition-all flex items-center justify-center">
                Send Message <Send size={14} className="ml-2" />
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
