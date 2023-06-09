/* eslint-disable @next/next/no-img-element */
import { Card, HorizontalCard1, HorizontalCard2 } from '@/components';
import Image from 'next/image';
import React from 'react'

const LoopMaven = () => {
    return (
        <div className=' mt-20 mb-44 lg:mt-28 md:px-16 lg:px-4 xl:px-0 max-w-[1208px] mx-auto'>
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
            <div className='mt-[55px] sm:pb-4 pb-10 sm:pt-9 pt-0 lg:mt-[91px] lg:pt-0 flex flex-col items-center space-y-9 overflow-hidden bg-[url(/assets/images/landing/loopMavenBG.png)] bg-[length:100%_100%]'>
                <div className='sm:flex hidden xl:flex-row flex-col items-center space-y-9 lg:space-y-0 justify-center lg:space-x-16'>
                    <div className='bg-white w-[526px] h-[191px] rounded-[20px] drop-shadow-white'>
                        <div className='font-bold text-2xl absolute top-4 left-8'>My Contacts</div>
                        <div className='ml-4'>
                            <div className='absolute top-[35%]'><Image width={238} height={80} src="/assets/images/landing/myContact1.png" alt="" /></div>
                            <div className='absolute top-[35%] left-1/2'><Image width={238} height={81} src="/assets/images/landing/myContact2.png" alt="" /></div>
                        </div>
                    </div>
                    <div className='bg-white w-[515px] h-[138px] rounded-[20px] drop-shadow-white font-bold flex items-center px-4 gap-4 xl:!ml-4 !ml-0 xl:!mt-0 !mt-9'>
                        <div className="left-side">
                            <div><Image width={46} height={46} src="/assets/images/landing/mailIcon.png" alt="" /></div>
                        </div>
                        <div className="right-side">
                            <div className='text-xl'>Loop</div>
                            <div className='my-1'>Follow up with your recent contact</div>
                            <div className='font-normal'>You have a meeting with Priya Sharma on 19th June, 2023 at 4:15 pm.</div>
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[515px] h-[119px] rounded-[20px] drop-shadow-white font-bold sm:flex hidden items-center px-4 gap-4'>
                    <div className="left-side">
                        <div><Image width={46} height={46} src="/assets/images/landing/whatsappIcon.png" alt="" /></div>
                    </div>
                    <div className="right-side">
                        <div className='text-xl'>Loop</div>
                        <div className='font-normal mt-1'>You have scheduled a call with Mr. Vinod Patel on 2nd July, 2023.</div>
                    </div>
                </div>



                {/* Mobile */}
                <div>
                    <div className='bg-white sm:w-[526px] w-[345px] sm:h-[191px] h-[161px] rounded-[20px] drop-shadow-white m-auto sm:hidden block'>
                        <div className='font-bold text-2xl absolute top-4 sm:left-8 left-5'>My Contacts</div>
                        <div className='sm:ml-4 ml-2'>
                            {/* <div className='absolute top-[35%]'><Image width={170} height={70} src="/assets/images/landing/myContact1.png" alt="" /></div> */}
                            <div className='absolute top-[35%]'><img className='w-[170px] h-[70px]' src="/assets/images/landing/myContact1.png" alt="" /></div>
                            {/* <div className='absolute top-[35%] left-1/2'><Image width={170} height={70} src="/assets/images/landing/myContact2.png" alt="" /></div> */}
                            <div className='absolute top-[35%] left-1/2'><img className='w-[170px] h-[70px]' src="/assets/images/landing/myContact2.png" alt="" /></div>
                        </div>
                    </div>
                    <div className='bg-white sm:w-[515px] w-[345px] sm:h-[138px] h-[98px] rounded-[20px] drop-shadow-white font-bold sm:hidden flex items-center px-4 gap-4 xl:ml-4 !ml-0 xl:mt-0 !mt-9 m-auto'>
                        <div className="left-side">
                            <div className='min-w-[46px]'><Image width={46} height={46} src="/assets/images/landing/mailIcon.png" alt="" /></div>
                        </div>
                        <div className="right-side">
                            <div className='sm:text-xl text-sm'>Loop</div>
                            <div className='my-1 text-xs'>Follow up with your recent contact</div>
                            <div className='font-normal text-xs'>You have a meeting with Priya Sharma on 19th June, 2023 at 4:15 pm.</div>
                        </div>
                    </div>
                </div>
                <div className='bg-white sm:w-[515px] w-[345px] sm:h-[119px] h-[98px] rounded-[20px] drop-shadow-white font-bold items-center px-4 gap-4 sm:hidden flex'>
                    <div className="left-side">
                        <div className='min-w-[46px]'><Image width={46} height={46} src="/assets/images/landing/whatsappIcon.png" alt="" /></div>
                    </div>
                    <div className="right-side">
                        <div className='sm:text-xl text-base'>Loop</div>
                        <div className='font-normal mt-1 text-xs'>You have scheduled a call with Mr. Vinod Patel on 2nd July, 2023.</div>
                    </div>
                </div>
            </div>


            <div>
                <div className='loop-maven-info font-bold flex sm:flex-row flex-col justify-between gap-[80px] lg:pt-32 pt-16 lg:px-0 px-4'>
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