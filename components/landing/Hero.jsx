import Image from 'next/image'
import { motion } from 'framer-motion';
import React from 'react'

const Hero = () => {
    return (

        <div className='flex lg:flex-row justify-between items-center max-w-[1208px] mx-auto flex-col-reverse mt-16 lg:mt-16 lg:px-4  xl:px-0'>

            <div className="flex flex-col items-center lg:items-start mt-20 md:mt-48 lg:mt-0  px-2  mobile:px-4 md:px-0 mx-auto lg:mx-0 max-w-[456px] xl:max-w-[600px] ">
                <h1 className=' mr-auto text-left anim-typewriter  font-bold '>
                    Enter The <span className="text-transparent bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] bg-clip-text">
                        Loop.
                    </span>
                </h1>
                <motion.h6
                    className="sm:text-sm text-base mt-8 text-gray opacity-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    Welcome to The Loop, a community of high-networking individuals connected through the next generation of NFC-enabled digital visiting cards. 
                </motion.h6>
                <motion.div
                    className="bg-black rounded-2xl flex mt-8  md:mt-12 px-4 lg:min-w-[450px] w-full py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    <div className="flex-col w-1/3 ">
                        <Image height={"50"} width={"50"} src={"/assets/images/landing/Network.png"} alt=''/>
                        <p className='text-xs text-white mt-4 font-bold'>Unparalleled Networking Possibilities</p>
                    </div>
                    <div className="flex-col w-1/3">
                        <Image height={"50"} width={"50"} src={"/assets/images/landing/Info.png"} alt=''/>
                        <p className='text-xs text-white mt-4 font-bold'>Seamless Information Exchange</p>
                    </div>
                    <div className="flex-col w-1/3 pl-3">
                        <Image height={"50"} width={"50"} src={"/assets/images/landing/Digital.png"} alt=''/>
                        <p className='text-xs text-white mt-4 font-bold'>Amplified Digital Presence</p>
                    </div>
                   
                </motion.div>

                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4 }}
                    className='w-[140px] md:w-[165px] h-9 md:h-10 mt-12 bg-black text-white text-xs md:text-base  font-bold rounded-[10px]  text-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]'
                >
                    GET NOW
                </motion.button>
                

            </div>
            {/*Desktop and tab view */ }

            <div className=' hidden md:block  mx-auto lg:ml-auto lg:mx-0 lg:pr-32'>
                <div className=' relative '>
                   <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                    >
                    <Image src={'/assets/images/landing/landingProfileTop.png'}
                        width={260}
                        height={580}
                        quality={100}
                        alt='mobile'
                        priority                        
                    />
                    </motion.div>
                    <motion.div 
                        initial={{ y: 200}}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                        className='absolute top-[550px] z-[-1]'>
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={260}
                        height={154}
                        alt='mobile'
                        quality={100}
                    /></motion.div>
                    <motion.div
                     
                        className='absolute top-[90px] -left-[185px]'
                        initial={{ x: -150 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }}
                    >
                       
                    <Image src={'/assets/images/landing/LoopCard2.png'} width={244} height={177} alt='sample nfc visting card' quality={100}/>
                    
                    </motion.div>
                    < motion.div 
                        initial={{ x: 150 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }}
                        
                        className='absolute -z-10 top-[200px] -right-[150px]' 
                    >
                        <Image src={'/assets/images/landing/LoopCard1.png'} width={220} height={177} alt='sample nfc visting card' quality={100}/> 
                    </motion.div>

                    
                </div>
            </div>

            {/*mobile view */}

            <div className='md:hidden'>
                <div className=' relative'>
                <motion.div
                        initial={{ y: -70 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                    >
                    <Image src={'/assets/images/landing/landingProfileTop.png'}
                        width={190}
                        height={400}
                        alt='mobile'
                        priority
                    />
                    </motion.div>
                    <motion.div 
                        initial={{ x: -50 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }}
                   
                        className='absolute top-[100px] -left-[85px] '
                    >
                    <Image src={'/assets/images/landing/LoopCard2.png'} width={135} height={117} alt='sample nfc visting card' quality={100} />
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }}
                        
                        className='absolute top-[175px] -right-[65px] -z-10 '
                    >
                    <Image src={'/assets/images/landing/LoopCard1.png'} width={135} height={117} alt='sample nfc visting card' quality={100}/>
                    </motion.div>
                   
                    <motion.div
                        initial={{ y: 70 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                        className=' z-40 mt-[-5px]'

                    >
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={190}
                        height={425}
                        alt='mobile'
                        quality={100}
                    />
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Hero

