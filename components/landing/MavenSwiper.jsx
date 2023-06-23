import React, { useState, useEffect } from 'react';
import Image from 'next/image';

function MavenSwiper() {
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
        <div className='mt-20 md:hidden'>
            <div className='w-80 mobile:w-full  max-w-[360px] md:max-w-[740px] lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] justify-between mx-auto flex items-center'>
                <Image src={'/assets/images/landing/Left-Arrow.svg'} height={12} width={12} onClick={handlePrev} className='lg:hidden' />
                <div className='w-[280px] mobile:w-80 md:w-[700px] lg:min-w-full lg:max-w-[1020] xl:max-w-[1230px] xl:w-full h-60 overflow-hidden '>
                    <div
                        className='w-[840px] mobile:w-[960px] md:w-[1050px]  lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] xl:w-full h-full flex'
                        style={{
                            transform: `translateX(${-currentIndex * (100 / numDivs)}%)`,
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        <div className='w-[100%] h-full bg-white text-black flex justify-center'>
                            <div className='text-1 text-xs lg:text-base font-medium lg:font-bold p-4  flex items-center'>
                                With a simple tap, Loop Maven asks and records the names of your contacts in your profile on the Loop website, eliminating the risk of forgetting important connections.
                            </div>
                        </div>
                        <div className='w-[100%] h-full bg-white text-black flex justify-center'>
                            <div className="text-2 max-w-[387px] text-xs lg:text-base font-medium lg:font-bold p-4  flex items-center">
                                But Loop Maven doesn`t stop there - it goes above and beyond by allowing you to set reminders for follow-ups, through WhatsApp and mail, keeping you organized and proactive even when you`re caught up with your busy schedule.
                            </div>
                        </div>
                        <div className='w-[100%] h-full bg-white text-black flex justify-center '>
                            <div className="text-3 text-xs lg:text-base font-medium lg:font-bold p-4  flex items-center">
                                Seamlessly manage your network and maximize opportunities with Loop, the ultimate tool for building and nurturing meaningful connections.
                            </div>
                        </div>
                    </div>
                </div>
                <Image src={'/assets/images/landing/Right-Arrow.svg'} height={12} width={12} onClick={handleNext} className='lg:hidden' />
            </div>
        </div>
    );
}

export default MavenSwiper;
