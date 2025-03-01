import React from 'react';

const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="relative top-0 left-0 w-full bg-gray-800 py-4 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-xl font-bold"></h1>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-indigo-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-indigo-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-indigo-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

