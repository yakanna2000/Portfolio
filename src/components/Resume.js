import React from "react";

const Resume = () => (
  <section id="resume" className="py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-6">Resume</h2>

    <p className="mb-6 text-lg">
      Here's a quick overview of my education, experience, and certifications. You can also download my complete resume below.
    </p>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-semibold mb-4">👨‍💻 Experience</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Full Stack Developer Intern</strong> – CodeAlpha (2025)</li>
        <li><strong>Machine Learning Projects</strong> – Built ML classification and regression models using Python, Pandas, and Scikit-learn</li>
      </ul>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-semibold mb-4">🎓 Education</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>B.Tech in Computer Science Engineering</strong> – RGUKT Basar</li>
        <li><strong>Courses:</strong> Full Stack Development, Data Structures, Machine Learning, IoT, Soft Skills</li>
      </ul>
    </div>

    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
      <h3 className="text-2xl font-semibold mb-4">🏆 Certifications</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Full Stack Web Development – CodeAlpha Internship</li>
        <li>hackerrank certification of java and dbms</li>
      </ul>
    </div>




    {/* Resume Download Button */}
    <div className="text-center mt-8">
      <a
        href="/public\Yakanna_kadem_Resume.pdf" // Make sure to place your resume in public/ folder
        download
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition duration-300"
      >
        📄 Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
