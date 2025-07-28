const portfolioData = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description:
      'A comprehensive e-commerce solution with advanced analytics, inventory management, and seamless payment integration.',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20platform%20interface%20with%20product%20listings%2C%20shopping%20cart%2C%20and%20payment%20processing.%20Clean%20design%20with%20red%20and%20white%20color%20scheme%2C%20professional%20layout%20with%20product%20images%20and%20user-friendly%20navigation.%20Dashboard%20showing%20sales%20analytics%20and%20inventory%20management.&width=600&height=400&seq=portfolio-red-1&orientation=landscape',
  },
  {
    title: 'Healthcare Mobile App',
    category: 'Mobile Development',
    description:
      'A patient management system with appointment scheduling, medical records, and telemedicine capabilities.',
    image:
      'https://readdy.ai/api/search-image?query=Healthcare%20mobile%20application%20interface%20showing%20patient%20dashboard%2C%20appointment%20scheduling%2C%20and%20medical%20records.%20Clean%20medical%20app%20design%20with%20red%20and%20green%20accents%2C%20professional%20healthcare%20interface%20with%20charts%20and%20patient%20data%20visualization.&width=600&height=400&seq=portfolio-red-2&orientation=landscape',
  },
  {
    title: 'Financial Dashboard',
    category: 'Data Analytics',
    description:
      'Real-time financial analytics platform with advanced reporting, data visualization, and risk management tools.',
    image:
      'https://readdy.ai/api/search-image?query=Financial%20analytics%20dashboard%20with%20charts%2C%20graphs%2C%20and%20data%20visualization.%20Professional%20fintech%20interface%20with%20red%20and%20burgundy%20color%20scheme%2C%20showing%20stock%20market%20data%2C%20financial%20reports%2C%20and%20interactive%20charts.%20Clean%20and%20modern%20design%20with%20numerical%20data%20displays.&width=600&height=400&seq=portfolio-red-3&orientation=landscape',
  },
  {
    title: 'Cloud Infrastructure',
    category: 'Cloud Solutions',
    description:
      'Scalable cloud architecture implementation with automated deployment, monitoring, and disaster recovery.',
    image:
      'https://readdy.ai/api/search-image?query=Cloud%20infrastructure%20visualization%20with%20servers%2C%20network%20connections%2C%20and%20data%20flow%20diagrams.%20Modern%20tech%20illustration%20showing%20cloud%20computing%20architecture%2C%20server%20clusters%2C%20and%20network%20topology.%20Professional%20red%20and%20white%20color%20scheme%20with%20clean%20geometric%20design.&width=600&height=400&seq=portfolio-red-4&orientation=landscape',
  },
];

const PortfolioCard = ({ project }) => (
  <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col transition hover:shadow-xl cursor-pointer">
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute top-2 left-2 bg-[#922e2e] text-white px-4 py-1 text-xs rounded-full">
        {project.category}
      </div>
    </div>

    <div className="p-5 flex flex-col justify-between grow">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-sm text-[#922e2e] font-medium hover:underline transition">
          View Project →
        </a>
        <div className="flex gap-2">
          <button
            title="Open"
            className="w-10 h-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center justify-center">
            <i className="ri-external-link-line text-lg text-gray-600"></i>
          </button>
          <button
            title="Share"
            onClick={() => alert(`Share ${project.title}`)}
            className="w-10 h-10 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition flex items-center justify-center">
            <i className="ri-share-line text-lg text-gray-600"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Portfolio
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Explore our recent projects and discover how we've helped businesses
            transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.map((project, index) => (
            <PortfolioCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 border-2 border-[#922e2e] text-[#922e2e] rounded-full hover:bg-[#922e2e] hover:text-white transition">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
