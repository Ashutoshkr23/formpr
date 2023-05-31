import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialComp from './TestimonialComp'

function Swiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numDivs = 3;
  const [numStep, setNumStep] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumStep(numDivs - 0);
      } else if (window.innerWidth < 1024) {
        setNumStep(numDivs - 1);
      } else {
        setNumStep(numDivs - 2);
      }
    };

    console.log(numStep)

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numStep);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numStep) % numStep);
  };

  return (
    <div className='mt-20'>
      <div className='w-80 mobile:w-full max-w-[380px] md:max-w-[740px] lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] justify-between mx-auto flex items-center'>
        <Image src={'assets/images/landing/Left-Arrow.svg'} height={20} width={20} onClick={handlePrev} />
        <div className='w-[280px] mobile:w-80 md:w-[700px] lg:min-w-full lg:max-w-[1020] xl:max-w-[1230px] xl:w-full h-60 overflow-hidden '>
          <div
            className='w-[840px] mobile:w-[960px] md:w-[1050px]  lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] xl:w-full h-full flex'
            style={{
              transform: `translateX(${-currentIndex * (100 / numDivs)}%)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            <div className='w-[100%] h-full bg-slate-300 flex justify-center'>

            </div>
            <div className='w-[100%] h-full bg-slate-500 flex justify-center'>
              
            </div>
            <div className='w-[100%] h-full bg-slate-700 flex justify-center'>

            </div>
          </div>
        </div>
        <Image src={'assets/images/landing/Right-Arrow.svg'} height={20} width={20} onClick={handleNext} />
      </div>
    </div>
  );
}

export default Swiper;
