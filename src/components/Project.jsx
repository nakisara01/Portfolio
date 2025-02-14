import React from 'react';

const Project = () => (
  <section className="my-20 px-5" id="projects">
    <header className="text-3xl font-bold mb-8">Projects</header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Project Title</h2>
        <p className="text-sm text-gray-400">Project description goes here.</p>
      </div>
    </div>
  </section>
);

export default Project;
