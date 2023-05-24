import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosAddCircle, RxCrossCircled, IoMdAddCircle, } from 'react-icons/io';

function HorizontalCard1() {
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
                                  <IoMdAddCircle onClick={handleFlip} size={32} color='white' />
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
                                      <div className='flex flex-col item-center'>
                                          <div className='pl-[26px] pr-[16px] '>
                                              <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">
                                                  Android and iOS
                                              </span> <span className="text-transparent bg-gradient-to-br from-[#FDFF96] via-[#96FFAD] to-[#66D3E1] bg-clip-text">Compatible.</span>
                                          </div>

                                          <div className='font-bold text-[16px] md:text-[24px] pl-[26px] pr-[90px] text-white pt-[10px] md:pt-[20px]'>
                                              <p> Cross-Platform Compatibility for Seamless Connections.</p>
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

export default HorizontalCard1
