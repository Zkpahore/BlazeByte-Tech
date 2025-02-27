import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
    budgetRange: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-3xl -top-20 -left-20 animate-float" />
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl -bottom-20 -right-20 animate-float-delayed" />
      </div>

      <div className="relative z-10 container mx-auto py-28 px-4 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch to discuss your project and discover how we can help you achieve your digital goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2 font-medium">Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                    placeholder="John Doe"
                  />
                  <span className="absolute right-4 top-3 text-gray-400">👤</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                    placeholder="john@example.com"
                  />
                  <span className="absolute right-4 top-3 text-gray-400">📧</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Phone</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                    placeholder="+1 (234) 567-890"
                  />
                  <span className="absolute right-4 top-3 text-gray-400">📱</span>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Project Description</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all"
                  placeholder="Tell us about your project..."
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2 font-medium">Budget Range</label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg  focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 appearance-none"
                >
                  <option className='text-white' value="">Select Budget Range</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Send Message →'
                )}
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">123 Digital Lane</p>
                    <p className="text-gray-300">Tech City, TX 75001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300">+1 (234) 567-8901</p>
                    <p className="text-gray-300">Mon-Fri: 9AM - 5PM CST</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300">contact@blazebytech.com</p>
                    <p className="text-gray-300">support@blazebytech.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { platform: 'Twitter', handle: '@BlazeByteTech', icon: '🐦' },
                  { platform: 'LinkedIn', handle: 'BlazeByte Tech', icon: '💼' },
                  { platform: 'GitHub', handle: 'blazebyte-tech', icon: '👨💻' },
                  { platform: 'Instagram', handle: '@BlazeByteTech', icon: '📸' }
                ].map((social, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                    <span className="text-2xl">{social.icon}</span>
                    <div>
                      <p className="text-gray-300">{social.platform}</p>
                      <p className="text-sm text-gray-400">{social.handle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;