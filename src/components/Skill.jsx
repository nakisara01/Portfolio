import React from 'react';

const Skill = () => (
  <section className="my-20 px-5" id="skills">
    <header className="text-3xl font-bold mb-8">Skills</header>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div className="flex flex-col items-center">
        <img src="./images/icons/javascript-original.svg" alt="JavaScript" className="w-16 mb-2" />
        <p>JavaScript</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./images/icons/react-original.svg" alt="React" className="w-16 mb-2" />
        <p>React</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./images/icons/nodejs-original.svg" alt="Node.js" className="w-16 mb-2" />
        <p>Node.js</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./images/icons/html5-original.svg" alt="HTML5" className="w-16 mb-2" />
        <p>HTML5</p>
      </div>
    </div>
  </section>
);

const CollaborationTools = () => (
  <section className="my-20 px-5">
    <header className="text-3xl font-bold mb-8">Collaboration Tools</header>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      <div className="flex flex-col items-center">
        <img src="./images/icons/github-original.svg" alt="GitHub" className="w-16 mb-2" />
        <p>GitHub</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./images/icons/slack-original.svg" alt="Slack" className="w-16 mb-2" />
        <p>Slack</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./images/icons/figma-original.svg" alt="Figma" className="w-16 mb-2" />
        <p>Figma</p>
      </div>
      <div className="flex flex-col items-center">
        <img src="./images/icons/trello-original.svg" alt="Trello" className="w-16 mb-2" />
        <p>Trello</p>
      </div>
    </div>
  </section>
);

export { Skill, CollaborationTools };

