import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div className="bg-white h-4/5 pt-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center pt-10">
        
            <p className="text-indigo-500 text-3xl font-semibold uppercase mb-4">That’s a 404</p>
            <h1 className="text-gray-800 text-xl font-bold text-center mb-2">Page not found</h1>
    
            <p className="max-w-screen-md text-gray-500 text-lg text-center mb-12">The page you’re looking for doesn’t exist.</p>
    
            <Link to="/" className="inline-block bg-gray-900 hover:bg-gray-100 text-gray-100 hover:text-gray-900  text-lg font-semibold text-center outline-none transition duration-100 px-8 py-3">Go home</Link>
        </div>
        </div>
  </div>
  )
};

export default Notfound;
