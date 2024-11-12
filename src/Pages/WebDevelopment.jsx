import React from 'react';

const WebDevelopment = () => {
  const webDevelopmentDetails = [
    {
      title: "Benefits",
      description: "Why choose BlazeByte Tech for your web development needs?",
      points: [
        "Custom solutions tailored to your business goals.",
        "Scalable applications that grow with your business.",
        "Responsive designs optimized for all devices."
      ],
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
      shadowColor: "shadow-blue-600/50",
    },
    {
      title: "Our Process",
      description: "A structured approach to building impactful digital solutions:",
      points: [
        "Initial Consultation: Understand your goals and requirements.",
        "Design Phase: Create user-friendly wireframes and prototypes.",
        "Development Phase: Build robust solutions using modern technologies.",
        "Testing: Ensure seamless functionality and quality assurance.",
        "Ongoing Support: Provide continuous updates and maintenance."
      ],
      gradient: "bg-gradient-to-br from-green-400 to-green-600",
      shadowColor: "shadow-green-600/50",
    },
    {
      title: "How It Helps You Succeed",
      description: "Empower your business with a strong online presence:",
      points: [
        "Increased visibility in a competitive digital space.",
        "Enhanced customer engagement with intuitive design.",
        "Future-proof solutions that adapt as your business grows."
      ],
      gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
      shadowColor: "shadow-purple-700/50",
    }
  ];

  return (
    <section className="py-20 px-6 md:py-24 lg:py-24 bg-gray-50">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 py-6">
          Web Development Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          BlazeByte Tech offers end-to-end web development solutions tailored to your business needs.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {webDevelopmentDetails.map((detail, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 transition-transform transform hover:-translate-y-3 hover:scale-105 shadow-lg ${detail.gradient} ${detail.shadowColor} hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-bold text-white mb-4">{detail.title}</h2>
            <p className="text-gray-100 mb-6">{detail.description}</p>
            <ul className="list-disc list-inside space-y-2 text-white">
              {detail.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center bg-blue-800 text-white p-12 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold mb-4">Let’s Build Your Digital Success Story</h3>
        <p className="text-lg mb-6">
          Partner with BlazeByte Tech for cutting-edge web development that aligns with your business goals. Contact us today!
        </p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg transform hover:scale-105 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default WebDevelopment;
