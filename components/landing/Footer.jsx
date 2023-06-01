import Landing from '@/pages'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='md:mt-[304px] mt-[100px]'>
        <div className='hidden md:block'>
        <div className=' h-[262px] min-w-full bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] flex justify-around items-center'>
            <div className='hidden lg:block '>
                <Image src={"/assets/images/landing/footerloop.svg"} height={81} width={186} alt='loop' />

            </div>
            <div className='lg:hidden '>
                <Image src={"/assets/images/landing/footerloop.svg"} height={81} width={156} alt='loop' />

            </div>

            <div className='flex gap-x-8'>
                <div className='flex flex-col gap-y-7 '>
                <div>
               <p className='text-[14px] font-bold'>privacy policy</p>
                </div>
                <div className='flex space-x-5  items-center justify-center'>
                    <div>
                    <a href="https://instagram.com/loop.card?igshid=NTc4MTIwNjQ2YQ==">
                        <Image src={'/assets/images/landing/footerinsta.png'} height={32} width={32} alt='instagram'/>
                   </a>
                    </div>
                    <div>
                    <a href="#">
                    <Image src={'/assets/images/landing/footerlink.png'} height={32} width={32} alt='instagram'/>
                    </a>
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
                    <div className=' text-[16px] leading-[154%]'>
                        <p> gm@alphamintlabs.com</p>
                    </div>

                </div>

            </div>

        </div>

        </div>

        <div className='md:hidden min-w-full bg-gradient-to-tr from-[#66D3E1] to-[#FDFF96] h-[365px]'>
            <div className='flex flex-col justify-center items-center'>
                <div className='pt-9'>
               <Image src={"/assets/images/landing/footerloop.svg"} height={46} width={106} alt="loop" />

                </div>
                <div className=' pt-10 font-bold'>
                <p>privacy policy</p>
                </div>
                <div className=' pt-[30px] font-bold'>
                 <p>terms and conditions</p>
                </div>
                <div className=' pt-[30px] font-bold'>
                 <p>contact us </p>
                </div>
                <div className=' pt-2'>
                 <p> gm@alphamintlabs.com </p>
                </div>

               <div className='flex  pt-8 space-x-7'>
                <div>
                <a href="https://instagram.com/loop.card?igshid=NTc4MTIwNjQ2YQ==">
    <Image src="/assets/images/landing/footerinsta.png" height={32} width={32} alt="instagram" />
  </a>
                </div>
                <div>
                <a href="#">
                <Image src={'/assets/images/landing/footerlink.png'} height={32} width={32} alt='instagram'/>
              </a>
                </div>

               </div>

            </div>

        </div>
    </div>
  )
}

export default Footer