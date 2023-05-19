import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, useSession,getSession } from 'next-auth/react';

const LoginNav = () => {
  const handleGoogleSignin =  () => {
    signIn('google', { callbackUrl: '/' });

  
  
  };
  return (
    <div className='flex h-[95px] '>
<div className='ml-[114px] mt-[31px]'>
    <Image src={"/assets/images/loop.svg"} 
    alt='loop'
    width={74}
    height={32}
    
    />
</div>
<div className='flex ml-[684px] mt-[41px]'>
    <div className='text-[14px]'>
      <Link href={'#'}>Story</Link> 
    </div>
    <div className='text-[14px] ml-9'>
    <Link href={'#'}>Testimonials</Link> 

    
    </div>
    <div className='text-[14px] ml-8'>
    <Link href={'#'}> FAQ</Link> 

       
    </div>
</div>
<div>
<button onClick={handleGoogleSignin} className='mt-[29px] w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] ml-[70px] text-center'>LOG IN</button>
</div>
    </div>
  )
}

export default LoginNav