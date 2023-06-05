import Image from 'next/image'
import React, { useState } from 'react'
import {  IoMdAddCircle, } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';
import ScrollTrigger from 'react-scroll-trigger';




function HorizontalCard1() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isCardVisible, setIsCardVisible] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isHeadingVisible, setIsHeadingVisible] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const onCardEnterViewport = () => {
        setIsCardVisible(true);
        setTimeout(() => {
            setIsTextVisible(true);
        }, 700); // Delay the text visibility by 1 second
        setTimeout(() => {
            setIsHeadingVisible(true);
        }, 500);
    };


    return (
        <ScrollTrigger onEnter={onCardEnterViewport}>

            <div>
                <div className='hidden lg:block ' onClick={handleFlip}>
                    <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                        <div className={` relative drop-shadow-white h-[337px] w-[950px] xl:w-[1070px] `}>
                            <div className='horizontal-card-inner '>
                                <div className={`horizontal-card-front  h-[337px] w-[950px] xl:w-[1070px] rounded-[20px] ${isCardVisible ? '' : ''} `}>
                                    <div className={`relative  h-[337px] w-[950px] xl:w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                        <div className='flex'>
                                            <div className='w-7/12'>
                                                <div className='flex flex-col'>
                                                    {isHeadingVisible && <div className='animate-text pt-[40px]  text-[45px] font-bold pl-[59px] '>
                                                        <span className=" text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text ">
                                                            Android and iOS Compatible.</span>

                                                    </div>}


                                                    <div className='font-bold pl-[59px]  text-[20px] text-white pt-5'>
                                                        {isTextVisible && <p className='animate-text'>Cross-Platform Compatibility for Seamless Connections.</p>}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='flex'>
                                                {isTextVisible && 
                                                <div className='mt-[102px] mr-5'>
                                                    <Image src={'/assets/images/landing/androidphone1.png'} alt='cross platform phones' width={174} height={235} />

                                                </div>}
                                                {isTextVisible && 
                                                <div className=''>
                                                    <Image src={'/assets/images/landing/androidphone2.png'} alt='phone2' width={172} height={236} />

                                                </div>}



                                            </div>
                                        </div>





                                    </div>

                                    <div className='absolute bottom-4 right-8 hover:opacity-50 hover:cursor-pointer'>
                                        <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                                    </div>
                                </div>
                                <div className={`horizontal-card-back  h-[337px] w-[950px] xl:w-[1070px] rounded-[20px]   `}>
                                    <div className={`relative p-8 text-[24px]  h-[337px] w-[950px] xl:w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                        <p className='text-white'>
                                            Whether it&apos;s Android or iOS, Loop bridges the divide, connecting you with anyone, anywhere, on any device.

                                        </p>
                                    </div>

                                    <div className='absolute bottom-4 right-8'>
                                        <RxCrossCircled onClick={handleFlip} size={32} color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='lg:hidden' onClick={handleFlip}>
                    <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                        <div className={` relative w-[300px] drop-shadow-white mx-auto mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] `}>
                            <div className='horizontal-card-inner '>
                                <div className={`horizontal-card-front  w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] rounded-[20px] ${isCardVisible ? '' : ''} `}>
                                    <div className={`relative  w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                        <div className='pt-[19px] md:pt-[40px]   text-[32px] mobile:text-[36px] font-bold  '>
                                            <div className='flex flex-col item-center px-2 mobile:px-4 md:px-12'>
                                                {isHeadingVisible && <div className='animate-text '>
                                                    <span className=" text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
                                                        Android and iOS Compatible.</span>
                                                </div>}

                                                <div className='font-bold text-[16px] md:text-[24px] text-white pt-[10px] md:pt-[20px]'>
                                                    {isTextVisible && <p className='animate-text'> Cross-Platform Compatibility for Seamless Connections.</p>}
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='absolute bottom-4 right-8 hover:opacity-50 hover:cursor-pointer'>
                                        <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                                    </div>
                                </div>
                                <div className={`horizontal-card-back  w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] rounded-[20px]   `}>
                                    <div className={`relative text-[16px]  sm:text-[20px] sm:p-8 p-6 w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                        <p className='text-white'>
                                            Whether it&apos;s Android or iOS, Loop bridges the divide, connecting you with anyone, anywhere, on any device.

                                        </p>
                                    </div>

                                    <div className='absolute bottom-4 right-8'>
                                        <RxCrossCircled onClick={handleFlip} size={32} color='white' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default HorizontalCard1
