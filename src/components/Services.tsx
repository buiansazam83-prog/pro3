import { Camera, Home, Building2, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Expert setup of CCTV cameras for home and business security.',
      delay: 0,
    },
    {
      icon: Home,
      title: 'Home Security',
      description: 'Complete alarm and surveillance systems to protect your home.',
      delay: 0.1,
    },
    {
      icon: Building2,
      title: 'Business Surveillance',
      description: 'Advanced surveillance solutions tailored for businesses of all sizes.',
      delay: 0.2,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-navy">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-teal to-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={isVisible ? service.delay : 0}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-accent-teal hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
            >
              <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-teal/20 flex items-center justify-center border-2 border-accent-teal/30 group-hover:scale-110 group-hover:border-accent-teal group-hover:shadow-lg transition-all duration-300">
                <service.icon className="w-10 h-10 text-accent-teal" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-accent-navy group-hover:text-accent-teal transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <button className="inline-flex items-center gap-2 text-accent-teal font-semibold group-hover:gap-3 transition-all duration-300">
                Learn More
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
