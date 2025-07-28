import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendContactEmail } from '../services/emailService.js';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus('all-fields-required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email.trim())) {
      setSubmitStatus('invalid-email');
      return;
    }

    setIsSubmitting(true);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
      console.error(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-red-50 to-red-100 relative overflow-hidden font-inter">
      <div className="absolute inset-0 bg-gradient-to-r from-[#922e2e]/10 to-red-600/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology
            solutions? Get in touch with us today and let's discuss how we can
            help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-[#922e2e] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-poppins">
                      Email
                    </h4>
                    <p className="text-gray-600">Infocodecelix@gmail.com</p>
                    <p className="text-gray-600">foundercodecelix@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-[#922e2e] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-poppins">
                      Phone
                    </h4>
                    <p className="text-gray-600">+39 (350) 854-0334 </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-[#922e2e] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 font-poppins">
                      Office
                    </h4>
                    <p className="text-gray-600">
                      {' '}
                      Centro Direzionale, is. A2, <br /> scala B, 80143 Napoli
                      NA, Italy{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 font-poppins">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/codecelix/"
                  className="w-12 h-12 bg-[#922e2e] rounded-lg flex items-center justify-center hover:bg-[#7a2525] transition-colors">
                  <i className="ri-linkedin-fill text-white"></i>
                </a>
                <a
                  href="https://www.instagram.com/codecelix?igsh=MTVlNjdveWphbjFxYQ=="
                  className="w-12 h-12 bg-[#922e2e] rounded-lg flex items-center justify-center hover:bg-[#7a2525] transition-colors">
                  <i className="ri-instagram-fill text-white"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/14FPASnYKkj/?mibextid=wwXIfr"
                  className="w-12 h-12 bg-[#922e2e] rounded-lg flex items-center justify-center hover:bg-[#7a2525] transition-colors">
                  <i className="ri-facebook-fill text-white"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Section: Contact Form */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#922e2e] focus:border-transparent text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#922e2e] focus:border-transparent text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  maxLength={500}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#922e2e] focus:border-transparent text-sm resize-none"
                  placeholder="Tell us about your project..."
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {formData.message.length}/500
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-dmSans bg-[#922e2e] text-white py-3 px-6 rounded-lg hover:bg-[#7a2525] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              {submitStatus === 'all-fields-required' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  Required fields must not be empty.
                </div>
              )}

              {submitStatus === 'invalid-email' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                  Please enter a valid email address.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
