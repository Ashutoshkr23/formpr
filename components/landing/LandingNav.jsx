
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { signIn, useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';



function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [date, setDate] = useState();
  const router = useRouter();

  function getYear() {
    setDate(new Date().getFullYear());
  }

  useEffect(() => {
    getYear();
  }, [])

  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
    }
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const handleGoogleSignin = () => {
  //   signIn('google', { callbackUrl: '/dashboard' });
  // };
  const handlelogin =()=>{
    router.push('/login');

  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <div>
      {/*Laptop */}
      <div className='hidden bg-dark lg:block'>
        <div className='navbar  '>
          <div className=' mx-auto   my-auto h-20 flex content-center justify-between items-center' >
            <Image src={"/assets/images/loop.svg"} alt='loop' width={74} height={32} />
            <div className='flex content-center'>
              <ul className="flex content-center gap-8 my-auto ">
                <li className=" text-sm px-1.5 font-extralight hover:font-bold "><a href={`#`}>Products</a></li>
                <li className=" text-sm px-1.5 font-extralight hover:font-bold "><a href="#">Our Story</a></li>
                <li className=" text-sm px-1.5 font-extralight hover:font-bold "><a href="#">Testimonials</a></li>
                <li className=" text-sm px-1.5 font-extralight hover:font-bold "><a href="#">FAQ</a></li>
                <li className=" text-sm px-1.5 font-extralight hover:font-bold  "><a href="#">Contact</a></li>
              </ul>
              <button
                onClick={handlelogin}
                className='w-[165px] h-[41px] bg-black text-white text-[16px] font-bold rounded-[10px] ml-[70px] text-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]'
              >
                LOG IN
              </button>
            </div>
          </div>

        </div>
      </div>
      {/*Mobiles*/}
      <div className='lg:hidden '>
        <nav className="bg-dark px-2  sm:px-4 py-2.5  fixed w-full z-50 top-0 left-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <Image src={"/assets/images/loop.svg"} alt='loop' width={50} height={22} />

            </a>
            <div className="flex ">
              <button
                onClick={handlelogin}
                className='w-28 h-10 bg-black text-white text-sm mr-4 my-auto font-bold rounded-[10px] text-center'
              >
                LOG IN
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button" className="inline-flex relative z-[100] items-center ">
                <div className='  h-3.5 w-5'>
                  <div
                    className={` h-0.5 bg-black w-5 origin-top-left ease-in duration-200 rounded-md ${isOpen ? 'rotate-45 translate-x-px' : 'rotate-0'}`}
                  />
                  <div
                    className={` h-0.5 w-5 bg-black ease-in duration-200 rounded-md mt-1 ${isOpen ? 'hidden' : 'block'}`}
                  />
                  <div
                    className={` h-0.5 w-5 bg-black ease-in duration-200  rounded-md mt-1  ${isOpen ? '-rotate-45 -translate-x-0.5 ' : 'rotate-0 '}`}
                  />
                </div>
              </button>
              {isOpen && (
                <AnimatePresence>
                  <motion.div variants={fadeIn} initial="initial" whileInView="animate" exit="exit" viewport={{ once: false }} className="absolute ease-in duration-800  w-full h-screen top-0 right-0 border-black border-8 bg-dark shadow-lg bg-white text-black z-50">
                    <div className='flex flex-col h-full  content-between'>
                      <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container  py-2  border-b-2 border-white ">
                          <a href="#" className="nav-link ">Products</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white">
                          <a href="#" className="nav-link ">Our Story</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                          <a href="#" className="nav-link ">Testimonials</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container py-4  border-b-2 border-white ">
                          <a href="#" className="nav-link ">FAQ</a>
                        </div>
                        <div onClick={() => setIsOpen(!isOpen)} className="nav-link-container  border-b-2 border-white py-4   ">
                          <a href="#" className="nav-link ">Contact</a>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default LandingNavbar


