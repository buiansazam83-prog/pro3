import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900"
          variants={itemVariants}
        >
          Secure{' '}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Your Home
          </span>
          <br />& Business with{' '}
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Expert
          </span>
          <br />
          Camera Solutions
        </motion.h1>

        <motion.p
          className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Professional security camera installation for advanced surveillance. Protect what
          matters most with our trusted expertise.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          variants={itemVariants}
        >
          <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
            Get a Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
          fill="url(#waveGradient)"
          className="animate-wave"
        />
      </svg>
    </section>
  );
}
