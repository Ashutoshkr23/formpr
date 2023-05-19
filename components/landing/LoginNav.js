import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession, getSession } from 'next-auth/react';

const LoginNav = () => {
  const handleGoogleSignin = () => {
    signIn('google', { callbackUrl: '/' });



  };
  return (
    <div className='flex h-[95px] px-[114px] '>
      <div className='flex justify-between items-center w-full'>
        <div >
          <Image src={"/assets/images/loop.svg"}
            alt='loop'
            width={74}
            height={32}
          />
        </div>
        <div className='flex '>
          <div className='flex gap-2 items-center'>
            <div className='text-[14px]'>
              <Link href={'#'}>Story</Link>
            </div>
            <div className='text-[14px] ml-9'>
              <Link href={'#'}>Testimonials</Link>


            </div>
            <div className='text-[14px] ml-8'>
              <Link href={'#'}> FAQ</Link>
            </div></div>
          <div>        <button onClick={handleGoogleSignin} className=' w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] ml-[70px] text-center'>LOG IN</button></div>
        </div>
      </div>

    </div>
  )
}

export default LoginNav