
import React from 'react';
import Card from '../components/Card';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Editorial Header */}
      <section className="py-24 px-4 max-w-5xl mx-auto text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#A68B77] mb-6 block">Our Foundation</span>
        <h1 className="serif text-6xl md:text-8xl mb-12 font-light leading-tight">Grounded in the <span className="italic">Slow Life</span>.</h1>
        <div className="aspect-video rounded-3xl overflow-hidden mb-24 shadow-2xl">
          <img 
            src="https://i.pinimg.com/736x/4f/58/6f/4f586ff3ccf23a397fa808bb5b47b2e3.jpg" 
            className="w-full h-full object-cover" 
            alt="Artistic Cafe Vibe"
          />
        </div>
      </section>

      {/* Story Sections */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div>
            <h2 className="serif text-4xl mb-8">The Philosophy</h2>
            <p className="text-lg text-[#5D4B42] leading-relaxed mb-6 font-light">
              Neesa's Cafe was born from a simple desire: to create a space where time feels like an ally, not an adversary.
            </p>
            <p className="text-lg text-[#5D4B42] leading-relaxed font-light">
              We stripped away the noise—the loud music, the bright lights, the cluttered counters—and left only what matters: the aroma of fresh beans, the warmth of the sun through the glass, and the quiet company of nature.
            </p>
          </div>
          <Card variant="overlay" image="https://i.pinimg.com/736x/2d/fe/bf/2dfebfc5c1c1aa8a31bca96e3ddd1805.jpg" className="h-[500px]">
            <h3 className="serif text-2xl">A curated sensory experience.</h3>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://i.pinimg.com/originals/ba/5a/a6/ba5aa6c9d255c017044a256b65aba14d.gif" className="w-full h-full object-cover" alt="Chicken near table" />
                </div>
                <div className="h-64 mt-16 rounded-2xl overflow-hidden shadow-lg">
                  <img src="https://i.pinimg.com/originals/e1/bd/1a/e1bd1a515a5a97cceb6b98a221ed7a53.gif" className="w-full h-full object-cover" alt="Coffee Pour" />
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="serif text-4xl mb-8">The Environment</h2>
            <p className="text-lg text-[#5D4B42] leading-relaxed mb-6 font-light">
              We share our space with the rhythms of the earth. Our chickens aren't just mascots—they're part of the landscape, roaming the rustic gardens that surround our terrace.
            </p>
            <p className="text-lg text-[#5D4B42] leading-relaxed font-light italic">
              "To be here is to be present."
            </p>
          </div>
        </div>
      </section>

      {/* Values Cards */}
      <section className="bg-[#F5F1EA] py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card image="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800" className="bg-white">
               <h4 className="serif text-2xl mb-6">Integrity</h4>
               <p className="text-sm text-[#5D4B42] leading-relaxed font-light">
                 Every bean is ethically sourced from farmers we know by name. 
                 Transparency is our brewing standard.
               </p>
            </Card>
            <Card image="https://i.pinimg.com/1200x/34/f8/cb/34f8cb708e8c9b7e84204a4b1cc7fb8d.jpg" className="bg-white">
               <h4 className="serif text-2xl mb-6">Stillness</h4>
               <p className="text-sm text-[#5D4B42] leading-relaxed font-light">
                 Our space is designed for quiet reflection. We encourage a digital detox 
                 to truly taste the moment.
               </p>
            </Card>
            <Card image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800" className="bg-white">
               <h4 className="serif text-2xl mb-6">Artistry</h4>
               <p className="text-sm text-[#5D4B42] leading-relaxed font-light">
                 Barista craft is an art form. We slow down the process to ensure every 
                 cup is a masterpiece of texture and flavor.
               </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
