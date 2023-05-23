import Image from 'next/image'
import { motion } from 'framer-motion';
import React from 'react'

const Herof = () => {
    return (

        <div className='flex  lg:flex-row justify-between   flex-col-reverse pt-24'>

            <div className="flex flex-col mt-48 ">
                <h1 className='sm:text-[60px] bg-[#66D3E1] anim-typewriter lg:anim-typewriterlg text-[40px] font-bold  '>
                    <span>Enter The </span> <span className="text-transparent bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] bg-clip-text">
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
            <div className='ml-0 mx-auto lg:ml-auto lg:mx-0 pr-20'>
                <div className=' relative'>
                    <Image src={'/assets/images/landing/Mobile.png'}
                        width={258}
                        height={644}
                    />
                    <motion.div
                        initial={{ x: -1000 }} // Initial position outside the left side of the screen
                        animate={{ x: 0 }} // Animate to the original position
                        transition={{ duration: 2 }} // Animation duration
                        className='absolute top-[72px] -left-[175px]'
                    >
                        <Image src={'/assets/images/cardbl.svg'} width={244} height={177} />
                    </motion.div>
                    <motion.div
                        initial={{ x: 1000 }} // Initial position outside the right side of the screen
                        animate={{ x: 0 }} // Animate to the original position
                        transition={{ duration: 2 }} // Animation duration
                        className='absolute top-[180px] -z-10 -right-[127px]' 
                    >
                        <Image src={'/assets/images/cardpi.svg'} width={221} height={174} /> 
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Herof