import LeadDevImg from '/Team_Section/LeadDevImg.png';
import FounderImg from '/Team_Section/FounderImg.png';
import CoFouderImg from '/Team_Section/CoFounderImg.png';

export default function TeamSection() {
  const team = [
    {
      name: 'Usman Qureshi',
      role: 'CEO & Founder',
      image: FounderImg,
      linkedin: 'https://www.linkedin.com/in/usman-qureshi-24b2b2258/',
    },
    {
      name: 'Zainab Saeed',
      role: 'COO & Co-Founder',
      image: CoFouderImg,
      linkedin: 'https://www.linkedin.com/in/zainab-saeed-36aa2b34b/',
    },
    {
      name: 'Sameer Qureshi',
      role: 'Lead Developer',
      image: LeadDevImg,
      linkedin: 'https://www.linkedin.com/in/sameer-qureshi786/',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together years of experience in
            technology, design, and business to deliver exceptional results for
            our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-[#922e2e] font-medium mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-[#922e2e] rounded-full flex items-center justify-center hover:bg-[#7a2525] transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <i className="ri-github-fill text-white w-5 h-5 flex items-center justify-center"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals to join our growing
              team. Explore exciting career opportunities and be part of our
              innovative journey.
            </p>
            <button className="bg-[#922e2e] text-white px-8 py-4 rounded-full hover:bg-[#7a2525] transition-colors font-semibold text-lg whitespace-nowrap cursor-pointer">
              View Open Positions
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}
