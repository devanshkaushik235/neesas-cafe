
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import CoffeeSpecials from './pages/CoffeeSpecials';
import Snacks from './pages/Snacks';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Order from './pages/Order';
import Events from './pages/Events';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const { pathname } = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-[#A68B77]/20 selection:text-[#2C2420]">
      <Navbar />
      <main className="flex-grow overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/specials" element={<CoffeeSpecials />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/order" element={<Order />} />
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
