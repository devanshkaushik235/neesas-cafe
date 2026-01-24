
import React from 'react';
import Card from '../components/Card';
import { MENU_DATA } from '../constants';
import { ShoppingCart, Clock, MapPin } from 'lucide-react';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Menu Selection */}
          <div className="flex-grow">
            <header className="mb-12">
              <h1 className="serif text-5xl mb-4">Place Your Order</h1>
              <div className="flex space-x-8 text-[10px] uppercase tracking-[0.2em] text-[#A68B77]">
                 <span className="flex items-center"><Clock size={14} className="mr-2" /> Prep: 10-15 mins</span>
                 <span className="flex items-center"><MapPin size={14} className="mr-2" /> Downtown Boutique</span>
              </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {MENU_DATA.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-[#F5F1EA] flex items-center group hover:border-[#A68B77] transition-all cursor-pointer">
                  {item.image && (
                    <div className="h-20 w-20 rounded-xl overflow-hidden mr-4 flex-shrink-0">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                  )}
                  <div className="flex-grow">
                    <h3 className="serif text-lg">{item.name}</h3>
                    <p className="text-xs text-[#A68B77]">{item.price}</p>
                  </div>
                  <button className="h-10 w-10 rounded-full bg-[#F5F1EA] flex items-center justify-center text-[#2C2420] group-hover:bg-[#2C2420] group-hover:text-white transition-all">
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Panel */}
          <div className="w-full lg:w-96">
            <Card className="sticky top-28 border-none shadow-2xl p-0 overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover opacity-80" 
                  alt="Order Decor"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                   <h2 className="serif text-2xl">Your Bag</h2>
                   <ShoppingCart size={20} className="text-[#A68B77]" />
                </div>
                
                <div className="space-y-6 mb-8 py-8 border-y border-[#F5F1EA]">
                   <p className="text-center text-sm text-[#A68B77] italic">Your bag is currently empty.</p>
                   <p className="text-center text-xs font-light">Select items from the menu to start your slow-brew experience.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5D4B42]">Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>

                <button disabled className="w-full py-4 bg-[#F5F1EA] text-[#A68B77] rounded-full text-xs uppercase tracking-widest cursor-not-allowed">
                  Proceed to Checkout
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
