import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Project from './components/Project';
import './index.css';
import { Skill, CICD, CollaborationTools } from './components/Skill';
import Contact from './components/Contact';

function App() {
  return (
  <div className="bg-gray-900 text-white min-h-screen flex flex-col">
  <main className="flex-grow w-full px-4">
  <Hero />
  <Project />
  <section id="skills" className="my-16">
    <Skill />
    <CICD />
    <CollaborationTools />
  </section>
  <Contact />
</main>

      <footer className="bg-gray-800 text-center py-4">
        <p className="text-sm">© 2025 Hyunheum Na. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

