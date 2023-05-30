import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoopCardComp from './LoopCardComp';

const LoopCards = () => {
    return (
        <div className='pt-[5px] '>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-center '>

                    <div className=' text-[30px] font-bold'>
                        <h1 >Step into the Loop</h1>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex  justify-center pt-[52px]'>
                        <LoopCardComp
                            text={"Loop Lite"}
                            img={"/assets/images/LiteCard.png"}
                        />
                        <LoopCardComp
                            text={"Loop Elevate "}
                            img={"/assets/images/ElevateCard.png"}
                        />
                        <LoopCardComp
                            text={"Loop Supreme"}
                            img={"/assets/images/SupremeCard.png"}
                        />
                    </div>
                </div>
                <div className='hidden md:block lg:hidden'>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={30} slidesPerView={2} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[364px]' >
                            <LoopCardComp
                                text={"Loop Lite"}
                                img={"/assets/images/LiteCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <LoopCardComp
                                text={"Loop Lite"}
                                img={"/assets/images/ElevateCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <LoopCardComp
                                text={"Loop Lite"}
                                img={"/assets/images/SupremeCard.png"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className=' md:hidden'>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[364px]' >
                            <LoopCardComp
                                text={"Loop Lite"}
                                img={"/assets/images/LiteCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <LoopCardComp
                                text={"Loop Lite"}
                                img={"/assets/images/ElevateCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <LoopCardComp
                                text={"Loop Lite"}
                                img={"/assets/images/SupremeCard.png"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </div>
    )
}

export default LoopCards