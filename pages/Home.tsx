
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { ArrowRight } from 'lucide-react';
import { MENU_DATA, REVIEWS_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/originals/2c/d3/65/2cd3653068d133879af53f33b25002be.gif" 
            className="w-full h-full object-cover opacity-70"
            alt="Cafe Interior"
          />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="serif text-5xl md:text-8xl mb-6 tracking-tight font-light">
            Slow brews. <br />
            <span className="italic">Warm moments.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5D4B42] mb-12 tracking-wide font-light max-w-2xl mx-auto">
            Experience the quiet artistry of Neesa’s Cafe. 
            A sanctuary for the senses in a busy world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/menu" className="bg-[#2C2420] text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:bg-[#A68B77] transition-all">
              Explore Menu
            </Link>
            <Link to="/order" className="border border-[#2C2420] text-[#2C2420] px-10 py-4 rounded-full text-xs uppercase tracking-widest hover:border-[#A68B77] hover:text-[#A68B77] transition-all">
              Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68B77] mb-2 block">Our Favorites</span>
            <h2 className="serif text-4xl">Seasonal Specials</h2>
          </div>
          <Link to="/menu" className="hidden md:flex items-center text-xs uppercase tracking-widest text-[#5D4B42] hover:text-[#A68B77] transition-colors">
            View All Menu <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MENU_DATA.filter(i => i.isPopular).concat(MENU_DATA.slice(0, 2)).map((item) => (
            <Card key={item.id} image={item.image} badge={item.category}>
              <h3 className="serif text-xl mb-2">{item.name}</h3>
              <p className="text-sm text-[#5D4B42] leading-relaxed mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-[#A68B77] font-medium">{item.price}</span>
                <button className="text-[10px] uppercase tracking-widest text-[#2C2420] border-b border-[#2C2420] pb-1 hover:text-[#A68B77] hover:border-[#A68B77] transition-all">
                  Add to bag
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* About Teaser (Editorial Layout) */}
      <section className="bg-[#F5F1EA] py-32 mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover" 
                  alt="Editorial Chicken Imagery"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-[#A68B77]/20 rounded-2xl -z-0"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A68B77] mb-4 block">The Experience</span>
              <h2 className="serif text-5xl mb-8 leading-tight">Grounded in Nature, <br />Crafted with Care.</h2>
              <p className="text-[#5D4B42] text-lg leading-relaxed mb-8 font-light">
                At Neesa's, we believe that the environment is as important as the brew. Our rustic café space is a sanctuary where nature and hospitality meet.
              </p>
              <p className="text-[#5D4B42] text-lg leading-relaxed mb-12 font-light">
                Whether you're joined by our peaceful morning fog or the quiet companionship of the surrounding countryside, every moment here is designed for stillness.
              </p>
              <Link to="/about" className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#2C2420] border-b-2 border-[#A68B77] pb-2">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <h2 className="serif text-4xl italic">“A sanctuary in every sip.”</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.slice(0, 2).map((review) => (
            <Card key={review.id} variant="text-only" className="bg-[#FDFBF7] border-none shadow-none">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`h-1.5 w-1.5 rounded-full ${i < review.rating ? 'bg-[#A68B77]' : 'bg-[#D9C5B2]'}`}></span>
                ))}
              </div>
              <p className="text-xl serif italic mb-8 leading-relaxed text-[#2C2420]">"{review.text}"</p>
              <div className="flex items-center space-x-4">
                {review.avatar && (
                  <img src={review.avatar} alt={review.author} className="w-10 h-10 rounded-full object-cover grayscale opacity-80" />
                )}
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold">{review.author}</p>
                  <p className="text-[10px] text-[#A68B77] mt-1 uppercase tracking-tighter">{review.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
