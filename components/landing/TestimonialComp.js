import React from 'react'

function TestimonialComp({ feedback, img, name, designation }) {
    return (
        <div>
            {/*Laptop */}
            <div className='hidden  lg:block'>
                <div className='relative drop-shadow-white inline-block px-7 w-full h-[437px]  mt-16 bg-white rounded-[20px]'>
                    <img src={img} alt="" className='absolute inset-x-0 mx-auto bottom-[115px] z-10' />
                    <div className=' pt-7 '>
                        <p className='text-sm  text-left font-bold leading-[1.4rem]'>{feedback}</p>
                    </div>
                    <div className='bg-black rounded-[20px] h-[186px] absolute bottom-0 inset-x-0'>
                        <h1 className='mt-24 text-white text-center text-lg font-bold'>{name}</h1>
                        <p className='text-[#898989] text-center text-sm font-light px-8'>{designation}</p>
                    </div>
                </div>
            </div>
            {/*Mobiles*/}
            <div className='lg:hidden'>
                <div className='w-full md:w-1/2 bg-slate '>
                    <div className='relative drop-shadow-white block h-[437px] w-[300px] md:w-[330px] mt-16 mx-auto md:ml-8 bg-white rounded-2xl'>
                        <img src={img} alt="" className='absolute inset-x-0 mx-auto bottom-[115px] z-10' />
                        <div className='w-full pt-7 px-auto'>
                            <p className='text-sm font-bold w-11/12 md:w-3/4 mx-auto leading-[1.4rem]'>{feedback}</p>
                        </div>
                        <div className='bg-black rounded-[16px] h-[186px] absolute bottom-0 inset-x-0'>
                            <h1 className='mt-24 text-white text-center text-lg font-bold'>{name}</h1>
                            <p className='text-[#898989] text-center text-sm font-light px-8'>{designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialComp

