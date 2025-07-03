import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="py-10 px-6 md:px-20 bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Yakanna Kadem</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          Full Stack Developer | Passionate about building modern web apps
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-xl">
          <a
            href="https://github.com/yakanna2000"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yakanna-kadem-87126b254/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto: yakannakadem@gmail.com"
            className="hover:text-blue-500"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/_k.yakanna__/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Yakanna Kadem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
