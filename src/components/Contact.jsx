import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('your-email@example.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <section className="my-20 px-5" id="contact">
      <header className="text-3xl font-bold mb-8">Contact Me</header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="https://www.linkedin.com/in/%ED%98%84%ED%9D%A0-%EB%82%98-441a91262/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center bg-blue-600 text-white py-4 rounded-lg text-lg space-x-2"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/nakisara01"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center bg-gray-800 text-white py-4 rounded-lg text-lg space-x-2"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/n_joid/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center bg-pink-500 text-white py-4 rounded-lg text-lg space-x-2"
        >
          <FaInstagram size={24} />
          <span>Instagram</span>
        </a>
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center bg-green-600 text-white py-4 rounded-lg text-lg space-x-2"
        >
          <FaEnvelope size={24} />
          <span>nakisara01@ajou.ac.kr</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
