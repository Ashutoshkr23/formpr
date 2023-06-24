/* eslint-disable @next/next/no-img-element */
import { Card, HorizontalCard1, HorizontalCard2 } from '@/components';
import Image from 'next/image';
import React from 'react'

const LoopMaven = () => {
    return (
        <div className=' mt-20 mb-16 lg:mt-28 md:px-16 lg:px-4 xl:px-0 max-w-[1208px] mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <h2>Loop Maven</h2>
                <div className='my-8 sm:text-4xl text-xl xl:max-w-fit max-w-[380px] sm:px-0 px-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F78F54] to-[#FF4572] !leading-tight text-center'>
                    Your Networking Sidekick for Perfect Follow-ups
                </div>
                <div className='font-bold text-center sm:text-xl text-base max-w-[720px] sm:px-0 px-4'>
                    Introducing Loop Maven, your personal Loop assistant, effortlessly keeping track of the people you meet and ensuring timely follow-ups.
                </div>
            </div>

            {/* Desktop And Tablet */}
            <div className='hidden xl:relative xl:block xl:mt-8'>
                   <Image 
                    src = "/assets/images/landing/loopMavenBG.png"
                    alt= "background for loop maven"
                    fill= {true}
                    />
            <div className=' flex flex-col items-center space-y-12 overflow-hidden pt-12 pb-40'>
                <div className='flex flex-row items-center space-y-9 justify-center '>
                    <div className='bg-whitebg w-[526px] h-[191px] rounded-[20px] drop-shadow-white'>
                        <div className='font-bold text-2xl absolute top-4 left-8'>My Contacts</div>
                        <div className='ml-4'>
                            <div className='absolute top-[35%]'><Image width={238} height={80} src="/assets/images/landing/myContact1.png" alt="maven contacts" /></div>
                            <div className='absolute top-[35%] left-1/2'><Image width={238} height={81} src="/assets/images/landing/myContact2.png" alt="maven follow up mail" /></div>
                        </div>
                    </div>
                    <div className='bg-whitebg w-[515px] h-[138px] rounded-[20px] drop-shadow-white font-bold flex items-center px-4 gap-4 ml-4 mt-9'>
                        <div className="left-side">
                            <div><Image width={46} height={46} src="/assets/images/landing/mailIcon.png" alt="mail icon" /></div>
                        </div>
                        <div className="right-side">
                            <div className='text-xl'>Loop</div>
                            <div className='my-1'>Follow up with your recent contact</div>
                            <div className='font-normal'>You have a meeting with Priya Sharma on 19th June, 2023 at 4:15 pm.</div>
                        </div>
                    </div>
                </div>
                <div className='bg-whitebg w-[515px] h-[119px] rounded-[20px] drop-shadow-white font-bold flex items-center px-4 gap-4'>
                    <div className="left-side">
                        <div><Image width={46} height={46} src="/assets/images/landing/whatsappIcon.png" alt="whatsapp icon follow up maven" /></div>
                    </div>
                    <div className="right-side">
                        <div className='text-xl'>Loop</div>
                        <div className='font-normal mt-1'>You have scheduled a call with Mr. Vinod Patel on 2nd July, 2023.</div>
                    </div>
                </div>
                </div>
                </div>


                {/* Mobile */}
                <div className='xl:hidden relative block pb-12'>
                <Image 
                    src = "/assets/images/landing/loopMavenBG.png"
                    alt= "background for loop maven"
                    fill= {true}
                    />
                <div className='flex flex-col items-center md:space-y-6 lg:space-y-12 overflow-hidden pb-10'>
               
                <div className='flex flex-row items-center justify-center pt-12'>
               
                    <div className=' hidden md:block z-30'>
                        <Image width={450} height={98} src="/assets/images/landing/mobileMyContact1.png" alt="" /></div>
                    <div className='md:hidden block z-30'>
                    <Image width={200} height={50} src="/assets/images/landing/mobileMyContact1.png" alt="" /></div>
                    {/* <div className='bg-white sm:w-[526px] w-[345px] sm:h-[191px] h-[161px] rounded-[20px] drop-shadow-white m-auto sm:hidden block'>
                        <div className='font-bold text-2xl absolute top-4 sm:left-8 left-5'>My Contacts</div>
                        <div className='sm:ml-4 ml-2'>
                            <div className='absolute top-[35%]'><Image width={170} height={70} src="/assets/images/landing/myContact1.png" alt="" /></div>
                            <div className='absolute top-[35%] left-1/2'><Image width={170} height={70} src="/assets/images/landing/myContact2.png" alt="" /></div>
                        </div>
                    </div> */}
                    <div className='bg-whitebg md:w-96 w-48 md: lg:h-28 md:h-20 h-14 rounded-md md:rounded-xl drop-shadow-white font-bold flex items-center px-1 md:px-2 lg:px-4 gap-2 md:gap-4'>
                        <div className="left-side bg-whitebg">
                            <div className='hidden md:flex'><Image width={46} height={46} src="/assets/images/landing/mailIcon.png" alt="" /></div>
                            <div className='md:hidden flex'><Image width={23} height={23} src="/assets/images/landing/mailIcon.png" alt="" /></div>
                        </div>
                        <div className="right-side bg-whitebg">
                            <div className='text-[8px] md:text-sm lg:text-xl '>Loop</div>
                            <div className='my-1 text-[6px] md:text-xs'>Follow up with your recent contact</div>
                            <div className='font-normal text-[6px] md:text-xs'>You have a meeting with Priya Sharma on 19th June, 2023 at 4:15 pm.</div>
                        </div>
                    </div>
                </div>
                <div className='bg-whitebg md:w-80 lg:w-[475px] w-48 lg:h-28 md:h-20 h-10 rounded-md md:rounded-xl drop-shadow-white font-bold flex items-center px-1 md:px-2 lg:px-4 gap-2 md:gap-4'>
                    <div className="left-side">
                        <div className='hidden md:flex'><Image width={46} height={46} src="/assets/images/landing/whatsappIcon.png" alt="" /></div>
                        <div className='md:hidden flex'><Image width={23} height={23} src="/assets/images/landing/whatsappIcon.png" alt="" /></div>
                    </div>
                    <div className="right-side">
                        <div className='text-[8px] md:text-sm lg:text-xl '>Loop</div>
                        <div className='font-normal text-[6px] md:text-xs'>You have scheduled a call with Mr. Vinod Patel on 2nd July, 2023.</div>
                    </div>
                </div>
                </div>
                </div>
         



            <div className='hidden md:block'>
                <div className='loop-maven-info font-bold flex sm:flex-row flex-col justify-between gap-[80px] lg:px-0 px-4'>
                    <div className='text-1'>
                        With a simple tap, Loop Maven asks and records the names of your contacts in your profile on the Loop website, eliminating the risk of forgetting important connections.
                    </div>
                    <div className="text-2 max-w-[387px]">
                        But Loop Maven doesn`t stop there - it goes above and beyond by allowing you to set reminders for follow-ups, through WhatsApp and mail, keeping you organized and proactive even when you`re caught up with your busy schedule.
                    </div>
                    <div className="text-3">
                        Seamlessly manage your network and maximize opportunities with Loop, the ultimate tool for building and nurturing meaningful connections.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoopMaven