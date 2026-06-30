import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full bg-transparent py-16 md:py-24 px-6 md:px-[8%]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between gap-16 md:gap-24">
        
        {/* LEFT SIDE: Services Timeline */}
        <div className="hidden lg:block w-full lg:w-[35%] relative mt-6">
          {/* Vertical Line */}
          <div className="absolute left-[5px] top-[20px] bottom-[20px] w-[1px] bg-[#FF7A59]/40"></div>
          
          <div className="flex flex-col space-y-12">
            
            {/* Item 1 */}
            <div className="relative flex items-center group cursor-default">
              <div className="w-[11px] h-[11px] rounded-full bg-[#FF7A59] absolute left-0 z-10 shadow-[0_0_8px_rgba(255,122,89,0.8)] border-[2px] border-white dark:border-[#141a22]"></div>
              
              <div className="ml-10 flex items-center space-x-6">
                <svg className="w-10 h-10 text-gray-400 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <rect x="2" y="4" width="20" height="14" rx="1" />
                  <path d="M8 22h8M12 18v4" />
                  <path d="M9 11l-2 2 2 2M15 11l2 2-2 2M12 9l-1 6" />
                </svg>
                <h3 className="text-[1.15rem] font-medium text-gray-900 dark:text-white tracking-wide group-hover:text-[#FF7A59] dark:group-hover:text-[#FF7A59] transition-colors duration-300">Website Development</h3>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative flex items-center group cursor-default">
              <div className="w-[11px] h-[11px] rounded-full bg-[#FF7A59] absolute left-0 z-10 shadow-[0_0_8px_rgba(255,122,89,0.8)] border-[2px] border-white dark:border-[#141a22]"></div>
              
              <div className="ml-10 flex items-center space-x-6">
                <svg className="w-10 h-10 text-gray-400 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
                <h3 className="text-[1.15rem] font-medium text-gray-900 dark:text-white tracking-wide group-hover:text-[#FF7A59] dark:group-hover:text-[#FF7A59] transition-colors duration-300">MERN Developer</h3>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative flex items-center group cursor-default">
              <div className="w-[11px] h-[11px] rounded-full bg-[#FF7A59] absolute left-0 z-10 shadow-[0_0_8px_rgba(255,122,89,0.8)] border-[2px] border-white dark:border-[#141a22]"></div>
              
              <div className="ml-10 flex items-center space-x-6">
                <svg className="w-10 h-10 text-gray-400 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1">
                  <path d="M6 14c-2.2 0-4-1.8-4-4s1.8-4 4-4c.5-2.8 3-5 6-5s5.5 2.2 6 5c2.2 0 4 1.8 4 4s-1.8 4-4 4" />
                  <rect x="5" y="14" width="14" height="8" rx="1" />
                  <path d="M5 18h14" />
                  <path d="M8 16h.01M8 20h.01" />
                </svg>
                <h3 className="text-[1.15rem] font-medium text-gray-900 dark:text-white tracking-wide group-hover:text-[#FF7A59] dark:group-hover:text-[#FF7A59] transition-colors duration-300">Website Hosting</h3>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE: Text Content & Education */}
        <div className="w-full lg:w-[65%] text-gray-600 dark:text-gray-300">
          <h2 className="text-4xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white mb-10 tracking-tight">About me</h2>
          
          <div className="space-y-6 text-[1.05rem] leading-relaxed font-light text-gray-600 dark:text-gray-400 mb-16">
            <p>
              I’m a <strong className="text-gray-900 dark:text-white font-medium">Full-Stack Developer</strong> passionate about building modern, scalable, and user-centric web applications. With experience in <span className="text-[#FF7A59] font-medium">React, Node.js, Express, MongoDB</span>, and <strong className="text-gray-900 dark:text-white font-medium">cloud technologies</strong>, I enjoy transforming ideas into seamless digital experiences that are both functional and visually engaging.
            </p>
            <p>
              My journey in software development is driven by curiosity, continuous learning, and <strong className="text-gray-900 dark:text-white font-medium">problem-solving</strong>. Through personal projects, internships, and hands-on development, I’ve gained practical experience in building <span className="text-[#FF7A59] font-medium">end-to-end applications</span>. I thrive in collaborative environments where I can contribute, learn new technologies, and create products that deliver real value to users.
            </p>
          </div>

          {/* Education Block */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-200 dark:border-[#2a3441]/50">
            <h3 className="text-[1.1rem] font-medium text-[#FF7A59] tracking-widest uppercase mb-8">Education</h3>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">Bachelor's Of Computer Application(Hons)</h4>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Gujarat University</p>
              </div>
              
              <div className="flex flex-col items-start md:items-end">
                <span className="text-[#FF7A59] font-medium mb-1 tracking-wide uppercase">July 2023 - PRESENT</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
