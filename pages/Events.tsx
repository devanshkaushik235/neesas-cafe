
import React from 'react';
import Card from '../components/Card';
import { EVENTS_DATA } from '../constants';

const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">The Calendar</span>
          <h1 className="serif text-6xl font-light">Events & Offers</h1>
          <p className="mt-8 text-lg text-[#5D4B42] font-light leading-relaxed max-w-xl mx-auto">
            Moments worth sharing. Join us for workshops, tastings, and quiet celebrations.
          </p>
        </header>

        <div className="space-y-12">
          {EVENTS_DATA.map((event) => (
            <Card key={event.id} variant="split" image={event.image} className="bg-white">
              <span className="text-[10px] uppercase tracking-widest text-[#A68B77] mb-2 block">{event.date}</span>
              <h2 className="serif text-4xl mb-6">{event.title}</h2>
              <p className="text-[#5D4B42] leading-relaxed mb-8 font-light">{event.description}</p>
              <button className="bg-[#2C2420] text-white px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#A68B77] transition-all w-fit">
                Book a Spot
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-32 p-16 bg-[#2C2420] text-white rounded-3xl text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-40 ">
             <img src="https://i.pinimg.com/originals/a3/a2/47/a3a2471e414d7a5a402e56b4218c5702.gif" className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10">
             <span className="text-[10px] uppercase tracking-[0.4em] text-[#D9C5B2] mb-4 block">Exclusive Membership</span>
             <h2 className="serif text-4xl mb-8 leading-tight">Join the Slow Brew Society</h2>
             <p className="text-white/70 max-w-lg mx-auto mb-10 font-light leading-relaxed text-sm">
               Subscribers receive first access to new releases, private events, and a monthly curation of our finest whole beans.
             </p>
             <form className="max-w-md mx-auto flex gap-4">
                <input type="email" placeholder="Your Email" className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#A68B77] transition-all" />
                <button className="bg-white text-[#2C2420] px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#A68B77] transition-all">Join</button>
             </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
