import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Understanding the Basics of SEO",
      excerpt: "Learn about the fundamental concepts of SEO and how they can impact your website's visibility.",
      date: "October 25, 2024",
    },
    {
      id: 2,
      title: "Top Web Development Trends in 2024",
      excerpt: "Explore the latest trends in web development that can enhance user experience and engagement.",
      date: "October 20, 2024",
    },
    {
      id: 3,
      title: "Effective Digital Marketing Strategies",
      excerpt: "Discover digital marketing strategies that can help you grow your business online.",
      date: "October 15, 2024",
    },
  ];

  return (
    <div className="container mx-auto py-28 px-4">
      <h2 className="text-3xl font-bold">Blog</h2>
      <p className="mt-4">Insights and tips on web development, SEO, and digital marketing.</p>

      <div className="mt-6">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-300 py-4">
            <h3 className="text-xl font-semibold">
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-500">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
