import React from "react";
import {
  SiPython,
  SiMongodb,
  SiPostman,
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiBootstrap
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "Java", icon: <FaJava className="text-orange-600 text-4xl" /> },
  { name: "Python", icon: <SiPython className="text-blue-500 text-4xl" /> },
  
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  
 
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-4xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-4xl" /> },
  { name: "Git", icon: <SiGit className="text-red-500 text-4xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-black text-4xl" /> },
  { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500 text-4xl" /> },
];

const Skills = () => (
  <section
    id="skills"
    className="py-16 px-6 md:px-20 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
    data-aos="fade-up"
  >
    <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transform transition"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          {skill.icon}
          <span className="mt-4 text-sm font-medium text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
