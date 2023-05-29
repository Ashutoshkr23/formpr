import Image from 'next/image'
import { motion } from 'framer-motion';
import React from 'react'

const Hero = () => {
    return (

        <div className='flex lg:flex-row justify-between flex-col-reverse pt-24'>

            <div className="flex flex-col mt-12 lg:mt-48 ">
                <h1 className=' mr-auto text-left anim-typewriter   font-bold '>
                    Enter The <span className="text-transparent bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] bg-clip-text">
                        Loop.
                    </span>
                </h1>
                <motion.h6
                    className="sm:text-sm text-base text-[#1D76A9] opacity-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    Visiting Cards Reimagined on Web3.0
                </motion.h6>

            </div>
            <div className=' hidden md:block  mx-auto lg:ml-auto lg:mx-0 lg:pr-20'>
                <div className=' relative '>
                <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                    >
                    <Image src={'/assets/images/landing/phone1.png'}
                        width={233}
                        height={494}
                        quality={100}
                        alt='mobile'
                    />
                    </motion.div>
                    <motion.div 
                    initial={{ y: 200}}
                    animate={{ y: 0 }} 
                    transition={{ duration: 2 }}
                    className='absolute top-[484px]'>
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={233}
                        height={154}
                        quality={100}
                        alt='mobile'
                    /></motion.div>
                    <div
                     
                        className='absolute top-[72px] -left-[175px]'
                    >
                        <Image src={'/assets/images/cardbl.svg'} width={244} height={177} alt='card bl' />
                    </div>
                    <div
                        
                        className='absolute -z-10 top-[180px]  -right-[127px]' 
                    >
                        <Image src={'/assets/images/cardpi.svg'} width={221} height={174} alt='card pi' /> 
                    </div>

                    
                </div>
            </div>
            <div className='md:hidden mx-auto min-w-[375px] overflow-hidden '>
                <div className=' relative mx-auto w-[200px] pl-8 '>
                <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                    >
                    <Image src={'/assets/images/landing/phone1.png'}
                        width={168}
                        height={332}
                        alt='mobile'
                    />
                    </motion.div>
                    <div
                   
                        className='absolute top-[47px] -left-[96px] '
                    >
                        <Image src={'/assets/images/cardbl.svg'} width={162} height={117} alt='card bl' />
                    </div>
                    <div
                        
                        className='absolute top-[118px]  -right-[87px] -z-10 '
                    >
                        <Image src={'/assets/images/cardpi.svg'} width={146} height={116} alt='card pi' />
                    </div>
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                        className='mt-[-5px] z-40 '

                    >
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={168}
                        height={425}
                        alt='mobile'
                    />
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Hero

