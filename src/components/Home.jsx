import React from 'react';
import { Bestsellers, Explore, Hero, Newsletter, Reviews, ScrollUp } from '.';

const Home = () => {
  return <div className='relative min-h-screen'>
      <Hero/>
      <Explore/>
      <Bestsellers/>
      <Reviews/>
      <Newsletter/>
      <ScrollUp/>
  </div>;
};

export default Home;
