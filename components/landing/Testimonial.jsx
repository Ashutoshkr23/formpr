import React, { useState } from 'react';
import TestimonialComp from './TestimonialComp'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Testimonial = () => {

    return (
        <div className=' max-w-[1208px] mx-auto'>
            <div className="relative overflow-hidden w-full">
                <div className='text-center mt-20'>
                    <h6>Voices from the Loop</h6>
                    <h2 className=' mt-2 '>Our Testimonials</h2>
                </div>
                <div className='hidden xl:block text-center mt-24 lg:mt-64 '>
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={30} slidesPerView={3} centeredSlides={true} navigation pagination={{ clickable: true }} >
                        <SwiperSlide className='w-1/4 max-w-[340px] ml-6' >
                            <TestimonialComp
                                img={"/assets/images/landing/Vineet.png"}
                                feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                                name={"Vineet Singhal"}
                                designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                        </SwiperSlide>
                        <SwiperSlide className='w-1/4 max-w-[340px]'>
                            <TestimonialComp
                                img={"/assets/images/landing/Sachit.png"}
                                feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                                name={"Sachit Dedhia"}
                                designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                        </SwiperSlide>
                        <SwiperSlide className='w-1/4 max-w-[340px] mb-16'>
                            <TestimonialComp
                                img={"/assets/images/landing/Rikshit.png"}
                                feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                                name={"Rikshit Kotian"}
                                designation={"Director - Business Development, Verraton Health Private Limited"} />

                        </SwiperSlide>
                    </Swiper>
                </div>

                {/*Mobiles*/}
                <div className="hidden md:block xl:hidden max-w-[768px] mx-auto">
                    <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]} spaceBetween={20} slidesPerView={2} navigation pagination={{ clickable: true }} >
                        <SwiperSlide >
                            <TestimonialComp
                                img={"/assets/images/landing/Vineet.png"}
                                feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                                name={"Vineet Singhal"}
                                designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <TestimonialComp
                                img={"/assets/images/landing/Sachit.png"}
                                feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                                name={"Sachit Dedhia"}
                                designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <TestimonialComp
                                img={"/assets/images/landing/Rikshit.png"}
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
                                img={"/assets/images/landing/Vineet.png"}
                                feedback={"We have been very impressed with their creativity, responsiveness and capabilities in the remodelling of our company logo, creatives for our website and social media. "}
                                name={"Vineet Singhal"}
                                designation={" Chief Operating Officer, SGN Nanopharma Inc."} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <TestimonialComp
                                img={"/assets/images/landing/Sachit.png"}
                                feedback={"The Bravas team is dynamic and is not only supportive but also understands the pulse of our business & industry very well. The followers on our page have increased to over 500+ in less than 5 months."}
                                name={"Sachit Dedhia"}
                                designation={"Managing Director, Velocity Global Logistics Pvt. Ltd (India-China-Spain)"} />
                        </SwiperSlide>
                        <SwiperSlide >
                            <TestimonialComp
                                img={"/assets/images/landing/Rikshit.png"}
                                feedback={"As a start-up, it's great to have someone like the Bravas Digital Team to rely on our marketing efforts. They have a wonderful team of experts taking care of all the different aspects of marketing."}
                                name={"Rikshit Kotian"}
                                designation={"Director - Business Development, Verraton Health Private Limited"} />

                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>

    )
}
export default Testimonial;







