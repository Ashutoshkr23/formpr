import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TestimonialComp from './TestimonialComp'

function Testimonial() {
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
        <div className='mt-20' id='testimonial'>
            <div className="relative overflow-hidden w-full">
                <div className='text-center mt-28'>
                    <h3>Voices from the Loop</h3>
                    <h2 className=' mt-2 '>Our Testimonials</h2>
                </div>
                <div className='w-80 mt-12 md:mt-20 mobile:w-full max-w-[380px] md:max-w-[740px] lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] justify-between mx-auto flex items-center'>
                    <Image src={'assets/images/landing/Left-Arrow.svg'} alt="previous product" height={20} width={20} onClick={handlePrev} className='hidden md:block lg:hidden' />
                    <Image src={'assets/images/landing/Left-Arrow.svg'} alt="previous product" height={12} width={12} onClick={handlePrev} className='md:hidden lg:hidden' />
                    <div className='w-[280px] mobile:w-80 md:w-[700px] lg:w-full lg:max-w-[1020] xl:max-w-[1230px] xl:w-full h-[480px] overflow-hidden '>
                        <div
                            className='w-[840px] mobile:w-[960px] md:w-[1050px]  lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] xl:w-full h-[480px] flex'
                            style={{
                                transform: `translateX(${-currentIndex * (100 / numDivs)}%)`,
                                transition: 'transform 0.3s ease-in-out',
                            }}
                        >
                            <div className='w-[100%] h-[480px] items-center flex justify-center'>
                                <TestimonialComp
                                    img={"/assets/images/landing/Vineet.png"}
                                    feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                                    name={"Vineet Singhal"}
                                    designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                            </div>
                            <div className='w-[100%] h-[480px] items-center flex justify-center'>
                                <TestimonialComp
                                    img={"/assets/images/landing/Sachit.png"}
                                    feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                                    name={"Sachit Dedhia"}
                                    designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                            </div>
                            <div className='w-[100%] h-[480px] items-center flex justify-center'>
                                <TestimonialComp
                                    img={"/assets/images/landing/Rikshit.png"}
                                    feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                                    name={"Rikshit Kotian"}
                                    designation={"Director - Business Development, Verraton Health Private Limited"} />
                            </div>
                        </div>
                    </div>
                    <Image src={'assets/images/landing/Right-Arrow.svg'} height={20} width={20} onClick={handlePrev} className='hidden md:block lg:hidden' />
                    <Image src={'assets/images/landing/Right-Arrow.svg'} height={12} width={12} onClick={handlePrev} className='md:hidden lg:hidden' />
                </div>
            </div>
        </div>
    );
}

export default Testimonial;







