
import React, { useState, useMemo } from 'react';
import { GALLERY_DATA } from '../constants';

type FilterType = 'all' | 'editorial' | 'cafe' | 'details';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'editorial', name: 'Editorial' },
    { id: 'cafe', name: 'Our Space' },
    { id: 'details', name: 'The Craft' },
  ];

  const filteredItems = useMemo(() => {
    return filter === 'all' 
      ? GALLERY_DATA 
      : GALLERY_DATA.filter(item => item.category === filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">Visual Stories</span>
          <h1 className="serif text-6xl font-light">Quiet Companions</h1>
          <p className="mt-8 text-[#5D4B42] max-w-2xl mx-auto font-light leading-relaxed">
            Our photography reflects the slow, editorial spirit of Neesa’s. 
            Real-world captures of the rustic countryside meeting refined café culture.
          </p>
        </header>

        {/* Filter Navigation */}
        <div className="flex justify-center flex-wrap gap-8 mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as FilterType)}
              className={`text-[10px] uppercase tracking-[0.3em] transition-all relative pb-2 ${
                filter === cat.id 
                  ? 'text-[#2C2420] font-bold' 
                  : 'text-[#A68B77] hover:text-[#2C2420]'
              }`}
            >
              {cat.name}
              {filter === cat.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A68B77] animate-fade-in"></span>
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[300px]">
          {filteredItems.map((item, idx) => {
            // Create a pseudo-random masonry effect by varying spans based on index
            const isWide = (idx % 5 === 0);
            const isTall = (idx % 7 === 0);
            
            return (
              <div 
                key={`${item.id}-${filter}`}
                className={`group relative overflow-hidden rounded-3xl bg-[#F5F1EA] transition-all duration-700 animate-fade-in-up shadow-sm hover:shadow-2xl hover:shadow-[#A68B77]/10 ${
                  isWide ? 'md:col-span-2' : ''
                } ${
                  isTall ? 'row-span-2' : ''
                }`}
              >
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-[#D9C5B2] mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </span>
                  <p className="text-white text-lg serif italic font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-75">
                    {item.caption}
                  </p>
                </div>

                {/* Subtle Loading Placeholder effect is native via background color [#F5F1EA] */}
              </div>
            );
          })}
        </div>

        {/* Footer Philosophy */}
        <div className="mt-32 text-center">
          <div className="h-px w-24 bg-[#D9C5B2] mx-auto mb-12"></div>
          <p className="serif text-2xl italic text-[#A68B77] font-light max-w-lg mx-auto leading-relaxed">
            “In every shadow, there is a story. In every cup, there is a memory.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
