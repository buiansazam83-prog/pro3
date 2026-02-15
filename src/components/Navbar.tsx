import { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-gradient-to-r from-accent-navy to-blue-950 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Shield className={`w-8 h-8 ${scrolled ? 'text-accent-teal' : 'text-accent-cyan'}`} strokeWidth={2} />
            <div>
              <div className={`text-lg font-bold ${scrolled ? 'text-accent-navy' : 'text-white'}`}>EXA WICOM</div>
              <div className={`text-xs font-semibold ${scrolled ? 'text-accent-teal' : 'text-accent-cyan'} tracking-wider`}>
                LTD
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-accent-navy hover:text-accent-teal'
                    : 'text-white hover:text-accent-cyan'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <button className={`px-6 py-2.5 font-semibold rounded-full transition-all duration-300 hover:shadow-lg ${
              scrolled
                ? 'bg-accent-teal text-white hover:bg-accent-cyan'
                : 'bg-accent-cyan text-white hover:bg-accent-teal'
            }`}>
              Get a Free Quote
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-accent-navy' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-accent-navy' : 'text-white'}`} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden pb-4 space-y-2 border-t ${
            scrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-gradient-to-b from-accent-navy to-blue-950'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-accent-navy hover:bg-blue-50'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2.5 bg-accent-teal text-white font-semibold rounded-full hover:bg-accent-cyan transition-all duration-300">
              Get a Free Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
