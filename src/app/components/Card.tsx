import React from 'react';

const BlogCards = () => {
  const blogs = [
    { title: 'React.Js Tutorial', price: '$10', description: 'This is a premium blog post.' },
    { title: 'JAVA Tutorial', price: '$15', description: 'This is a premium blog post.' },
    { title: 'C++ Tutorial', price: '$20', description: 'This is a premium blog post.' },
    { title: 'Python Tutorial', price: '$13.99', description: 'This is a premium blog post.' },
    { title: 'Typescript Tutorial', price: '$24.99', description: 'This is a premium blog post.' },
    { title: 'Tailwind CSS Tutorial', price: '$4.99', description: 'This is a premium blog post.' },
  ];

  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)] sm:pb-44 pb-20 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-500">Upcoming Blogs</h1>
      <div className="flex flex-col sm:flex-wrap sm:flex-row justify-center items-center gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-1/3 transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">{blog.description}</p>
            <div className="text-lg font-semibold text-blue-700">{blog.price}</div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default BlogCards;
