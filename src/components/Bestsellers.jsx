import { DATA } from '../data/data';
import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const Bestsellers = () => {

  const bestSels = DATA.slice(2, 10)

  return <div className='min-h-screen w-full flex flex-col items-center '>
            <h1 className="text-gray-900 text-5xl font-extrabold  my-8 md:mt-0">BESTSELLERS</h1>
            <div className='flex flex-wrap items-center justify-center md:justify-around gap-4 lg:px-24'>
              {bestSels.map(prod => <Card key={prod.id} id={prod.id} title={prod.title} price={prod.price} image={prod.thumbnail} /> )}
            </div>
  </div>;
};
export default Bestsellers;