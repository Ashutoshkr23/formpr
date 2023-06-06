import Image from 'next/image'
import { motion } from 'framer-motion';

const Hero = () => {
    return (

        <div className='flex lg:flex-row justify-between items-center max-w-[1208px] mx-auto flex-col mt-20 lg:mt-28 lg:px-4 lg:pb-  xl:px-0'>

            <div className="flex flex-col items-center lg:items-start mt-12  lg:mt-0  px-2  mobile:px-4 md:px-0 mx-auto lg:mx-0 max-w-[456px] xl:max-w-[680px] ">
                <h1 className=' mr-auto text-left anim-typewriter  font-bold '>
                    Enter The <span className="text-transparent bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] bg-clip-text">
                        Loop.
                    </span>
                </h1>
                <motion.h3
                    className="sm:text-sm text-base mt-8 max-w-[500px] text-gray opacity-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    Welcome to The Loop, a community of high-networking individuals connected through the next generation of NFC-enabled digital visiting cards. 
                </motion.h3>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className='hidden lg:block w-[140px] md:w-[165px] h-9 md:h-10 mt-12 bg-black text-white text-xs md:text-base  font-bold rounded-[10px]  text-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]'
                >
                    GET NOW
                </motion.button>
                <div className='hidden md:block'>

                    <motion.div
                        className="flex flex-wrap items-center  mt-8 gap-4  md:mt-12 lg:min-w-[450px] w-full py-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4 }}
                    >
                        <div className='bg-white w-[215px] items-center flex rounded-2xl h-[74px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Eco-Friendly.png" alt="" height={50} width={50} className=' mx-6' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>
                                Eco-friendly
                            </p>
                        </div>
                        <div className='bg-white w-[215px] items-center flex rounded-2xl h-[74px] drop-shadow-white'>
                            <Image src="/assets/images/landing/NFC.png" alt="" height={50} width={50} className=' mx-6' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>NFC-enabled</p>
                        </div>
                        <div className='bg-white w-[215px] items-center flex  rounded-2xl h-[74px] drop-shadow-white'>
                            <Image src="/assets/images/landing/QR-code.png" alt="" height={50} width={50} className=' mx-6' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>QR code-enabled</p>

                        </div>
                        <div className='bg-white w-[215px] items-center flex rounded-2xl h-[74px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Infinite-Symbol.png" alt="" height={50} width={50} className=' mx-6' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>Timeless</p>

                        </div>
                        <div className='bg-white w-[215px] items-center flex rounded-2xl h-[74px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Alarm.png" alt="" height={50} width={50} className=' mx-6' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>Set Reminders</p>

                        </div>
                        <div className='bg-white w-[215px] items-center flex rounded-2xl h-[74px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Pocket.png" alt="" height={50} width={50} className=' mx-6' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>Pocket-friendly</p>

                        </div>
                    </motion.div>
                </div>
                <div className='md:hidden'>

                    <motion.div
                        className="flex flex-wrap items-center justify-center  mt-8 gap-2  md:mt-12 lg:min-w-[450px] w-full py-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3 }}
                    >
                        <div className='bg-white w-[150px] items-center flex rounded-2xl h-[60px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Eco-Friendly.png" alt="" height={32} width={32} className=' mx-2' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>
                                Eco-friendly
                            </p>
                        </div>
                        <div className='bg-white w-[150px] items-center flex rounded-2xl h-[60px] drop-shadow-white'>
                            <Image src="/assets/images/landing/NFC.png" alt="" height={32} width={32} className=' mx-2' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>NFC-enabled</p>
                        </div>
                        <div className='bg-white w-[150px] items-center flex  rounded-2xl h-[60px] drop-shadow-white'>
                            <Image src="/assets/images/landing/QR-code.png" alt="" height={32} width={32} className=' mx-2' />
                            <p className='text-xs font-bold pr-2 -tracking-[0.5px]'>QR code-enabled</p>

                        </div>
                        <div className='bg-white w-[150px] items-center flex rounded-2xl h-[60px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Infinite-Symbol.png" alt="" height={32} width={32} className=' mx-2' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>Timeless</p>

                        </div>
                        <div className='bg-white w-[150px] items-center flex rounded-2xl h-[60px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Alarm.png" alt="" height={32} width={32} className=' mx-2' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>Set Reminders</p>

                        </div>
                        <div className='bg-white w-[150px] items-center flex rounded-2xl h-[60px] drop-shadow-white'>
                            <Image src="/assets/images/landing/Pocket.png" alt="" height={32} width={32} className=' mx-2' />
                            <p className='text-xs font-bold -tracking-[0.5px]'>Pocket-friendly</p>

                        </div>
                    </motion.div>
                </div>
             

                

            </div>
            {/*Desktop and tab view */ }

            <motion.div className=' hidden md:block mx-auto lg:ml-auto lg:mx-0 lg:pr-32'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 , delay:5  }}
                
            >
                <div className=' relative h-[580px] w-[260px]  '>
                    < motion.div
                        initial={{ x: 150 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2, delay: 5 }}

                        className='absolute  top-[200px] -right-[142px]'
                    >
                        <Image src={'/assets/images/landing/LoopCard1.png'} width={220} height={169} alt='sample nfc visting card' quality={100} />
                    </motion.div>
                   <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2, delay: 5 }}
                    >
                    <Image className='absolute top-0 right-0' src={'/assets/images/landing/landingProfileTop.png'}
                        width={260}
                        height={560}
                        quality={100}
                        alt='sample visiting card profile'
                        priority                        
                    />
                    </motion.div>
                    <motion.div 
                        initial={{ y: 200}}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2, delay: 5 }}
                        className='absolute top-[550px] '>
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={260}
                        height={154}
                        alt='sample visting card profile reflection'
                        quality={100}
                    /></motion.div>
                    <motion.div

                        className='absolute top-[90px] -left-[185px] shadow-white  mr-4'
                        initial={{ x: -150 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2 , delay:5 }}
                    >

                        <Image src={'/assets/images/landing/CardDark.png'} width={244} height={177} alt='sample nfc visting card' quality={100} />

                    </motion.div>                    
                </div>
            </motion.div>

            {/*mobile view */}

            <div className='md:hidden'>
                <div className=' relative w-[190px] h-[400px]'>
                    <div className='absolute top-[175px] -right-[65px]  '>
                        <Image src={'/assets/images/landing/LoopCard1.png'} width={135} height={117} alt='sample nfc visting card' quality={100} />
                    </div>
                    <div>
                    <Image className='absolute top-0 right-0' src={'/assets/images/landing/landingProfileTop.png'}
                        width={190}
                        height={400}
                        alt='smaple visting card profile'
                        priority
                    />
                    </div>
                    <div className='absolute top-[100px] -left-[85px] ' >
                    <Image src={'/assets/images/landing/CardDark.png'} width={135} height={117} alt='sample nfc visting card' quality={100} />
                    </div>  
                </div>
                <div className=' z-40 mt-[-5px]'>
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={190}
                        height={425}
                        alt='sample visting card profile reflection'
                        quality={100}
                    />
                </div>
            </div>
            <div>
            <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className='lg:hidden w-[140px] md:w-[165px] h-9 md:h-10 mt-12 md:mt-56 bg-black text-white text-xs md:text-base  font-bold rounded-[10px]  text-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]'
            >
                GET NOW
            </motion.button>
            </div>
        </div>

    )
}

export default Hero

