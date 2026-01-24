
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { 
      path: '/menu', 
      name: 'Menu', 
      subLinks: [
        { path: '/specials', name: 'Specials' },
        { path: '/snacks', name: 'Snacks' }
      ]
    },
    { path: '/gallery', name: 'Gallery' },
    { path: '/events', name: 'Events' },
    { path: '/reviews', name: 'Reviews' },
    { path: '/order', name: 'Order' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="serif text-2xl tracking-widest text-[#2C2420] uppercase">
              Neesa's Cafe
            </NavLink>
          </div>
          
          <div className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group" onMouseEnter={() => link.subLinks && setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[10px] uppercase tracking-widest transition-colors flex items-center hover:text-[#A68B77] py-8 ${
                      isActive ? 'text-[#A68B77] font-semibold' : 'text-[#5D4B42]'
                    }`
                  }
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={10} className="ml-1 opacity-50" />}
                </NavLink>
                
                {link.subLinks && (
                  <div className={`absolute top-full left-0 w-40 bg-[#FDFBF7] border border-[#F5F1EA] shadow-xl rounded-b-xl overflow-hidden transition-all duration-300 ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                    {link.subLinks.map(sub => (
                      <NavLink 
                        key={sub.path} 
                        to={sub.path} 
                        className="block px-6 py-4 text-[10px] uppercase tracking-widest text-[#5D4B42] hover:bg-[#F5F1EA] hover:text-[#A68B77]"
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="p-2 text-[#2C2420] hover:text-[#A68B77] transition-colors relative ml-4">
              <ShoppingBag size={18} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-[#A68B77] rounded-full"></span>
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2C2420] hover:text-[#A68B77] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#F5F1EA] py-4 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <React.Fragment key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-3 py-4 text-xs uppercase tracking-widest text-[#5D4B42] hover:text-[#A68B77]"
                >
                  {link.name}
                </NavLink>
                {link.subLinks && link.subLinks.map(sub => (
                  <NavLink 
                    key={sub.path} 
                    to={sub.path} 
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-3 py-2 text-[10px] uppercase tracking-widest text-[#A68B77] opacity-80"
                  >
                    — {sub.name}
                  </NavLink>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
