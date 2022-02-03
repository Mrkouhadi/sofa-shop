import React, {useState, useEffect} from 'react';

const useFullSlider = (slides=[], autoplayDuration = 3000) => {
      const [activeSlide, setActiveSlide] = useState(1);
            const next =()=>{
                activeSlide === (slides.length - 1) ? setActiveSlide(0) : setActiveSlide(activeSlide + 1)
            }
            const prev =()=>{
                activeSlide === 0 ? setActiveSlide(slides.length - 1) : setActiveSlide(activeSlide - 1)
            }
            const jump=(slide)=>{
                setActiveSlide(slide)
            }
       useEffect(() => {
           let slider = setInterval(() => {
                next();
           }, autoplayDuration);
           return ()=>{
            clearInterval(slider);
           }
       }, [activeSlide]);
    return {next, prev, jump, activeSlide}
};

export default useFullSlider;

/***** how t use it ****/

// const {next, prev, jump, activeSlide} = useSlider(yourslidesArray, yourautoPlayDurationinMs);
// const renderSlides = ()=>{
//     return slides.map(slide=>{
//            return <div key={slide.id} className={`slide ${activeSlide < slide.id ? "nextSlide" : "lastSlide"} ${activeSlide === slide.id && "activeSlide"}`}>
//                         ........
//                 </div>
//     })
// }
// .slider{  /*the wrapper of the sliders*/
//     width: 100%; height: 70vh;
//     overflow: hidden;
//   }
//   .slide{ /*single slide*/
//     height: 100%; width: 100%; position: absolute; top: 0; right: 0;
//     transform: translateX(1000px);
//     transition: transform 1000ms ease, opacity 1300ms ease;
//     opacity: 0;
//   }
//   .nextSlide{
//     transform: translateX(1000px);
//     opacity: 0;
//   }
//   .lastSlide{
//     transform: translateX(-1000px);
//     opacity: 0;
//   }
//   .activeSlide{
//     opacity: 1;
//     transform: translateX(0);
//   }