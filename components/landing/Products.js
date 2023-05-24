import Image from 'next/image'
import React from 'react'
import ProductComp from './ProductComp'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products = () => {
    return (
        <div className='pt-[194px] '>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-center items-center '>
                    <div>
                        <h4 >Products</h4>
                    </div>
                    <div className=' text-[50px] font-bold'>
                        <h1 >Step into the Loop</h1>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex  justify-center pt-[92px]'>
                        <ProductComp
                            text={"Loop Lite"}
                            img={"/assets/images/LiteCard.png"}
                        />
                        <ProductComp
                            text={"Loop Lite"}
                            img={"/assets/images/ElevateCard.png"}
                        />
                        <ProductComp
                            text={"Loop Lite"}
                            img={"/assets/images/SupremeCard.png"}
                        />
                    </div>
                </div>
                <div className='hidden md:block lg:hidden'>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={30} slidesPerView={2} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[364px]' >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/LiteCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/ElevateCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/SupremeCard.png"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className=' md:hidden'>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={30} slidesPerView={1} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[364px]' >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/LiteCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/ElevateCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
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

export default Products