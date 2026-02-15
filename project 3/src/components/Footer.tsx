import { Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="relative bg-white border-t-2 border-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10 text-green-600" strokeWidth={2} />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  EXA WICOM
                </span>
                <span className="text-xs font-semibold text-green-600 tracking-wider">LTD</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Professional security camera installation services for homes and
              businesses. Your safety is our priority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'About Us', 'Gallery', 'Contact'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center hover:bg-green-600 hover:border-green-600 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Exa Wicom LTD. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-green-600 transition-colors duration-300 text-sm"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
