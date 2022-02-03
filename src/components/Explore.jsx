import React from 'react';
import { Link } from 'react-router-dom';

const Explore = () => {
  return    <div className='mt-8 px-4 min-h-screen w-full pb-2'>
                  <h1 className="text-gray-900 text-5xl font-extrabold text-center mb-8">SHOP BY ROOM</h1>
                  <div className="lg:px-24 grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-6">
                        <div className="relative card1 row-span-3 p-24">
                              <h1 className="absolute left-8 top-12  tracking-wide text-3xl font-extrabold text-center mb-8">LIVING ROOM</h1>
                              <Link to="/catalog" className="absolute left-4 top-18 hover:bg-red-50 underline hover:no-underline transition p-4">SHOP NOW</Link>
                        </div>
                        <div className="relative card2 row-span-2   p-12">
                              <h1 className="absolute left-8 top-8 tracking-wide text-3xl font-extrabold text-center mb-8">BATHROOM</h1>
                              <Link to="/catalog" className="absolute left-4 top-20 hover:bg-red-50 underline hover:no-underline transition p-4">SHOP NOW</Link>
                        </div>
                        <div className="relative card3 row-span-3   p-24">
                              <h1 className="absolute left-8 top-12 tracking-wide text-3xl font-extrabold text-center mb-8">BEDROOM</h1>
                              <Link to="/catalog" className="absolute left-4 top-24 hover:bg-red-50 underline hover:no-underline transition p-4">SHOP NOW</Link>
                        </div>
                        <div className="relative card4 row-span-2  p-12">
                              <h1 className="absolute left-8 top-8 tracking-wide text-3xl font-extrabold text-center mb-8">KITCHEN</h1>
                              <Link to="/catalog" className="absolute left-4 top-20 hover:bg-red-50 underline hover:no-underline transition p-4">SHOP NOW</Link>
                        </div>
                  </div>
            </div>
};
export default Explore;