import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // NOTE: Replace this URL with your actual Google Apps Script Web App URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyZPG_yQe-6Q_ap1MPeZwIAQBfQs7JDbtpzIhOsSJ7O3Vh7-hG58aYy5ni_eWUabeSuOA/exec';
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset(); // Clear the form
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Optional: Hide success message after a few seconds
      if (submitStatus !== 'error') {
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    }
  };

  return (
    <section id="contact" className="w-full bg-transparent py-16 md:py-24 px-6 md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
          
          {/* Left Side: Text and Button */}
          <div className="w-full md:w-[45%] flex flex-col items-start pt-4">
            
            {/* Subtitle with Line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-[#FF7A59]"></div>
              <span className="text-gray-600 dark:text-gray-300 font-medium text-2xl tracking-wide">Contacts</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
              Have a project?
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-12 tracking-tight">
              Let's talk!
            </h2>
            
            {/* Submit Button (Connected to form via form attribute) */}
            <button 
              type="submit"
              form="contactForm"
              disabled={isSubmitting}
              className={`bg-[#FF7A59] hover:bg-[#e0694b] text-white px-12 py-3.5 rounded-sm font-medium transition-all duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 font-medium">Thank you! Your message has been sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 font-medium">Oops! Something went wrong. Please try again later.</p>
            )}
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-[45%] mt-12 md:mt-0 pt-4 md:pt-[72px]">
            <form id="contactForm" className="flex flex-col space-y-12" onSubmit={handleSubmit}>
              
              <div className="relative">
                <input 
                  type="text" 
                  name="Name"
                  required
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 pb-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF7A59] transition-colors text-lg" 
                />
              </div>
              
              <div className="relative">
                <input 
                  type="email" 
                  name="Email"
                  required
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 pb-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF7A59] transition-colors text-lg" 
                />
              </div>
              
              <div className="relative">
                <textarea 
                  name="Message"
                  required
                  placeholder="Message" 
                  rows="3"
                  className="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 pb-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-[#FF7A59] transition-colors text-lg resize-none" 
                ></textarea>
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
