import React from 'react';

const ScrollUp = () => {

    const scrollupHandle = () => {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      };
  return <div onClick={scrollupHandle} className="animate-pulse cursor-pointer p-2 bg-gray-900 grid items-center absolute right-2 md:right-8 bottom-4">
                <i className='text-gray-300 fas fa-arrow-up'></i>
        </div>;
};

export default ScrollUp;