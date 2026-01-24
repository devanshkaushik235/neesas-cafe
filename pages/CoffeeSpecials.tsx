
import React from 'react';
import Card from '../components/Card';
import { MENU_DATA } from '../constants';

const CoffeeSpecials: React.FC = () => {
  const specials = MENU_DATA.filter(i => i.category === 'specials');

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">Limited Collection</span>
          <h1 className="serif text-6xl font-light">Signature Sips</h1>
          <p className="mt-8 text-lg text-[#5D4B42] font-light leading-relaxed max-w-xl mx-auto">
            Elevated flavor profiles and seasonal infusions designed for the curious palate.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {specials.map((item) => (
            <Card key={item.id} variant="split" image={item.image} className="bg-white">
              <span className="text-[10px] uppercase tracking-widest text-[#A68B77] mb-2 block">Special Reserve</span>
              <h2 className="serif text-3xl mb-4">{item.name}</h2>
              <p className="text-[#5D4B42] text-sm leading-relaxed mb-8 font-light italic">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-medium text-[#2C2420]">{item.price}</span>
                <button className="text-[10px] uppercase tracking-widest border-b border-[#2C2420] pb-1 hover:text-[#A68B77] transition-all">
                  Order Now
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeSpecials;
