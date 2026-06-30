import React from 'react';

const Experience = () => {
  const skills = [
    { category: "Frontend", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, items: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "Media Query", icon: null },
      { name: "JavaScript(ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" }
    ]},
    { category: "Backend", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>, items: [
      { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
    ]},
    { category: "Database", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>, items: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" }
    ]},
    { category: "Libraries", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>, items: [
      { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" },
      { name: "ReactJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "Redux & RTK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" }
    ]},
    { category: "Frameworks", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>, items: [
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
      { name: "ExpressJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" }
    ]},
    { category: "Tools", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.996-4.996m5.653 5.653l-1.51 1.51m0 0l-4.996-4.996M16.42 10.17l-1.51 1.51m0 0l-4.996-4.996M7.92 7.17l3.03-2.496a2.652 2.652 0 00-3.75-3.75L4.704 3.924a2.65 2.65 0 00-3.75 3.75l2.496 3.03z" /></svg>, items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" }
    ]},
    { category: "Others", icon: <svg className="w-5 h-5 mr-3 text-[#FF7A59]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>, items: [
      { name: "REST API", icon: null },
      { name: "Responsive Web Design", icon: null }
    ]}
  ];

  return (
    <section id="experience" className="w-full bg-transparent py-16 md:py-24 px-6 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between gap-20">
        
        {/* LEFT SIDE: Experience Timeline */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-4xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white mb-16 tracking-tight">
            Experience
          </h2>
          
          <div className="relative ml-2">
            {/* Vertical Line */}
            <div className="absolute left-[5px] top-[10px] bottom-[10px] w-[1px] bg-[#FF7A59]/40"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start">
              {/* Glowing Dot */}
              <div className="w-[11px] h-[11px] rounded-full bg-[#FF7A59] absolute left-0 top-[6px] z-10 shadow-[0_0_8px_rgba(255,122,89,0.8)] border-[2px] border-white dark:border-[#141a22]"></div>
              
              <div className="ml-8">
                <p className="text-[#FF7A59] font-bold text-[0.85rem] tracking-widest uppercase mb-2">
                  MARCH 2026 - PRESENT
                </p>
                
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-wide mb-3">
                  Full Stack Developer (MERN)
                </h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400 font-light text-[1.05rem] leading-relaxed">
                  <p>
                    <strong className="text-gray-800 dark:text-gray-200 font-medium">AlgoVista Analytics</strong> — Designed, developed, and deployed <span className="text-[#FF7A59] font-medium">end-to-end</span> <strong className="text-gray-900 dark:text-white font-medium">MERN stack</strong> web applications, ensuring responsive design, scalable architecture, optimized performance, and seamless user experience across all devices.
                  </p>
                  <p>
                    Integrated <strong className="text-gray-900 dark:text-white font-medium">AI-driven capabilities</strong>, including intelligent insight panels, enabling users to gain actionable insights and streamline business workflows.
                  </p>
                  <p>
                    Built interactive business dashboards and <strong className="text-gray-900 dark:text-white font-medium">ERP solutions</strong> with <span className="text-[#FF7A59] font-medium">real-time analytics</span>, data visualization, role-based access, and dynamic reporting to support data-driven decision-making.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* RIGHT SIDE: Skills Grid */}
        <div className="w-full md:w-[50%]">
          <h2 className="text-4xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white mb-16 tracking-tight">
            Skills
          </h2>
          
          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:gap-6">
                
                {/* Category Label */}
                <div className="w-full sm:w-[35%] flex items-center pt-2 mb-4 sm:mb-0">
                  {skillGroup.icon}
                  <h4 className="text-[1.05rem] font-bold text-gray-900 dark:text-white tracking-wide">{skillGroup.category}</h4>
                </div>
                
                {/* Skill Badges */}
                <div className="w-full sm:w-[65%] flex flex-wrap gap-3">
                  {skillGroup.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-1.5 bg-white dark:bg-[#141a22] text-gray-700 dark:text-gray-300 rounded-[4px] text-[0.85rem] font-medium border border-gray-200 dark:border-[#2a3441] hover:border-[#FF7A59]/40 dark:hover:border-[#FF7A59]/40 shadow-sm dark:shadow-none transition-colors cursor-default flex items-center gap-2"
                    >
                      {item.icon && <img src={item.icon} alt={item.name} className="w-4 h-4" />}
                      {item.name}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
