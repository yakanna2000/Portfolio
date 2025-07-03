import React from "react";

const Projects = () => (
  <section id="projects" className="py-20 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-6">Projects</h2>
    <p className="mb-8 text-lg">
      Here are some of my favorite projects I've worked on recently.
    </p>

    {/* Sample project cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
        <h3 className="text-xl font-semibold mb-2">🛍️ E-commerce Store</h3>
        <p className="text-sm">Built with React, Node.js, MongoDB</p>
        <a href="https://github.com/yakanna2000/CodeAlpha_ecommerce-project" className="text-blue-500 mt-3 inline-block">View Code</a>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
        <h3 className="text-xl font-semibold mb-2">🖥 Social_Media_platform</h3>
        <p className="text-sm">Built with React, Node.js, MongoDB</p>
        <a href="https://github.com/yakanna2000/CodeAlpha_Social_media_platform" className="text-blue-500 mt-3 inline-block">View Code</a>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:scale-105 transform transition">
        <h3 className="text-xl font-semibold mb-2">📜 Portfolio Website</h3>
        <p className="text-sm">React + Tailwind with animations and dark mode</p>
        <a href="https://github.com/yakanna2000/Portfolio" className="text-blue-500 mt-3 inline-block">View Code</a>
      </div>
    </div>
  </section>
);

export default Projects;
