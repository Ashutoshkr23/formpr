import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosAddCircle,  IoMdAddCircle, } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';


function HorizontalCard1() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

  return (
    <div>
          <div className='hidden lg:block 'onClick={handleFlip}>
              <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                  <div className={` relative h-[337px] w-[950px] xl:w-[1070px] `}>
                      <div className='horizontal-card-inner '>
                          <div className={`horizontal-card-front  h-[337px] w-[950px] xl:w-[1070px] rounded-[20px] `}>
                              <div className={`relative  h-[337px] w-[950px] xl:w-[1070px] bg-black  rounded-[20px] drop-shadow-white`}>
                                  <div className='pt-[40px]  text-[45px] font-bold  '>
                                      <div className='flex flex-col'>
                                          <div className=' pl-[59px] pr-[478px] '>
                                              <span className=" text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
                                                  Android and iOS Compatible.</span>

                                          </div>


                                          <div className='font-bold pl-[59px] pr-[343px] text-[20px] text-white pt-5'>
                                              <p>Cross-Platform Compatibility for Seamless Connections.</p>
                                          </div>
                                          <div className='mt-[-125px] ml-[656px] '>
                                              <Image src={'/assets/images/image 13.png'} alt='img 13' width={174} height={235} />
                                          </div>
                                          <div className='mt-[-332px] ml-[849px]'>
                                              <Image src={'/assets/images/image 15.png'} alt='img 15' width={172} height={236} />
                                          </div>

                                      </div>
                                  </div>
                              </div>

                              <div className='absolute bottom-4 right-8'>
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


          <div className='lg:hidden'onClick={handleFlip}> 
              <div className={`horizontal-card ${isFlipped ? 'flipped' : ''} `}>
                  <div className={` relative w-[345px] h-[230px] md:w-[450px] md:h-[336px] `}>
                      <div className='horizontal-card-inner '>
                          <div className={`horizontal-card-front  w-[345px] h-[230px] md:w-[450px] md:h-[336px] rounded-[20px] `}>
                              <div className={`relative  w-[345px] h-[230px] md:w-[450px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
                                  <div className='pt-[19px] md:pt-[40px]   text-[36px] font-bold  '>
                                      <div className='flex flex-col item-center px-4 md:px-12'>
                                          <div className=' '>
                                              <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
                                                  Android and iOS
                                              </span> <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">Compatible.</span>
                                          </div>

                                          <div className='font-bold text-[16px] md:text-[24px] text-white pt-[10px] md:pt-[20px]'>
                                              <p> Cross-Platform Compatibility for Seamless Connections.</p>
                                          </div>

                                      </div>
                                  </div>
                              </div>

                              <div className='absolute bottom-4 right-8'>
                                  <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
                              </div>
                          </div>
                          <div className={`horizontal-card-back  w-[345px] h-[230px] md:w-[450px] md:h-[336px] rounded-[20px]   `}>
                              <div className={`relative text-[16px] sm:text-[20px] sm:p-8 p-6 w-[345px] h-[230px] md:w-[450px] md:h-[336px] bg-black  rounded-[20px] drop-shadow-white`}>
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
  )
}

export default HorizontalCard1
