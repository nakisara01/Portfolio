import React from "react";

// 재사용 가능한 키워드 카드 컴포넌트
const KeywordCard = ({ title, description, id, icon }) => {
  return (
    <div className="flex flex-col bg-gray-800 text-white p-6 rounded-lg shadow-lg border border-gray-700 hover:bg-gray-700 hover:scale-105 transition transform duration-300 w-full">
      <h3 className="text-lg font-bold text-blue-400 flex items-center">
        {icon} <span className="ml-2">{title}</span>
      </h3>
      <p className="text-sm text-gray-400 mt-2">{description}</p>
      <button
        onClick={() => document.getElementById(id).scrollIntoView({ behavior: "smooth" })}
        className="mt-3 text-sm text-blue-400 hover:underline bg-white text-blue-500 px-4 py-2 rounded-lg w-full text-center"
      >
        → 자세히 보기
      </button>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center relative px-6">
      <div className="flex justify-center items-center w-full max-w-6xl relative lg:flex-row flex-col">
        {/* 좌측 키워드 카드 (데스크톱) */}
        <div className="hidden lg:flex flex-col space-y-6 mr-6">
          <KeywordCard title="Projects" description="완료한 프로젝트 확인" id="projects" icon="📂" />
          <KeywordCard title="Skills" description="사용하는 기술 스택" id="skills" icon="🛠" />
        </div>

        {/* 중앙 맥북 */}
        <div className="relative w-[800px] h-auto">
          <img 
            // src="/images/macbook-mockup.png" 
            alt="MacBook Mockup" 
            className="w-[800px] h-auto"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-white">
              iOS Developer
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-80 text-gray-300">
              I build user-friendly, responsive applications.
            </p>
          </div>
        </div>

        {/* 우측 키워드 카드 (데스크톱) */}
        <div className="hidden lg:flex flex-col space-y-6 ml-6">
          <KeywordCard title="Activities" description="참여한 행사 및 활동" id="activities" icon="📅" />
          <KeywordCard title="Contact" description="연락하는 방법" id="contact" icon="📬" />
        </div>
      </div>

      {/* 모바일 키워드 카드 (1050px 이하 적용) */}
      <div className="lg:hidden flex flex-col gap-4 mt-6 w-full max-w-5xl">
        <KeywordCard title="Projects" description="완료한 프로젝트 확인" id="projects" icon="📂" />
        <KeywordCard title="Skills" description="사용하는 기술 스택" id="skills" icon="🛠" />
        <KeywordCard title="Activities" description="참여한 행사 및 활동" id="activities" icon="📅" />
        <KeywordCard title="Contact" description="연락하는 방법" id="contact" icon="📬" />
      </div>
    </section>
  );
};

export default Hero;

