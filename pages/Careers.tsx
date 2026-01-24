
import React from 'react';
import { CAREERS_DATA } from '../constants';
import { ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-4 block">Join Our Team</span>
          <h1 className="serif text-6xl font-light">Cultivate Stillness</h1>
          <p className="mt-8 text-lg text-[#5D4B42] font-light leading-relaxed max-w-2xl mx-auto">
            We are always looking for individuals who value patience, precision, and hospitality. 
            At Neesa’s, we don’t just serve coffee—we create pauses in the day.
          </p>
        </header>

        {/* Hero-style Editorial Image for Careers */}
        <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-20 shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover grayscale-[10%]" 
            alt="Cafe Interior Soft Light"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {CAREERS_DATA.map((job) => (
            <div 
              key={job.id} 
              className="bg-white p-10 rounded-3xl border border-[#F5F1EA] hover:border-[#A68B77] hover:shadow-xl hover:shadow-[#A68B77]/5 transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                   <div className="flex items-center space-x-3 mb-2">
                     <span className="text-[10px] uppercase tracking-widest text-[#A68B77] bg-[#F5F1EA] px-2 py-1 rounded">{job.type}</span>
                     <span className="text-[10px] uppercase tracking-widest text-[#5D4B42]">{job.location}</span>
                   </div>
                   <h3 className="serif text-3xl mb-4">{job.title}</h3>
                   <p className="text-sm text-[#5D4B42] leading-relaxed font-light max-w-xl">
                     {job.description}
                   </p>
                </div>
                <div className="mt-8 md:mt-0">
                  <button className="flex items-center text-xs uppercase tracking-widest text-[#2C2420] group-hover:text-[#A68B77] transition-colors">
                    Apply Now <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-[#F5F1EA] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center">
           <div className="w-full md:w-1/2 h-80 md:h-auto">
             <img 
               src="https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover" 
               alt="Editorial Coffee Details"
             />
           </div>
           <div className="w-full md:w-1/2 p-16 text-center md:text-left">
             <h2 className="serif text-3xl mb-6">General Inquiries</h2>
             <p className="text-[#5D4B42] text-sm mb-8 leading-relaxed font-light">
               Don't see a position that fits? We’re always open to meeting talented creators and baristas. Send your portfolio and resume to careers@neesascafe.com
             </p>
             <button className="bg-[#2C2420] text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#A68B77] transition-all">
               Send Resume
             </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
