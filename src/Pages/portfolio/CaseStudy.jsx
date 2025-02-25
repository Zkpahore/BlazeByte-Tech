import React from 'react';
import { useParams } from 'react-router-dom';

const CaseStudy = () => {
  const { id } = useParams();

  // Here you would typically fetch the case study data based on the ID
  // For now, we'll use a static example
  const caseStudyData = {
    1: {
      title: "E-commerce Platform",
      description: "Details about the e-commerce platform project...",
      challenges: "Challenges faced during the project...",
      results: "Results achieved after project completion...",
      clientFeedback: "Client's feedback about the project...",
      image: "/Movies.png", // Root-relative path from the public folder
    },
    2: {
      title: "SEO Optimization for XYZ Corp",
      description: "Details about the SEO optimization project...",
      challenges: "Challenges faced during the project...",
      results: "Results achieved after project completion...",
      clientFeedback: "Client's feedback about the project...",
      image: "/Movies.png",
    },
    3: {
      title: "Marketing Campaign for ABC Ltd.",
      description: "Details about the marketing campaign...",
      challenges: "Challenges faced during the project...",
      results: "Results achieved after project completion...",
      clientFeedback: "Client's feedback about the project...",
      image: "/Movies.png",
    },
  };
  

  const caseStudy = caseStudyData[id] || {};

  return (
    <div className="container mx-auto py-28 px-4">
      <h2 className="text-3xl font-bold">{caseStudy.title}</h2>
      <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-64 object-cover mt-4" />

      <p className="mt-4">{caseStudy.description}</p>

      <h3 className="text-2xl font-semibold mt-6">Challenges:</h3>
      <p>{caseStudy.challenges}</p>

      <h3 className="text-2xl font-semibold mt-6">Results:</h3>
      <p>{caseStudy.results}</p>

      <h3 className="text-2xl font-semibold mt-6">Client Feedback:</h3>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic">
        {caseStudy.clientFeedback}
      </blockquote>
    </div>
  );
};

export default CaseStudy;
