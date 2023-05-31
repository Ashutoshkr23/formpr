import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosAddCircle,  IoMdAddCircle, } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';


function HorizontalCard2() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>
            <div className='hidden lg:block'onClick={handleFlip}>

                <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                    <div className={` relative drop-shadow-white h-[337px] w-[950px] xl:w-[1070px] `}>
                        <div className='horizontal-card-inner '>
                            <div className={`horizontal-card-front  h-[337px] w-[950px] xl:w-[1070px] rounded-[20px] `}>
                                <div className={`relative  h-[337px] w-[950px] xl:w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <div className='flex'>
                                        <div>
                                            <Image src={'/assets/images/landing/web.png'} alt='mask group' width={331} height={336} />
                                        </div>
                                        <div className='flex flex-col pt-[98px]  '>
                                            <div className='text-[45px] pl-[150px] font-bold'>
                                                <span className='text-white'> Footprint in </span><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
                                            </div>
                                            <div className='text-[24px] ml-0 font-bold pt-7 '>
                                                <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3&apos;s Limitless Possibilities.</span><br />

                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className='absolute bottom-4 right-8'>
                                    <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                                </div>
                            </div>
                            <div className={`horizontal-card-back  h-[337px] w-[950px] xl:w-[1070px] rounded-[20px] `}>
                                <div className={`relative p-8 text-[24px] h-[337px] w-[950px] xl:w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <p className='text-white'>
                                    Unlock the door to the future with LoopChain. Each card creates a wallet, opening a world of NFTs and blockchain utilities, expanding the horizons of your digital presence.
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


            <div className='lg:hidden'onClick={handleFlip}>
                <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                    <div className={` relative drop-shadow-white bg-white w-[300px] mx-auto mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] `}>
                        <div className='horizontal-card-inner '>
                            <div className={`horizontal-card-front  w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] rounded-[20px] `}>
                                <div className={`relative  w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <div className='pt-[40px]   text-[36px] font-bold  '>
                                        <div className="flex flex-col px-6 md:px-12">
                                            <div className='text-[36px] md:text-[45px]  leading-[120%] md:leading font-bold'>
                                                <span className='text-white'>Footprint in </span><br /><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
                                            </div>
                                            <div className='text-[14px] md:text-[24px] pt-7 leading-[140%]  font-bold'>
                                                <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3&apos;s Limitless </span>
                                                <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Possibilities. </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='absolute bottom-4 right-8'>
                                    <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                                </div>
                            </div>
                            <div className={`horizontal-card-back  w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] rounded-[20px]   `}>
                                <div className={`relative text-[16px] sm:text-[20px] sm:p-8 p-6 w-[300px] mobile:w-[345px] h-[230px] md:w-[450px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                <p className='text-white'>
                                    Unlock the door to the future with LoopChain. Each card creates a wallet, opening a world of NFTs and blockchain utilities, expanding the horizons of your digital presence.
                                    </p>
                                </div>

                                <div className='absolute bottom-4 right-8'>
                                    <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard2