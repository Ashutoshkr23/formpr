import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ProductComp from './ProductComp';

function Products() {
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
        <div className='mt-20 ' id='product'>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-center '>
                    <div>
                        <h3>Products</h3>
                    </div>
                    <h2 >Step into the Loop</h2>
                </div>

            <div className='w-80 mt-12 md:mt-24  mobile:w-full max-w-[380px] md:max-w-[740px] lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] justify-between mx-auto flex items-center'>
                    <Image src={'assets/images/landing/Left-Arrow.svg'} height={20} width={20} onClick={handlePrev} className='hidden md:block lg:hidden' />
                    <Image src={'assets/images/landing/Left-Arrow.svg'} height={12} width={12} onClick={handlePrev} className='md:hidden lg:hidden' />
                <div className='w-[280px] mobile:w-80 md:w-[700px] lg:w-full lg:max-w-[1020] xl:max-w-[1230px] xl:w-full h-full overflow-hidden '>
                    <div
                        className='w-[840px] mobile:w-[960px] md:w-[1050px]  lg:w-full lg:max-w-[1100px] xl:max-w-[1230px] xl:w-full h-full flex'
                        style={{
                            transform: `translateX(${-currentIndex * (100 / numDivs)}%)`,
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        <div className='w-[100%] h-full  flex justify-center'>
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/Lite.png"}
                                    content={"Sleek and vibrant, our Loop Lite cards offer a range of solid colour options with contrasting Loop logo that adds a bold touch of distinction"}
                                cardtype={"Basic"}
                                text2={"Whisper your brand, shoutout ours. "}
                                offering1={"Solid Colours"}
                                offering2={"Contrasting Logo"}
                            />
                        </div>
                        <div className='w-[100%] h-full  flex justify-center'>
                            <ProductComp
                                text={"Loop Elevate "}
                                img={"/assets/images/landing/ElevateCards.png"}
                                    content={"Elevate your style with Loop Elevate cards. Featuring a selection of solid colors and gradient options, our cards are designed with a Loop logo that seamlessly blends in, exuding sophistication."}
                                    cardtype={"Pro"}
                                    text2={"Whisper your brand, we blend in.  "}
                                    offering1={"Gradient Colours Added"}
                                    offering2={"Blending Logo"}
                            />
                        </div>
                        <div className='w-[100%] h-full  flex justify-center'>
                            <ProductComp
                                text={"Loop Supreme"}
                                img={"/assets/images/landing/SupremeCard.png"}
                                    content={"Unleash your creativity with Loop Supreme cards. Offering unlimited color options, these cards boast a bold and eye-catching version of your logo on the back, making a statement that's impossible to ignore."}
                                    cardtype={"Elite"}
                                    text2={"Shoutout your brand, whisper ours. "}
                                    offering1={"Unlimited Colours"}
                                    offering2={"Standout Logo"}

                            />
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

export default Products;