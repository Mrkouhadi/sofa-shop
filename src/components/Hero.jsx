import React from 'react';
import { Link } from 'react-router-dom';
import useFullSlider from '../hooks/useFullSlider';
import slides from '../data/slides.js';

const Hero = () => {
    const {next, prev, jump, activeSlide} = useFullSlider(slides, 3500);

    const renderSlides = ()=>{
        return slides.map(slide=>{
               return <div key={slide.id} className={`slide ${activeSlide < slide.id ? "nextSlide" : "lastSlide"} ${activeSlide === slide.id && "activeSlide"} `}>
                            <div className="flex flex-col px-4 pt-2 max-w-lg ">
                                <h1 className="text-black text-5xl md:text-6xl font-extrabold mb-4">{slide.title}</h1>
                                <Link to="/catalog" className='w-48 py-4 text-center bg-gray-900 text-gray-200 '> SHOP NOW</Link>
                            </div>
                            <div className="md:max-w-xl max-h-sm m-1lg:m-4 lg:my-8">
                                <img className='w-full h-full' src={slide.image} alt={slide.title}/>
                            </div>
                    </div>
        })
    }
    const setDotWidth = (index)=>{
        if(activeSlide === index ) return "w-8";
        if(activeSlide !== index)  return "w-2"
    }
  return <section className='relative bg-stone-300 py-8 slider'>
            <div className='flex overflow-hidden w-screen min-h-full'>
                { renderSlides() }
            </div>
            <div className='absolute bottom-8 w-full flex items-center justify-center gap-4'>
                <button onClick={()=>jump(0)} className={`${setDotWidth(0) } h-2 rounded-full border border-gray-700 transition-all ease `}></button>
                <button onClick={()=>jump(1)} className={`${setDotWidth(1)} h-2 rounded-full border border-gray-700 transition-all ease`}></button>
                <button onClick={()=>jump(2)} className={`${setDotWidth(2)} h-2 rounded-full border border-gray-700 transition-all ease`}></button>
            </div>
         </section>;
};

export default Hero;