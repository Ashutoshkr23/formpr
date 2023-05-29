import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (
    <div className='mt-[296px] sm:px-8 md:px-16 lg:px-4 xl:px-0 max-w-[1208px] mx-auto'>

      <div className='relative hidden lg:block mx-auto max-w-[1212px] h-[428px] bg-[#090909] rounded-[20px] '>

        <div className='text-[#596573] pl-[405px] pt-[46px] pr-[28px]'>
          <h2>The Loop Journey</h2>
        </div>
        <div className='text-white pl-[405px] pr-[28px]'>
          <h2 className='text-[48px] font-bold'>Our Story </h2>
        </div>
        <div className='pt-8 pl-[424px] pr-[120px] xl:pr-[225px] text-[20px]'>
          <h2 className=' font-bold'><span className='text-transparent bg-gradient-to-br from-[#FDFF96] to-[#F16869] bg-clip-text xl:leading-[186%]'>At Loop, we&apos;re passionate about making networking effortless </span><span className='text-transparent bg-gradient-to-tr from-[#FDFF96] to-[#F16869] bg-clip-text'>and eco-friendly.  </span></h2>
        </div>

        <div className='xl:pt-[33px] pt-6 text-white pl-[405px] pr-[90px] xl:pr-[134px] xl:leading-[186%]'><p className='text-14 '></p>Our team of experts has worked tirelessly to design the perfect solution that saves you time and resources while giving you an edge in your networking game. We believe that first impressions matter, and that&apos;s why we&apos;ve created a product that&apos;s both classy and luxurious. </div>


        <div className=' absolute left-[51px] bottom-0'>
          <Image src={'/assets/images/storyphone.png'}
            alt='storyPhone'
            width={270}
            height={516} />

        </div>
      </div>

      {/* mobile */}
      <div className='lg:hidden  flex justify-center items-center mx-auto '>
        <div className='relative  max-w-[345px] h-[536px] bg-black pl-5 rounded-[15px]'>

          <div className='absolute left-0 -top-[81px] '>
            <Image src={'/assets/images/storyph2.png'}
              alt='storyPhone'
              width={345}
              height={252} />
          </div>
          <div className='flex flex-col pl-5 pt-[210px]'>
            <div className='text-[#596573] '>
              <h2 className='text-[12px]'>The Loop Journey</h2>
            </div>
            <div className='text-white font-bold '>
              <h2 className='text-[30px]'>Our Story  </h2>
            </div>

            <div className='text-white pr-8 pt-7 '><p className='text-[14px] font-bold'><span className='text-transparent bg-gradient-to-br from-[#FDFF96] to-[#F16869] bg-clip-text'>At Loop, we&apos;re passionate about making </span>
              <span className='text-transparent bg-gradient-to-br from-[#FDFF96] to-[#F16869] bg-clip-text'>networking effortless and eco-friendly. </span> </p></div>

            <div className='pt-7 pr-6 pb-[31px] text-white text-[12px] leading-[186%]'>
              <p className=''> Our team of experts has worked tirelessly to design the perfect solution that saves you time and resources while giving you an edge in your networking game. We believe that first impressions matter, and that&apos;s why we&apos;ve created a product that&apos;s both classy and luxurious. </p>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Story