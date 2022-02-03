import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return <footer className='bg-red-50 pt-4 pb-24 md:py-12 px-4 md:gap-4 lg:gap-20 lg:px-12 flex justify-around items-center flex-wrap'>
    <div className=' flex flex-col justify-center  items-center md:mr-8 mb-8'>
        {/* <Link to="/" className='text-5xl select-none text-gray-900 font-bold tracking-widest'>Sofa.</Link> */}
        <img src="assets/android-chrome-512x512.png" height="80px" width="80px" alt="sofa logo"/>
        <p className="text-gray-900 mb-2 mt-8 text-lg"><i className="mr-4 fas fa-map-marker"></i>wanming street, Saihan, Hohhot, China </p>
        <p className="text-gray-900 mb-2 text-lg"><i className="mr-4 fas fa-at"></i> contact@sofa.com</p>
        <p className="text-gray-900 text-lg"><i className="mr-4 fas fa-phone"></i> +15592810818</p>
    </div>
    <div className=' flex gap-4 lg:px-12 ml-2 flex-1 justify-evenly lg:justify-between items-center'>
            <ul className=' text-gray-900 lg:ml-20 xl:ml-48 flex flex-col items-center justify-between gap-8'>
                <li className='link'>
                    <Link to="/catalog">Catalog            </Link>
                </li>
                <li className='link'>
                    <Link to="/about">About us             </Link>
                </li>
                <li className='link'>
                    <Link to="contact">Contacts            </Link>
                </li>
            </ul>
            <ul className=' text-gray-900 flex flex-col items-center justify-between gap-8'>
                <li className='link'>
                    <Link to="/home">Home            </Link>
                </li>
                <li className='link'>
                    <Link to="/policy">Policy           </Link>
                </li>
                <li className='link'>
                    <Link to="/shipping">shipping  </Link>
                </li>
            </ul>
    </div>

  </footer>;
};

export default Footer;
