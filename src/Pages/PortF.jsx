// src/pages/PortfolioPage.js
import React from 'react';

const projects = [
  { title: 'Project A', description: 'A successful SEO and web dev project.' },
  { title: 'Project B', description: 'Increased traffic by 50% through optimized SEO strategies.' }
];

const PortfolioPage = () => (
  <section className="py-16">
    <h2 className="text-3xl font-semibold text-center mb-8">Our Portfolio</h2>
    <div className="container mx-auto grid md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="p-6 bg-gray-100 shadow-lg rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioPage;
