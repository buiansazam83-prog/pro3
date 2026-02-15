import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+44 20 1234 5678',
      link: 'tel:+442012345678',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@exawicom.com',
      link: 'mailto:info@exawicom.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'London, United Kingdom',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-gray-50"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-400"
                  placeholder="+44 20 1234 5678"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-600 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                  placeholder="Tell us about your security needs..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" strokeWidth={2} />
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-2 border-green-200 group-hover:border-green-400 group-hover:scale-110 transition-all duration-300">
                      <info.icon className="w-6 h-6 text-green-600" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 group-hover:text-green-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Business Hours
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-green-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold text-green-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
