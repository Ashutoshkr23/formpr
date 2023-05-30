import Image from 'next/image'
import React from 'react'
import ProductComp from './ProductComp';
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
                        <h6>Products</h6>
                    </div>
                        <h2 >Step into the Loop</h2>
                </div>
                <div className='hidden xl:block'>
                    <div className='flex  justify-center pt-[92px]'>
                        <ProductComp
                            text={"Loop Lite"}
                            img={"/assets/images/landing/LiteCard.png"}
                        />
                        <ProductComp
                            text={"Loop Elevate "}
                            img={"/assets/images/landing/ElevateCard.png"}
                        />
                        <ProductComp
                            text={"Loop Supreme"}
                            img={"/assets/images/landing/SupremeCard.png"}
                        />
                    </div>
                </div>
                <div className='hidden md:block xl:hidden max-w-[800px] px-4 mx-auto'>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={0} slidesPerView={2} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[364px]' >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/LiteCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/ElevateCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/SupremeCard.png"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className=' md:hidden'>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={1} centeredSlides={true} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[364px]' >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/LiteCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/ElevateCard.png"}
                            />
                        </SwiperSlide>
                        <SwiperSlide >
                            <ProductComp
                                text={"Loop Lite"}
                                img={"/assets/images/landing/SupremeCard.png"}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                
            </div>
        </div>
    )
}

export default Products