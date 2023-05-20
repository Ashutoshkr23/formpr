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
    <div className='flex h-[95px] lg:mx-[114px] md:mx-[30px] mx-[15px]'>
      <div className='flex justify-between items-center w-full'>
        <div>
          <Image src={"/assets/images/loop.svg"} alt='loop' width={74} height={32} />
        </div>
        <div className='hidden md:flex'>
          <div className='flex gap-7 text-[14px] items-center'>
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
          </div>
          <div>
            <button
              onClick={handleGoogleSignin}
              className='w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] ml-[70px] text-center'
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
          <div className='flex flex-col gap-1 text-[14px] items-center '>
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
            <button
              onClick={handleGoogleSignin}
              className='w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] text-center'
            >
              LOG IN
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginNav;




// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { signIn, useSession, getSession } from 'next-auth/react';
// import { useState } from 'react';

// const LoginNav = () => {
//   const handleGoogleSignin = () => {
//     signIn('google', { callbackUrl: '/' });
//   };
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleToggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }
//   return (
//     <div className='flex h-[95px] lg:px-[114px]'>
//       <div className='flex justify-between items-center w-full'>
//         <div>
//           <Image src={"/assets/images/loop.svg"} alt='loop' width={74} height={32} />
//         </div>
//         <div className='flex items-center space-x-4'>
//           <div className={`hidden md:flex gap-7 items-center ${isMenuOpen ? 'hidden' : ''}`}>
//             <div className='text-[14px]'>
//               <Link href={'#'}>Benefits</Link>
//             </div>
//             <div className='text-[14px]'>
//               <Link href={'#'}>Products</Link>
//             </div>
//             <div className='text-[14px]'>
//               <Link href={'#'}>Our Story</Link>
//             </div>
//             <div className='text-[14px] '>
//               <Link href={'#'}>Testimonials</Link>
//             </div>
//             <div className='text-[14px] '>
//               <Link href={'#'}>FAQ</Link>
//             </div>
//           </div>
//           <div className={`flex items-center space-x-2`}>
//             <button
//               onClick={handleGoogleSignin}
//               className='hidden sm:inline-block w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] text-center'
//             >
//               LOG IN
//             </button>
//             <button
//               onClick={handleToggleMenu}
//               className='w-[40px] h-[40px] bg-black text-white rounded-full flex items-center justify-center sm:hidden'
//             >
//               {/* Here you can use an icon or any other suitable element for the collapse button */}
//               {isMenuOpen ? 'X' : '☰'}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`lg:hidden ${isMenuOpen ? '' : 'hidden'}`}>
//         <div className='flex flex-col items-center space-y-4'>
//           <div className='text-[14px]'>
//             <Link href={'#'}>Benefits</Link>
//           </div>
//           <div className='text-[14px]'>
//             <Link href={'#'}>Products</Link>
//           </div>
//           <div className='text-[14px]'>
//             <Link href={'#'}>Our Story</Link>
//           </div>
//           <div className='text-[14px]'>
//             <Link href={'#'}>Testimonials</Link>
//           </div>
//           <div className='text-[14px]'>
//             <Link href={'#'}>FAQ</Link>
//           </div>
//           <button
//             onClick={handleGoogleSignin}
//             className='w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] text-center'
//           >
//             LOG IN
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginNav;