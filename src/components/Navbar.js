import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ toggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const handleScroll = () => {
    const sections = ["about", "skills", "projects", "resume", "contact"];
    const scrollY = window.scrollY + 100;
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY && el.offsetTop + el.offsetHeight > scrollY) {
        setActive(id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["about", "skills", "projects", "resume", "contact"];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Yakanna Kadem</h1>
        <div className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-white font-medium">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`hover:text-blue-500 ${active === link ? "text-blue-600 dark:text-blue-400" : ""}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleDarkMode} className="ml-4 text-xl">
              <FiSun className="hidden dark:inline" />
              <FiMoon className="dark:hidden" />
            </button>
          </li>
        </ul>
      </div>
      {menuOpen && (
        <ul className="md:hidden px-6 py-4 space-y-4 text-gray-800 dark:text-white">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => setMenuOpen(false)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <button onClick={toggleDarkMode} className="text-xl">
              <FiSun className="hidden dark:inline" />
              <FiMoon className="dark:hidden" />
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
