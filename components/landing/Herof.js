import Image from 'next/image'
import { motion } from 'framer-motion';
import React from 'react'

const Herof = () => {
    return (

        <div className='flex  lg:flex-row justify-between   flex-col-reverse pt-24   '>

            <div className="flex flex-col mt-12 lg:mt-48 ">
                <h1 className='sm:text-[60px] mr-auto text-left anim-typewriter  text-[40px] font-bold '>
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
                    <Image src={'/assets/images/landing/mob.png'}
                        width={258}
                        height={644}
                        quality={100}
                    />
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }}
                        className='absolute top-[72px] -left-[175px]'
                    >
                        <Image src={'/assets/images/cardbl.svg'} width={244} height={177} />
                    </motion.div>
                    <motion.div
                        initial={{ x: 1000 }} 
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }} 
                        className='absolute -z-10 top-[180px]  -right-[127px]' 
                    >
                        <Image src={'/assets/images/cardpi.svg'} width={221} height={174} /> 
                    </motion.div>
                </div>
            </div>
            <div className='md:hidden mx-auto min-w-[375px] overflow-hidden '>
                <div className=' relative mx-auto w-[200px] pl-8 '>
                    <Image src={'/assets/images/landing/mob.png'}
                        width={168}
                        height={425}
                    />
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2 }}
                        className='absolute top-[47px] -left-[96px] '
                    >
                        <Image src={'/assets/images/cardbl.svg'} width={162} height={117} />
                    </motion.div>
                    <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2 }}
                        className='absolute top-[118px]  -right-[87px] -z-10 '
                    >
                        <Image src={'/assets/images/cardpi.svg'} width={146} height={116} />
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Herof