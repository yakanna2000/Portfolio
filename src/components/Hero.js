import React from "react";

const Hero = () => (
  <section
    id="hero"
    className="relative py-32 px-6 md:px-20 bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-800 text-white"
    data-aos="fade-up"
  >
    <div className="max-w-6xl mx-auto text-center">
      {/* Greeting */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
        Hi, I'm <span className="text-yellow-300">Yakanna Kadem</span>
      </h1>

      {/* Title */}
      <p className="text-xl md:text-2xl mb-6 font-medium">
        🚀 Full Stack Developer | 🧠 AI Enthusiast | 🌐 Web Innovator
      </p>

      {/* Short Intro */}
      <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        I design and build fast, modern full-stack web applications using the MERN stack and deploy them using modern DevOps pipelines.
      </p>

      {/* Call to Action */}
      <div className="mt-10">
        <a
          href="#projects"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
        >
          View My Work
        </a>
      </div>
    </div>

    {/* Optional Background Animation */}
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <img
        src="/bg-animation.gif" // Add bg-animation.gif inside public folder
        alt="animated background"
        className="object-cover w-full h-full"
      />
    </div>
  </section>
);

export default Hero;
