import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import RecentProjects from './components/RecentProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-accent-navy overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <WhyChooseUs />
      <RecentProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
