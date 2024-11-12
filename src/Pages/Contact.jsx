import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDescription: '',
    budgetRange: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., send data to an API or email service.
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto py-28 px-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      {/* Contact Section Title */}
      <h2 className="text-4xl font-extrabold text-center mb-6">Get a Free Quote</h2>
      <p className="text-center text-lg mb-8">Fill out the form below to request a quote or consultation. We're excited to work with you!</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-white text-gray-900 rounded-lg shadow-lg p-8 mx-auto max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold" htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Project Description */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold" htmlFor="projectDescription">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Budget Range */}
          <div>
            <label className="block mb-2 font-semibold" htmlFor="budgetRange">Budget Range</label>
            <input
              type="text"
              id="budgetRange"
              name="budgetRange"
              value={formData.budgetRange}
              onChange={handleChange}
              required
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-teal-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-500 transition-all duration-200"
        >
          Submit
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p>If you have any questions, feel free to reach out via:</p>
        <ul className="mt-4 text-lg">
          <li>📞 Phone: +1 (234) 567-8901</li>
          <li>📧 Email: contact@blazebytech.com</li>
          <li>💬 Live Chat: Click the chat icon at the bottom right</li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
