import React, { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

const ProjectDetails = ({ project, onBack, onSelectProject }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  // Find previous and next projects
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  const techIcons = {
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    "JWT Authentication": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
  };

  // Flatten the tech stack object for the top pills
  const flattenedTechStack = Object.values(project.techStack || {}).flat();

  // Helper to render **text** as highlighted strong tags
  const renderTextWithHighlights = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={idx} className="text-gray-900 dark:text-white font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#11161d] text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Navbar Overlay */}
      <nav className="w-full py-6 px-8 md:px-[8%] flex justify-between items-center bg-white/90 dark:bg-[#11161d]/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="font-bold text-gray-900 dark:text-white text-xl tracking-tight">
          Abhishek<span className="text-[#FF7A59]">/</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600 dark:text-gray-400">
          <button onClick={onBack} className="hover:text-gray-900 dark:hover:text-white transition-colors">About</button>
          <button onClick={onBack} className="text-[#FF7A59] border-b-2 border-[#FF7A59] pb-1">Projects</button>
          <button onClick={onBack} className="hover:text-gray-900 dark:hover:text-white transition-colors">Skills</button>
          <button onClick={onBack} className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact</button>
        </div>
      </nav>

      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 pb-32">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16 mb-20">
          
          {/* Left Text */}
          <div className="w-full lg:w-[45%] flex flex-col items-start">
            <h1 className="text-5xl lg:text-[4.5rem] font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-none">
              {project.title}
            </h1>
            <h2 className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 font-semibold mb-6 leading-snug">
              {project.subtitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 text-[1.05rem]">
              {project.shortDescription}
            </p>

            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-max items-center text-gray-900 dark:text-white font-semibold tracking-wide hover:text-[#FF7A59] dark:hover:text-[#FF7A59] transition-colors border-b border-[#FF7A59] pb-1 group mb-10">
                Live Demo
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            )}

            {/* Flattened Badges */}
            <div className="flex flex-wrap gap-2">
              {flattenedTechStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-white dark:bg-[#1b222b] text-gray-700 dark:text-gray-300 rounded-full text-xs font-semibold border border-gray-200 dark:border-[#2a3441] flex items-center shadow-sm">
                  {techIcons[tech] ? (
                    <img src={techIcons[tech]} alt={tech} className="w-3.5 h-3.5 mr-2" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mr-2"></span>
                  )}
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[55%]">
            <div className="rounded-xl overflow-hidden shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-[#2a3441] bg-white dark:bg-[#1b222b]">
              <img src={project.images?.[0] || project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="w-full border-y border-gray-200 dark:border-[#2a3441] py-8 mb-20 flex flex-wrap justify-between items-center text-center gap-y-8">
          <div className="w-1/2 md:w-1/4 flex flex-col items-center border-r-0 md:border-r border-gray-200 dark:border-[#2a3441]">
            <svg className="w-6 h-6 text-[#FF7A59] dark:text-[#FF7A59] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">ROLE</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.role || "Developer"}</span>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-center border-r-0 md:border-r border-gray-200 dark:border-[#2a3441]">
            <svg className="w-6 h-6 text-[#FF7A59] dark:text-[#FF7A59] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">DURATION</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.duration || "N/A"}</span>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-center border-r-0 md:border-r border-gray-200 dark:border-[#2a3441]">
            <svg className="w-6 h-6 text-[#FF7A59] dark:text-[#FF7A59] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">STATUS</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.status || "Completed"}</span>
          </div>
          <div className="w-1/2 md:w-1/4 flex flex-col items-center">
            <svg className="w-6 h-6 text-[#FF7A59] dark:text-[#FF7A59] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">PLATFORM</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{project.platform || "Web Application"}</span>
          </div>
        </div>

        {/* 3 Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {project.images.slice(0, 3).map((img, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden shadow-md dark:shadow-none border border-gray-100 dark:border-[#2a3441] bg-white dark:bg-[#1b222b]">
                <img src={img} alt={`${project.title} detail ${idx + 1}`} className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        )}

        {/* Content Section (About & Features) */}
        <div className="flex flex-col lg:flex-row items-start gap-16 mb-24">
          
          {/* About */}
          <div className="w-full lg:w-[55%]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Project</h2>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed text-[1.05rem] space-y-6">
              {project.overview.split('\n\n').map((paragraph, index) => (
                <p key={index}>{renderTextWithHighlights(paragraph)}</p>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="w-full lg:w-[45%]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
            <ul className="space-y-4">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-600 dark:text-gray-400">
                  <div className="mt-1.5 mr-3 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full bg-[#FF7A59]/10 dark:bg-[#FF7A59]/20">
                    <div className="w-2 h-2 rounded-full bg-[#FF7A59] dark:bg-[#FF7A59]"></div>
                  </div>
                  <span className="text-[1.05rem]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Categorized Tech Stack */}
        <div className="mb-32">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">Tech Stack</h2>
          <div className="w-full border-y border-gray-200 dark:border-[#2a3441] py-8 flex flex-wrap justify-between items-start text-center gap-y-8">
            {project.techStack && Object.entries(project.techStack).map(([category, techs], idx, arr) => {
              if (!techs || techs.length === 0) return null;
              
              // Count how many valid categories we have to determine borders properly
              const validCategories = arr.filter(([_, t]) => t && t.length > 0);
              const isLast = idx === validCategories.length - 1;

              return (
                <div key={idx} className={`w-1/2 md:flex-1 flex flex-col items-center ${!isLast ? 'border-r-0 md:border-r border-gray-200 dark:border-[#2a3441]' : ''}`}>
                  <span className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">{category}</span>
                  <ul className="space-y-3 flex flex-col items-start w-max mx-auto">
                    {techs.map((tech, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                        {techIcons[tech] && (
                          <img src={techIcons[tech]} alt={tech} className="w-4 h-4 mr-2" />
                        )}
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="w-full border-t border-gray-200 dark:border-[#2a3441] pt-12 flex justify-between items-center relative">
          
          <div className="text-sm text-gray-500 font-medium">
            © 2026 Abhishek Khatri. All rights reserved.
          </div>

          {/* Grid Icon Center */}
          <button 
            onClick={onBack}
            className="absolute left-1/2 transform -translate-x-1/2 text-[#FF7A59] dark:text-[#FF7A59] hover:opacity-70 transition-opacity"
            aria-label="Back to projects"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </button>

          {/* Next Project */}
          {nextProject && (
            <button className="flex flex-col items-end group text-right" onClick={() => onSelectProject(nextProject)}>
              <span className="text-gray-500 text-xs tracking-widest font-bold uppercase mb-1 flex items-center group-hover:text-[#FF7A59] dark:group-hover:text-[#FF7A59] transition-colors">
                NEXT PROJECT
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
              <span className="text-lg font-bold text-gray-900 dark:text-white">{nextProject.title}</span>
            </button>
          )}

        </div>

      </div>
      
      {/* Floating Back Button */}
      <button 
        onClick={onBack}
        className="fixed bottom-8 right-8 bg-white dark:bg-[#1b222b] border border-gray-200 dark:border-[#2a3441] shadow-xl rounded-full px-6 py-3 text-sm font-bold text-[#FF7A59] dark:text-[#FF7A59] hover:scale-105 transition-transform z-50 flex items-center"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Projects
      </button>

    </div>
  );
};

export default ProjectDetails;
