import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  // Static data for example purposes
  const blogPosts = {
    1: {
      title: "Understanding the Basics of SEO",
      content: `
        <h3>What is SEO?</h3>
        <p>SEO stands for Search Engine Optimization, a crucial part of online marketing...</p>
        <h3>Key SEO Techniques</h3>
        <ul>
          <li>Keyword Research</li>
          <li>On-page Optimization</li>
          <li>Link Building</li>
        </ul>
        <p>Implementing these techniques can significantly enhance your website's visibility.</p>
      `,
      date: "October 25, 2024",
    },
    2: {
      title: "Top Web Development Trends in 2024",
      content: `
        <h3>Responsive Design</h3>
        <p>In 2024, responsive design remains essential for engaging users...</p>
        <h3>Progressive Web Apps (PWAs)</h3>
        <p>PWAs provide a native app-like experience on the web...</p>
      `,
      date: "October 20, 2024",
    },
    3: {
      title: "Effective Digital Marketing Strategies",
      content: `
        <h3>Understanding Your Audience</h3>
        <p>Effective marketing starts with knowing your audience...</p>
        <h3>Utilizing Social Media</h3>
        <p>Social media platforms can amplify your marketing efforts...</p>
      `,
      date: "October 15, 2024",
    },
  };

  const post = blogPosts[id] || {};

  return (
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold">{post.title}</h2>
      <p className="text-gray-500">{post.date}</p>
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
