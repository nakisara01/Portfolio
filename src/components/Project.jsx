//TODO: XIVE, 동연 홈페이지, flutter 앱 추가하기
import React, { useState } from 'react';

// 프로젝트 모달 컴포넌트
const ProjectModal = ({ isOpen, project, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500 ease-in-out opacity-100"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md transform transition-transform duration-500 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
      </div>
    </div>
  );
};

// 프로젝트 아이템 컴포넌트 (반응형 적용)
const ProjectItem = ({ project, onOpenModal }) => (
  <div className="flex flex-col md:flex-row gap-4 my-10">
    {/* 대표 사진 */}
    <div className="md:w-1/3 w-full md:h-72 h-56 rounded-lg overflow-hidden bg-blue-700 flex items-center justify-center">
      <img 
        src={project.image} 
        alt="대표 사진"
        className="object-cover w-full h-full"
        onError={(e) => (e.target.style.display = 'none')}
      />
    </div>

    {/* 설명 박스 */}
    <div className="border-2 border-white p-6 rounded-lg shadow-md md:w-2/3 w-full md:h-72 h-auto flex flex-col justify-between bg-transparent text-white">
      {/* 제목 */}
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>

      {/* 기간 */}
      <div className="mb-2">
        <p className="text-lg font-semibold">📅 기간</p>
        <p className="text-sm">{project.duration}</p>
      </div>

      {/* 사용 기술 */}
      <div className="mb-2">
        <p className="text-lg font-semibold">🛠 사용 기술</p>
        <p className="text-sm">{project.technologies}</p>
      </div>

      {/* 설명 */}
      <div className="mb-2">
        <p className="text-lg font-semibold">📖 설명</p>
        <p className="text-sm">{project.shortDescription}</p>
      </div>

      {/* 버튼 (모바일에서는 중앙, 데스크톱에서는 오른쪽) */}
      <button
        className="bg-white text-black text-sm px-4 py-2 rounded mt-4 hover:bg-gray-200 transition text-center md:self-end"
        onClick={() => onOpenModal(project)}
      >
        see more
      </button>
    </div>
  </div>
);

// 메인 프로젝트 컴포넌트
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // 프로젝트 데이터 배열
  const projectsData = [
    {
      id: 1,
      title: "NFC 기반 티켓 플랫폼, XIVE",
      image: "/images/xive_image.png",
      duration: "2023.11 - 2024.11",
      technologies: "Swift, SwiftUI, Xcode Cloud",
      shortDescription: "XIVE는 NFC 기술을 활용한 티켓 플랫폼으로, 사용자가 손쉽게 티켓을 구매하고 사용할 수 있습니다.",
      description: "XIVE는 Swift 기반으로 개발되었으며, SwiftUI를 활용하여 직관적인 UI/UX를 제공합니다. Xcode Cloud를 사용하여 자동 배포 및 테스트를 수행하고 있습니다."
    },
    {
      id: 2,
      title: "아주대학교 동아리연합회 홈페이지",
      image: "/images/dongyeon_homepage.png",
      duration: "2024.07 - 2024.12",
      technologies: "React, JavaScript",
      shortDescription: "아주대학교 동아리연합회의 활동을 소개하고, 동아리 정보를 공유하는 웹사이트입니다.",
      description: "React 기반의 웹사이트로, Tailwind CSS를 활용하여 디자인되었으며, 동아리 등록 및 공지사항 관리를 위한 기능을 제공합니다."
    },
    {
      id: 3,
      title: "Flutter 기반 포트폴리오 앱",
      image: "/images/flutter_app.png",
      duration: "2024.01 - 2024.06",
      technologies: "Flutter, Dart, Firebase",
      shortDescription: "Flutter를 사용하여 포트폴리오를 관리하고 공유할 수 있는 앱을 개발하였습니다.",
      description: "Firebase를 백엔드로 활용하여 사용자 인증 및 데이터 관리를 수행하며, 애니메이션 및 UI/UX 최적화에 초점을 맞춘 프로젝트입니다."
    }
  ];

  return (
    <section className="my-20 px-5" id="projects">
      <header className="text-3xl font-bold mb-8">Projects</header>

      {/* 프로젝트 리스트 */}
      {projectsData.map((project) => (
        <ProjectItem key={project.id} project={project} onOpenModal={setSelectedProject} />
      ))}

      {/* 모달 */}
      <ProjectModal 
        isOpen={!!selectedProject} 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Project;
