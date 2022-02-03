import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
            <div className="h-64 md:mt-10 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img src="/assets/images/about.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="w-full h-full object-cover object-center" />
            </div>
            </div>
    
            <div className="md:pt-8">
            <p className="text-indigo-500 font-bold text-center md:text-left">Who we are</p>
    
            <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">Our competitive advantage</h1>
    
            <p className="text-gray-500 sm:text-lg mb-4 md:mb-6">
                This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />
            </p>
    
            <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">About us</h2>
    
            <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
            </div>
        </div>
        </div>
  </div>
  );
};
export default About;