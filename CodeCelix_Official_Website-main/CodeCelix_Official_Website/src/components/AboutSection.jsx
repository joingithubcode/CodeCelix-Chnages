import React from 'react';
import AboutMissionImg from '/About_Section/Our-mission.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges and drive digital transformation.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity',
      description: 'We build trust through transparent communication, ethical practices, and delivering on our promises every time.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Delivery',
      description: 'We ensure timely, high-quality project delivery that exceeds expectations and drives measurable business results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CODECELIX is a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions. We combine technical expertise with creative vision to deliver exceptional results that drive growth and success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors">
                <i className={`${value.icon} text-3xl text-[#922e2e] w-8 h-8 flex items-center justify-center`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-poppins">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and create lasting value in the digital age.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">Proven Track Record</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-500 text-xl mr-2 w-5 h-5 flex items-center justify-center"></i>
                  <span className="text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={AboutMissionImg}
                alt="CODECELIX Team Collaboration"
                className="w-full h-auto rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
