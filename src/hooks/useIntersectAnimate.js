import { useEffect, useMemo, useState } from 'react'

export default function useIntersectAnimate(options, targetRef) {
        const [isVisible, setIsVisible] = useState(false);

        const callbackFunction = entries =>{
            const [entry ]= entries; // const entry = entries[0] .. animating only one element div in home
            setIsVisible(entry.isIntersecting) // every element has this property
        }

        const optionsMemo = useMemo(()=>{
            return options;
        }, [options]) 

        useEffect(()=>{
            const observer = new IntersectionObserver(callbackFunction, optionsMemo);
            const currentTraget = targetRef.current;
            if(currentTraget) observer.observe(currentTraget);
        
            return ()=>{
                if(currentTraget) observer.unobserve(currentTraget);
            }
        }, [targetRef, optionsMemo])
  
        return isVisible;
}


// import React, { useRef } from 'react'
// import useHomeAnimate from '../hooks/useIntersectAnimate';
// export default function Home() {
//   const homeRef = useRef(null);
//   const HomeIsVisible = useHomeAnimate({
//      root:null,
//      rootMargin:'0px',
//      threshold:0.3,
//   }, homeRef);
// return  <div ref={homeRef} className={`home ${HomeIsVisible  && 'home-animate'}`}>
//             <h2>Home PAGE</h2>
//         </div>