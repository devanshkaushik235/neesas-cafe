
import React, { useState } from 'react';
import Card from '../components/Card';
import { MENU_DATA } from '../constants';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'coffee' | 'specials' | 'snacks'>('all');

  const categories = [
    { id: 'all', name: 'All Offerings' },
    { id: 'coffee', name: 'Slow Brews' },
    { id: 'specials', name: 'Signature Sips' },
    { id: 'snacks', name: 'Light Fare' },
  ];

  const filteredMenu = filter === 'all' ? MENU_DATA : MENU_DATA.filter(i => i.category === filter);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">The Selection</span>
          <h1 className="serif text-6xl font-light">Our Menu</h1>
          <p className="mt-6 text-[#5D4B42] max-w-xl mx-auto font-light leading-relaxed">
            Thoughtfully curated, ethically sourced, and prepared with patience. 
            Enjoy the quiet luxury of a drink made just for you.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest transition-all ${
                filter === cat.id 
                ? 'bg-[#2C2420] text-white' 
                : 'bg-white border border-[#F5F1EA] text-[#5D4B42] hover:border-[#A68B77]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <Card key={item.id} image={item.image} badge={item.category}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="serif text-2xl">{item.name}</h3>
                <span className="text-[#A68B77] font-medium">{item.price}</span>
              </div>
              <p className="text-sm text-[#5D4B42] leading-relaxed mb-8 font-light">
                {item.description}
              </p>
              <button className="w-full py-3 rounded-xl border border-[#F5F1EA] text-[10px] uppercase tracking-widest text-[#2C2420] hover:bg-[#F5F1EA] transition-colors">
                Quick Add
              </button>
            </Card>
          ))}
        </div>

        {/* Special Highlight Card */}
        <section className="mt-24">
          <Card variant="split" image="https://i.pinimg.com/originals/f3/9d/80/f39d8099f2ca17534a3058e7bdb07efb.gif" className="bg-white">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">Limited Time</span>
            <h2 className="serif text-4xl mb-6">Seasonal Tasting Experience</h2>
            <p className="text-[#A68B77]text-lg mb-8 font-light leading-relaxed">
              Every quarter, we select a single-origin bean to feature in our signature tasting flight. 
              Currently highlighting: The Highland Mist Ethiopian Sidamo.
            </p>
            <button className="bg-white text-[#2C2420] px-8 py-3 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#A68B77] transition-all w-fit">
              Learn More
            </button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Menu;
