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
            <div className='hidden lg:block'>

                <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                    <div className={` relative h-[337px] w-[1070px] `}>
                        <div className='horizontal-card-inner '>
                            <div className={`horizontal-card-front  h-[337px] w-[1070px] rounded-[20px] `}>
                                <div className={`relative  h-[337px] w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <div className='flex '>
                                        <div className=''>
                                            <Image src={'/assets/images/Mask group (6).png'} alt='mask group' width={331} height={336} />
                                        </div>
                                        <div className='flex flex-col pt-[98px]  pr-[107px]'>
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
                            <div className={`horizontal-card-back  h-[337px] w-[1070px] rounded-[20px]   `}>
                                <div className={`relative  h-[337px] w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <h1 className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum.
                                    </h1>
                                </div>

                                <div className='absolute bottom-4 right-8'>
                                    <RxCrossCircled onClick={handleFlip} size={32} color='white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='lg:hidden'>
                <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                    <div className={` relative w-[345px] h-[230px] md:w-[500px] md:h-[336px] `}>
                        <div className='horizontal-card-inner '>
                            <div className={`horizontal-card-front  w-[345px] h-[230px] md:w-[500px] md:h-[336px] rounded-[20px] `}>
                                <div className={`relative  w-[345px] h-[230px] md:w-[500px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <div className='pt-[19px] md:pt-[40px] md:pl-[50px]  text-[36px] font-bold  '>
                                        <div flex flex-col>
                                            <div className='pt-8 text-[36px] md:text-[45px] font-bold'>
                                                <span className='text-white'>Footprint in </span><br /><span className="text-transparent bg-gradient-to-br from-[#FDFF96] to-[#66D3E1] bg-clip-text">Web3.0.</span>
                                            </div>
                                            <div className='text-[14px] md:text-[24px] pt-8 font-bold'>
                                                <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Empowering You with Web3&apos;s Limitless </span><br />
                                                <span className="text-transparent bg-gradient-to-br from-[#96FFAD] to-[#66D3E1] bg-clip-text">Possibilities. </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='absolute bottom-4 right-8'>
                                    <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                                </div>
                            </div>
                            <div className={`horizontal-card-back  w-[345px] h-[230px] md:w-[500px] md:h-[336px] rounded-[20px]   `}>
                                <div className={`relative  w-[345px] h-[230px] md:w-[500px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                    <h1 className='text-white'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                        anim id est laborum.
                                    </h1>
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