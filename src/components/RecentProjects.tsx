import { ArrowRight } from 'lucide-react';

export default function RecentProjects() {
  const projects = [
    {
      title: 'Office Surveillance',
      image:
        'https://images.pexels.com/photos/6003574/pexels-photo-6003574.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete security system for corporate office',
    },
    {
      title: 'Residential Setup',
      image:
        'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Smart home security with 24/7 monitoring',
    },
    {
      title: 'Store Security',
      image:
        'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Retail surveillance and loss prevention',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-accent-navy">
            Recent Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-teal to-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer border-2 border-gray-100 hover:border-accent-teal transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-accent-teal/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="group px-8 py-4 border-2 border-accent-teal text-accent-teal font-semibold rounded-full hover:bg-accent-teal hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent-teal/30 inline-flex items-center gap-2">
            View Gallery
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
