const Footer = ({ logo }) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <img src={logo} alt="CODECELIX Logo" className="h-14 w-auto mb-5" />
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions.
              We combine expertise with creativity to deliver exceptional
              digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/codecelix/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#922e2e] transition-colors cursor-pointer">
                <i className="ri-linkedin-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.instagram.com/codecelix?igsh=MTVlNjdveWphbjFxYQ=="
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#922e2e] transition-colors cursor-pointer">
                <i className="ri-instagram-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
              <a
                href="https://www.facebook.com/share/14FPASnYKkj/?mibextid=wwXIfr"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#922e2e] transition-colors cursor-pointer">
                <i className="ri-facebook-fill w-5 h-5 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors">
                  IT Consulting
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Codecelix. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
