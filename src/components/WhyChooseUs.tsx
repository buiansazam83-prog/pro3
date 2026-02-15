import { Users, Award, HeadphonesIcon } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: 'Experienced Technicians',
      description: 'Our certified professionals have over 15 years of industry experience.',
    },
    {
      icon: Award,
      title: 'High-Quality Equipment',
      description: 'We use only premium, industry-leading security camera systems.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Reliable Support',
      description: 'Round-the-clock customer support and maintenance services.',
    },
  ];

  return (
    <section
      id="about-us"
      className="relative py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-navy">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-teal to-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-accent-teal transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center hover:bg-gradient-to-br hover:from-white hover:to-blue-50"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-teal/20 flex items-center justify-center border-2 border-accent-teal/30 group-hover:scale-110 group-hover:border-accent-teal group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-10 h-10 text-accent-teal" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-accent-navy group-hover:text-accent-teal transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
