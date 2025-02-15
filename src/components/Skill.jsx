import React from 'react';

//TODO: Skill, CollaborationTools 구체화하고 이미지 적용하기

const Skill = () => (
  <section className="my-20 px-5" id="skills">
    <header className="text-3xl font-bold mb-8">Skills</header>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

      <div className="flex flex-col items-center">
        <img src="./images/icons/Swift-original.svg" alt="Swift" className="w-16 mb-2" />
        <p>Swift</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/SwiftUI-original.png" alt="SwiftUI" className="w-16 mb-2" />
        <p>SwiftUI</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Dart-original.svg" alt="Dart" className="w-16 mb-2" />
        <p>Dart</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Flutter-original.svg" alt="Flutter" className="w-16 mb-2" />
        <p>Flutter</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/React-original.svg" alt="React" className="w-16 mb-2" />
        <p>React</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/HTML5-original.png" alt="HTML5" className="w-16 mb-2" />
        <p>HTML5</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/CSS3-original.svg" alt="CSS3" className="w-16 mb-2" />
        <p>CSS3</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/JavaScript-original.svg" alt="JavaScript" className="w-16 mb-2" />
        <p>JavaScript</p>
      </div>

    </div>
  </section>
);

const CICD = () => (

  <section className="my-20 px-5">
      <header className="text-3xl font-bold mb-8">CI/CD</header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
  
        <div className="flex flex-col items-center">
          <img src="./images/icons/GitHub_Actions.svg" alt="GitHub" className="w-16 mb-2" />
          <p>GitHub Actions</p>
        </div>
  
        <div className="flex flex-col items-center">
          <img src="./images/icons/Xcode_Cloud.png" alt="Slack" className="w-16 mb-2" />
          <p>Xcode Cloud</p>
        </div>
  
      </div>
    </section>
  );

const CollaborationTools = () => (
  <section className="my-20 px-5">
    <header className="text-3xl font-bold mb-8">Collaboration Tools</header>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

      <div className="flex flex-col items-center">
        <img src="./images/icons/GitHub.png" alt="GitHub" className="w-16 mb-2" />
        <p>GitHub</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Slack.svg" alt="Slack" className="w-16 mb-2" />
        <p>Slack</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Notion.png" alt="Notion" className="w-16 mb-2" />
        <p>Notion</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Figma.svg" alt="Figma" className="w-16 mb-2" />
        <p>Figma</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Jira.svg" alt="Jira" className="w-16 mb-2" />
        <p>JIRA</p>
      </div>

      <div className="flex flex-col items-center">
        <img src="./images/icons/Confluence.svg" alt="Confluence" className="w-16 mb-2" />
        <p>Confluence</p>
      </div>

    </div>
  </section>
);

export { Skill, CICD, CollaborationTools };

