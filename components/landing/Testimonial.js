import React, { useState } from 'react';
import TestimonialComp from './TestimonialComp'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Testimonial = () => {

    return (
        <div className="relative overflow-hidden w-full">
            <div className='hidden lg:block text-center '>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={30} slidesPerView={3} navigation pagination={{ clickable: true }} >
                    <SwiperSlide className='w-1/4 max-w-[364px]' >
                        <TestimonialComp
                            img={"/Vineet.png"}
                            feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                            name={"Vineet Singhal"}
                            designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Sachit.png"}
                            feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                            name={"Sachit Dedhia"}
                            designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Rikshit.png"}
                            feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                            name={"Rikshit Kotian"}
                            designation={"Director - Business Development, Verraton Health Private Limited"} />

                    </SwiperSlide>
                </Swiper>
            </div>

            {/*Mobiles*/}
            <div className="hidden md:block lg:hidden">
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={20} slidesPerView={2} navigation pagination={{ clickable: true }} >
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Vineet.png"}
                            feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                            name={"Vineet Singhal"}
                            designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Sachit.png"}
                            feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                            name={"Sachit Dedhia"}
                            designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Rikshit.png"}
                            feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                            name={"Rikshit Kotian"}
                            designation={"Director - Business Development, Verraton Health Private Limited"} />

                    </SwiperSlide>
                </Swiper>
            </div>
            {/*Mobiles*/}
            <div className='md:hidden text-center'>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={50} slidesPerView={1} centeredSlides={true} navigation pagination={{ clickable: true }} >
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Vineet.png"}
                            feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                            name={"Vineet Singhal"}
                            designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Sachit.png"}
                            feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                            name={"Sachit Dedhia"}
                            designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                    </SwiperSlide>
                    <SwiperSlide >
                        <TestimonialComp
                            img={"/Rikshit.png"}
                            feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                            name={"Rikshit Kotian"}
                            designation={"Director - Business Development, Verraton Health Private Limited"} />

                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
export default Testimonial;







