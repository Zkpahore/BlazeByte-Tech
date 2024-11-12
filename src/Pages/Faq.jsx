import React, { useState } from 'react';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a variety of services including web development, SEO optimization, digital marketing, e-commerce solutions, and more. Check out our portfolio for detailed case studies."
  },
  {
    question: "How much do your services cost?",
    answer: "The cost of our services depends on the complexity and scope of the project. We provide tailored solutions to meet your specific needs, and we offer free consultations to discuss your budget."
  },
  {
    question: "How long does it take to complete a project?",
    answer: "The timeline for a project depends on its complexity. Small projects can be completed in a few weeks, while larger ones may take a few months. We will give you a clear timeline during the consultation phase."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we provide ongoing maintenance and support for all our projects. Whether it's for updates, bug fixes, or new features, we're here to ensure your site or application runs smoothly."
  },
  {
    question: "Can you help with SEO for an existing website?",
    answer: "Absolutely! We specialize in SEO for both new and existing websites. We can audit your site, optimize your content, improve site speed, and implement strategies to boost organic traffic."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients from all over the world. Our services are designed to cater to a global audience, and we can work remotely or on-site, depending on your needs."
  },
  {
    question: "What is the difference between SEO and digital marketing?",
    answer: "SEO focuses on optimizing your website to rank higher in search engine results, while digital marketing encompasses a broader set of strategies, including SEO, social media marketing, paid advertising, content marketing, and more."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we offer website redesign services to make your site look modern, improve user experience, and ensure it works well across all devices."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use a variety of technologies including React.js, Node.js, Express.js, MongoDB, and Tailwind CSS for frontend and backend development."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes, all our websites are responsive, meaning they will automatically adjust to look great on mobile devices, tablets, and desktops."
  },
  {
    question: "Can you build custom e-commerce solutions?",
    answer: "Absolutely! We specialize in building custom e-commerce platforms tailored to your business needs, whether it's a small store or a large online marketplace."
  },
  {
    question: "What is your process for developing a website?",
    answer: "Our process includes discovery, design, development, testing, and deployment. We work closely with you during each phase to ensure the final product meets your expectations."
  },
  {
    question: "What makes your digital marketing strategies unique?",
    answer: "We take a data-driven approach to digital marketing, constantly analyzing and optimizing strategies to maximize ROI. We tailor each campaign to meet the specific needs of your business."
  },
  {
    question: "How do you handle website security?",
    answer: "We prioritize website security by implementing SSL certificates, regular security audits, and using best practices for coding and data protection to ensure your website is safe from attacks."
  },
  {
    question: "Do you offer website hosting services?",
    answer: "We can recommend reliable hosting providers and assist with website migration, or you can host with a provider of your choice. We focus on ensuring your website performs optimally."
  },
  {
    question: "Can you integrate third-party APIs into my website?",
    answer: "Yes, we can integrate various third-party APIs, including payment gateways, social media logins, mapping services, and more, to enhance the functionality of your website."
  },
  {
    question: "How do you ensure SEO success for my website?",
    answer: "We use proven SEO techniques including keyword research, on-page optimization, link building, and content creation to ensure your website ranks well in search engines and attracts organic traffic."
  },
  {
    question: "What is the cost of a custom WordPress theme?",
    answer: "The cost of a custom WordPress theme depends on the complexity of the design and features. We provide a quote based on your requirements after an initial consultation."
  },
  {
    question: "Do you offer branding and logo design services?",
    answer: "Yes, we offer full branding services, including logo design, color schemes, typography, and brand guidelines to ensure your business stands out in the market."
  },
  {
    question: "What is included in website maintenance?",
    answer: "Website maintenance includes regular updates, bug fixes, performance improvements, and adding new features or content to keep your website running smoothly."
  },
  {
    question: "Can you help with content creation for my website?",
    answer: "Yes, we offer content creation services including copywriting, blog posts, product descriptions, and more to ensure your website has engaging and SEO-optimized content."
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-24 px-4">
      <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-600">Frequently Asked Questions</h2>
      <p className="text-center text-lg mb-8 text-gray-700">Got a question? We have the answers! If you can't find what you're looking for, feel free to contact us.</p>

      <div className="space-y-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? 'bg-teal-100' : 'bg-blue-100'}`}
          >
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left p-6 font-semibold text-xl flex justify-between items-center hover:bg-teal-600 hover:text-white transition-all duration-200"
            >
              <span>{faq.question}</span>
              <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="p-6 text-gray-800 bg-gray-200">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;
