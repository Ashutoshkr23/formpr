import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signIn, useSession, getSession } from 'next-auth/react';

const LoginNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGoogleSignin = () => {
    signIn('google', { callbackUrl: '/' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex h-[95px] lg:mx-[114px] sm:mx-[50px] mx-[15px]'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <Image src={"/assets/images/loop.svg"} alt='loop' width={74} height={32} />
        </div>
        <div className='hidden md:flex'>
          <div className='flex gap-7 text-[14px] items-center '>
           
            <div className='hover:font-bold'>
              <Link href={'#'}>Products</Link>
            </div>
            <div className='hover:font-bold'>
              <Link href={'#'}>Our Story</Link>
            </div>
            <div className='hover:font-bold'>
              <Link href={'#'}>Testimonials</Link>
            </div>
            <div className='hover:font-bold'>
              <Link href={'#'}>FAQ</Link>
            </div>
            <div className='hover:font-bold'>
              <Link href={'#'}>Contact</Link>
            </div>
          </div>
          <div>
            <button
              onClick={handleGoogleSignin}
              className='w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] ml-[70px] text-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]'
            >
              LOG IN
            </button>
          </div>
        </div>
        <div className='md:hidden'>
          <div className='flex items-center' onClick={toggleMenu}>
            <Image src={"/assets/images/nav.svg"} width={34} height={20} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='flex flex-col gap-1 text-center text-[14px]'>
            <div>
              <Link href={'#'}>Benefits</Link>
            </div>
            <div>
              <Link href={'#'}>Products</Link>
            </div>
            <div>
              <Link href={'#'}>Our Story</Link>
            </div>
            <div>
              <Link href={'#'}>Testimonials</Link>
            </div>
            <div>
              <Link href={'#'}>FAQ</Link>
            </div>
            <div>
            <button
              onClick={handleGoogleSignin}
              className='w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] text-center'
            >
              LOG IN
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginNav;


