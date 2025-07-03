import React from "react";

const About = () => (
  <section id="about" className="py-20 px-6 md:px-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white" data-aos="fade-up">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Left: Profile Image */}
      <div className="flex justify-center">
        <img
          src="profile.jpeg" // Make sure to add profile.jpg inside public folder
          alt="Yakanna Kadem"
          className="w-64 h-64 rounded-full shadow-lg object-cover border-4 border-blue-500"
        />
      </div>

      {/* Right: Content */}
      <div>
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Yakanna Kadem</h2>
        <p className="text-lg leading-relaxed mb-4">
          I’m a passionate Full Stack Developer and i completed internship at <strong>CodeAlpha</strong>. I specialize in building full-stack MERN applications, responsive UIs with Tailwind CSS, and deploying secure, scalable apps with Docker and GitHub Actions.
        </p>
        <p className="text-md leading-relaxed mb-4">
          I love solving real-world problems with code, contributing to open-source, and continuously improving my skills in DevOps, cloud deployments,DSA.
        </p>

        {/* Tech Stack Icons */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Tech Stack:</h3>
          <div className="flex flex-wrap gap-4">
            <img src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,express,mongodb,docker,git" alt="Tech stack" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
