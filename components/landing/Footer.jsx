import Landing from '@/pages'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-[230px]'>
        <div className='h-[262px] min-w-full bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] flex justify-around items-center'>
            <div className='hidden lg:block'>
                <Image src={"/assets/images/landing/footerloop.svg"} height={81} width={186} />

            </div>
            <div className='lg:hidden '>
                <Image src={"/assets/images/landing/footerloop.svg"} height={81} width={156} />

            </div>

            <div className='flex gap-x-8'>
                <div className='flex flex-col gap-y-7 '>
                <div>
               <p className='text-[14px] font-bold'>privacy policy</p>
                </div>
                <div className='flex space-x-5  items-center justify-center'>
                    <div>
                        <Image src={'/assets/images/landing/footerinsta.png'} height={32} width={32} alt='instagram'/>
                    </div>
                    <div>
                    <Image src={'/assets/images/landing/footerlink.png'} height={32} width={32} alt='instagram'/>

                    </div>

                </div>


                </div>
                <div>
                <p className='text-[14px] font-bold'>terms and conditions</p>

                </div>

            </div>

            <div>
                <div className='flex flex-col gap-y-7'>
                    <div className='text-[14px] font-bold'>
                        <p>contact us </p>
                    </div>
                    <div className=' text-[12px] leading-[154%]'>
                        <p> gm@alphamintlabs.com</p>
                    </div>

                </div>

            </div>

        </div>


    </div>
  )
}

export default Footer