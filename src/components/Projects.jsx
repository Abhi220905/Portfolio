import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const Projects = ({ onSelectProject }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="w-full bg-gray-50 dark:bg-[#141a22] py-16 md:py-32 px-6 md:px-[8%] transition-colors">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Title Area */}
        <div className="flex flex-col items-center mb-16 md:mb-32">
          <h2 className="text-4xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white tracking-tight">Projects</h2>
          <div className="w-[2px] h-10 bg-[#FF7A59] mt-8"></div>
        </div>
        
        {/* Projects List */}
        <div className="flex flex-col space-y-16 md:space-y-40">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 1; // 0-indexed: 0 is Left Text (Even layout), 1 is Right Text
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 lg:gap-20`}>
                
                {/* Text Content */}
                <div className="w-full md:w-[55%] flex flex-col items-start">
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-wide">{project.title}</h3>
                    {project.badge && (
                      <span className="px-4 py-1 border border-[#254A85] text-[#4F8AFF] rounded-full text-[0.7rem] uppercase tracking-widest font-bold bg-transparent">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {Object.values(project.techStack || {}).flat().slice(0, 5).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-1.5 bg-white dark:bg-[#1b222b] text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-[#2a3441] shadow-sm dark:shadow-none"
                      >
                        {tech}
                      </span>
                    ))}
                    {Object.values(project.techStack || {}).flat().length > 5 && (
                      <span className="px-3 py-1.5 bg-transparent text-gray-500 dark:text-gray-400 text-xs font-medium self-center">
                        +{Object.values(project.techStack || {}).flat().length - 5} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-[#FF7A59] font-medium text-sm mb-3 tracking-wide">{project.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-8 text-[1.05rem]">
                    {project.shortDescription}
                  </p>
                  
                  {/* View Project Button */}
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center text-gray-900 dark:text-white font-semibold tracking-wide hover:text-[#FF7A59] dark:hover:text-[#FF7A59] transition-colors border-b border-[#FF7A59] pb-1 group mt-2"
                  >
                    View project 
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </button>
                </div>

                {/* Image Area */}
                <div className="w-full md:w-[45%] relative group mt-8 md:mt-0">
                  {/* Decorative Offset Border */}
                  <div className={`absolute top-0 bottom-0 left-0 right-0 border border-gray-300 dark:border-[#2a3441] z-0 hidden md:block transition-transform duration-500 ${isEven ? '-translate-x-6 -translate-y-6 group-hover:-translate-x-3 group-hover:-translate-y-3' : 'translate-x-6 -translate-y-6 group-hover:translate-x-3 group-hover:-translate-y-3'}`}></div>
                  
                  {/* Main Image */}
                  <div className="relative z-10 w-full aspect-video overflow-hidden shadow-2xl bg-gray-200 dark:bg-[#1b222b] rounded-sm">
                    <img 
                      src={project.images?.[0] || project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                    />
                  </div>
                </div>

              </div>
            );
          })}
        </div>
        
        {/* See More Button */}
        {projectsData.length > 3 && (
          <div className="flex justify-center mt-32">
            <button 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="inline-flex items-center justify-center border border-[#FF7A59] hover:bg-[#FF7A59]/10 text-[#FF7A59] px-10 py-3 rounded-sm font-medium transition-all duration-300"
            >
              {showAllProjects ? 'See Less' : 'See More'}
              <svg className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default Projects;
