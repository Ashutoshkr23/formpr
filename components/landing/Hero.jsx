import Image from 'next/image'
import { motion } from 'framer-motion';

const Hero = () => {
    return (

        <div className='flex lg:flex-row justify-between items-center max-w-[1208px] mx-auto flex-col-reverse mt-16 lg:mt-16 lg:px-4  xl:px-0'>

            <div className="flex flex-col items-center lg:items-start mt-20 md:mt-48 lg:mt-0  px-2  mobile:px-4 md:px-0 mx-auto lg:mx-0 max-w-[456px] xl:max-w-[600px] ">
                <h1 className=' mr-auto text-left anim-typewriter  font-bold '>
                    Enter The <span className="text-transparent bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] bg-clip-text">
                        Loop.
                    </span>
                </h1>
                <motion.h3
                    className="sm:text-sm text-base mt-8 text-gray opacity-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    Welcome to The Loop, a community of high-networking individuals connected through the next generation of NFC-enabled digital visiting cards. 
                </motion.h3>
                <motion.div
                    className="rounded-3xl   flex flex-col md:flex-row mt-8  md:mt-12 px-4 lg:min-w-[450px] w-full py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                >
                    <div className="flex items-center md:items-start md:flex-col mt-7 md:w-1/3 ">
                        <Image height={"50"} width={"50"} src={"/assets/images/landing/NetworkImg.png"} alt='networking'/>
                        <p className='text-xs ml-4 md:ml-0  md:mt-4 font-bold'>Unparalleled Networking Possibilities</p>
                    </div>
                    <div className="flex items-center md:items-start md:flex-col mt-7 md:w-1/3">
                        <Image height={"50"} width={"50"} src={"/assets/images/landing/InfoImg.png"} alt='information exchange visting card'/>
                        <p className='text-xs ml-4 md:ml-0  md:mt-4 font-bold'>Seamless Information Exchange</p>
                    </div>
                    <div className="flex items-center md:items-start md:flex-col mt-7 md:w-1/3 md:pl-3">
                        <Image height={"50"} width={"50"} src={"/assets/images/landing/DigitalImg.png"} alt='visting card digital presence'/>
                        <p className='text-xs ml-4 md:ml-0 md:mt-4 font-bold'>Amplified Digital Presence</p>
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
                <div className=' relative h-[580px] w-[260px]  '>
                    < motion.div
                        initial={{ x: 150 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2 }}

                        className='absolute  top-[200px] -right-[142px]'
                    >
                        <Image src={'/assets/images/landing/LoopCard1.png'} width={220} height={169} alt='sample nfc visting card' quality={100} />
                    </motion.div>
                   <motion.div
                        initial={{ y: -250 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
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
                        transition={{ duration: 2 }}
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
                        transition={{ duration: 2 }}
                    >

                        <Image src={'/assets/images/landing/CardDark.png'} width={244} height={177} alt='sample nfc visting card' quality={100} />

                    </motion.div>                    
                </div>
            </div>

            {/*mobile view */}

            <div className='md:hidden'>
                <div className=' relative w-[190px] h-[400px]'>
                    <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 2 }}

                        className='absolute top-[175px] -right-[65px]  '
                    >
                        <Image src={'/assets/images/landing/LoopCard1.png'} width={135} height={117} alt='sample nfc visting card' quality={100} />
                    </motion.div>
                    <motion.div
                        initial={{ y: -70 }}
                        animate={{ y: 0 }} 
                        transition={{ duration: 2 }}
                    >
                    <Image className='absolute top-0 right-0' src={'/assets/images/landing/landingProfileTop.png'}
                        width={190}
                        height={400}
                        alt='smaple visting card profile'
                        priority
                    />
                    </motion.div>
                    <motion.div 
                        initial={{ x: -50 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 2 }}
                   
                        className='absolute top-[100px] -left-[85px] '
                    >
                    <Image src={'/assets/images/landing/CardDark.png'} width={135} height={117} alt='sample nfc visting card' quality={100} />
                    </motion.div>
                    
                    
                </div>
                <motion.div
                    initial={{ y: 70 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 2 }}
                    className=' z-40 mt-[-5px]'

                >
                    <Image src={'/assets/images/landing/phone2.png'}
                        width={190}
                        height={425}
                        alt='sample visting card profile reflection'
                        quality={100}
                    />
                </motion.div>
            </div>
        </div>

    )
}

export default Hero

