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
      className="relative py-24 bg-gray-50"
    >
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center border-2 border-green-200 group-hover:scale-110 group-hover:border-green-400 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-green-600" strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
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
