
import React from 'react';
import Card from '../components/Card';
import { REVIEWS_DATA } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <header className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">Testimonials</span>
          <h1 className="serif text-6xl font-light italic">Your Words</h1>
          <p className="mt-8 text-lg text-[#5D4B42] font-light leading-relaxed max-w-xl mx-auto">
            The heart of Neesa’s is our community. Thank you for sharing your moments of stillness with us.
          </p>
        </header>

        {/* Hero-style Editorial Image for Reviews */}
        <div className="w-full aspect-[21/7] rounded-3xl overflow-hidden mb-24 shadow-lg">
          <img 
            src="https://i.pinimg.com/1200x/5e/67/0d/5e670d3aadf8d9c14a7034dbb1448328.jpg" 
            className="w-full h-full object-cover grayscale-[20%] opacity-90" 
            alt="Cafe Seating Atmosphere"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {REVIEWS_DATA.map((review, idx) => (
            <React.Fragment key={review.id}>
              <Card variant="text-only" className="bg-white p-12 border-none shadow-sm hover:shadow-xl transition-all">
                <div className="flex items-center space-x-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`h-2 w-2 rounded-full ${i < review.rating ? 'bg-[#A68B77]' : 'bg-[#D9C5B2]'}`}></span>
                  ))}
                </div>
                <p className="serif text-2xl italic text-[#2C2420] leading-relaxed mb-10">"{review.text}"</p>
                <div className="flex items-center justify-between border-t border-[#F5F1EA] pt-8">
                   <div className="flex items-center space-x-4">
                     {review.avatar && (
                        <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full object-cover grayscale opacity-80" />
                     )}
                     <div>
                       <p className="text-xs uppercase tracking-widest font-bold">{review.author}</p>
                       <p className="text-[10px] text-[#A68B77] mt-1 uppercase tracking-tighter">{review.date}</p>
                     </div>
                   </div>
                   <span className="text-[10px] text-[#D9C5B2] uppercase tracking-[0.2em]">Verified Guest</span>
                </div>
              </Card>
              
              {/* Insert decorative image between items for visual rhythm */}
              {idx === 1 && (
                <div className="md:col-span-2 py-12">
                  <div className="w-full h-96 rounded-3xl overflow-hidden">
                   <img 
  src="https://i.pinimg.com/1200x/37/69/d2/3769d2577e6206aa54674b9fc8066807.jpg" 
  className="w-full h-full object-cover object-[50%_90%]" 
     alt="Neesa"
/>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
