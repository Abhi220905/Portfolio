import React from 'react';

const skillsList = [
  "HTML5", "CSS", "Media Query", "JavaScript(ES6+)", "Responsive Web Design",
  "Node.js", "MongoDB", "Bootstrap", "ExpressJS", "jQuery", "ReactJS",
  "Git", "GitHub", "REST API Integration", "UI/UX Understanding"
];

const Hero = () => {
  const renderSkillItems = () => (
    <div className="flex items-center">
      {skillsList.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="text-gray-500 dark:text-gray-400 font-medium text-[1.3rem] lg:text-[1.5rem] tracking-wide hover:text-gray-900 dark:hover:text-white transition-colors cursor-default whitespace-nowrap">
            {item}
          </span>
          <span className="text-gray-300 dark:text-[#3b4754] font-light mx-10 lg:mx-12 text-[1.3rem] lg:text-[1.5rem]">|</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col pt-36 md:pt-40 lg:pt-36 relative" style={{ clipPath: 'inset(-500px 0 0 0)' }}>
      <section className="relative flex flex-col md:flex-row items-stretch justify-between px-6 md:px-[8%] max-w-[1600px] mx-auto w-full min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
        
        {/* LEFT SIDE TEXT */}
        <div className="w-full lg:w-[45%] z-20 flex flex-col justify-center pb-12 md:pb-20">
          <h2 className="text-[2.5rem] lg:text-[3rem] font-bold text-gray-900 dark:text-white tracking-wide mb-2">
            Hello <span className="text-[#FF7A59] inline-block animate-pulse">.</span>
          </h2>
          
          <div className="mb-6 flex items-center">
            <div className="w-10 md:w-16 h-[3px] bg-gradient-to-r from-[#FF7A59] to-transparent mr-4 md:mr-6 rounded-full"></div>
            <h3 className="text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] font-normal text-gray-700 dark:text-gray-200 tracking-wide">
              I'm Abhishek Khatri
            </h3>
          </div>
          
          <h1 className="text-[2.4rem] md:text-[3rem] lg:text-[3.5rem] font-extrabold text-gray-900 dark:text-white mb-8 md:mb-10 tracking-tight drop-shadow-sm leading-tight">
            Full Stack Developer
          </h1>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
            <a href="#contact" className="inline-block text-center bg-[#FF7A59] text-white px-8 py-3 text-base font-medium transition-all duration-300 cursor-pointer">
              Got a project?
            </a>
            <a href="/CV-Abhi.pdf" target="_blank" rel="noopener noreferrer" className="inline-block text-center border border-[#FF7A59] text-[#FF7A59] dark:text-white px-8 py-3 text-base font-medium transition-all duration-300 hover:bg-[#FF7A59]/10 cursor-pointer">
              My resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE / PORTRAIT AREA */}
        <div className="hidden lg:flex w-full lg:w-[55%] relative justify-center items-end mt-16 lg:mt-0">
          
          {/* Ambient glowing effect behind the ring */}
          {/* Ambient glowing effect behind the ring */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] bg-[#FF7A59] opacity-30 blur-[100px] rounded-full z-0 pointer-events-none mix-blend-screen"></div>

          {/* Crisp orange ring with refined thickness */}
          <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[460px] lg:h-[460px] rounded-full border-[4px] lg:border-[6px] border-[#FF7A59] opacity-100 shadow-[0_0_40px_rgba(255,122,89,0.4),inset_0_0_30px_rgba(255,122,89,0.3)] z-0 pointer-events-none"></div>
          
          {/* Large decorative angle brackets */}
          <div className="absolute left-[0%] lg:left-[5%] top-[25%] opacity-70 z-20 hidden md:block animate-pulse">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#FF7A59" strokeWidth="1">
              <path d="M16 3 L5 12 L16 21 L18 19 L9 12 L18 5 Z" fill="rgba(255,122,89,0.08)" />
            </svg>
          </div>
          <div className="absolute right-[5%] lg:right-[8%] top-[65%] opacity-70 z-20 hidden md:block animate-pulse">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#FF7A59" strokeWidth="1">
              <path d="M8 3 L19 12 L8 21 L6 19 L15 12 L6 5 Z" fill="rgba(255,122,89,0.08)" />
            </svg>
          </div>

          {/* Portrait Image anchored exactly to the bottom, fully opaque */}
          <img 
            src="/heroprofile.png" 
            alt="Abhishek" 
            className="absolute bottom-0 z-10 max-h-[105%] max-w-[280px] sm:max-w-none w-auto object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)] pointer-events-none"
          />
        </div>
        
      </section>

      {/* SKILLS BANNER - Auto Scrolling Marquee */}
      <div className="w-full bg-gray-50 dark:bg-[#141a22] py-8 lg:py-10 border-y border-gray-200 dark:border-[#2a3441] mt-auto flex relative z-30 justify-center transition-colors">
        <div 
          className="w-full overflow-hidden flex group" 
          style={{ 
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }}
        >
          <div className="animate-marquee w-max flex whitespace-nowrap group-hover:[animation-play-state:paused]">
            {renderSkillItems()}
            {renderSkillItems()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
