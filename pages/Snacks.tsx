
import React from 'react';
import Card from '../components/Card';
import { MENU_DATA } from '../constants';

const Snacks: React.FC = () => {
  const snacks = MENU_DATA.filter(i => i.category === 'snacks');

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">From the Oven</span>
          <h1 className="serif text-6xl font-light">Light Fare</h1>
          <p className="mt-8 text-lg text-[#5D4B42] font-light leading-relaxed max-w-xl mx-auto">
            Small plates and artisanal pastries, baked fresh every morning in our farmhouse kitchen.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {snacks.map((item) => (
            <Card key={item.id} image={item.image}>
              <h3 className="serif text-2xl mb-2">{item.name}</h3>
              <p className="text-[#5D4B42] text-sm mb-6 font-light leading-relaxed">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#A68B77]">{item.price}</span>
                <button className="text-[10px] uppercase tracking-widest font-bold">Add</button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Snacks;
