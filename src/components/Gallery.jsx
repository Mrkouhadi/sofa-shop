import React, { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const Gallery = ({imgs}) => {
    const isPhone = useMediaQuery("(max-width:768px)");
    
    const [mainImg, setMainImg] = useState(imgs[0]);

  return (
    <div className="flex flex-col-reverse h-4xl md:flex-row gap-1 md:gap-4 col-span-2 lg:col-span-1 px-2 md:px-4 lg:mt-8">
            <div className="flex md:flex-col justify-between items-center gap-1 md:gap-4">
                {imgs.map((image,i) => <img key={i} onClick={()=> setMainImg(imgs[i])} className="hover:shadow-xl transition"  src={image} alt="images  of products" height={`${isPhone ? "70px ":" 100px" }`} width={`${isPhone ? "70px ":" 100px" }`}/> )}
            </div>
            <div className="flex-1 mt-12 md:mt-0 mb-2 md:mb-0 lg:ml-4">
                <img className="w-full h-full" height="300px" src={mainImg} alt="images of products"/>
            </div>
    </div>
  );
};
export default Gallery;