import React, { useState,useEffect } from 'react';
import { signIn, useSession,getSession } from 'next-auth/react';
import Link from 'next/link';
import Card from '@/components/Card';
import LoginNav from '@/components/landing/LandingNav';
import Image from 'next/image';



function Login() {
  const [modalMessage, setModalMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleGoogleSignin =  () => {
    signIn('google', { callbackUrl: '/dashboard' });

  
  
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return false;

    const response = await signIn('email', {
      email,
      redirect: false,
      callbackUrl: '/dashboard',
    });

    if (response.error) {
      console.error('Error sending link:', response.error);
    } else {
      console.log('Magic link sent');
      setModalMessage('Link sent in your email.');
      setIsModalVisible(true);
    }
  };


  //counter start

  const [counter, setCounter] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    // Calculate remaining time here
    const targetDate = new Date('2023-06-5');
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    // Update counter values
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    setCounter({ days, hours, minutes });

    // Update counter every minute
    const interval = setInterval(() => {
      const newCurrentDate = new Date();
      const newRemainingTime = targetDate - newCurrentDate;

      const newDays = Math.floor(newRemainingTime / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((newRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutes = Math.floor((newRemainingTime % (1000 * 60 * 60)) / (1000 * 60));

      setCounter({ days: newDays, hours: newHours, minutes: newMinutes });
    }, 60000); // 1 minute

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-between xl:justify-center '>

      <div className='lg:max-w-[766px] xl:w-[766px]  h-[793px]   '>
        <div className='pt-8 lg:pl-[30px] xl:pl-[114px] '>
        <Image src={"/assets/images/landing/loop.svg"} alt='loop' width={74} height={32} />

        </div>
        <div className='flex flex-col items-center pt-16'>
        <div className='lg:max-w-[435px] text-center'>
          <h2>Welcome to the Loop.</h2>
        </div>
        <div className='pt-12 text-[14px]'>
  <p>Enter your email</p>
        </div>
        <div className='flex flex-col items-center'>
        <form className=' flex flex-col items-center mt-8' onSubmit={handleSubmit} >
                  <div className={`flex flex-col w-[389px] h-8 `}>
                      <input
                          type="email"
                          name='email'
                          placeholder='Email '
                          className='w-full h-full text-black rounded-[10px] border outline-none px-4'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                      
                  </div>
                  <div className=" mt-7 text-[16px]  ">
                      <button type='submit' className="bg-black w-[165px] h-10  text-white font-bold rounded-[10px] ">
                          Sign In
                      </button>
                  </div>
                  
              </form>
              <div className='text-[12px] pt-7'>
                <p>Or</p>
              </div>
              <div onClick={handleGoogleSignin} className='flex items-center pt-7 space-x-4 cursor-pointer'>
                <div>
             <p className='text-[14px] leading-[186%]'>Sign in with</p>
                </div>
            <div>
              <Image src={'/assets/images/landing/googlesign.png'}
              alt='google'
              height={40}
              width={39}
              />
            </div>
              </div>
              <div className='mt-[60px] relative items-center flex  space-x-4 rounded-[10px] h-[101px] w-[582px] lg:w-[400px] xl:w-[582px] bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] '>
<div className='xl:pl-[100px] sm:pl-[100px] md-[50px]'>
<h4 className='xl:text-[36px] text-[24px] font-bold'>100+</h4>
</div>
<div className=''>
  <p className='xl:text-[14px] lg:text-[12px] leading-[186%]'>Total preorders received!</p>
</div>
<div className='hidden xl:block absolute right-10 bottom-5'>
  <Image src={'/assets/images/landing/logincard.png'}
  height={106}
  width={147}
  alt='card'
  quality={100}/>
</div>
<div className='xl:hidden absolute right-5 bottom-7'>
  <Image src={'/assets/images/landing/logincard.png'}
  height={90}
  width={120}
  alt='card'
  quality={100}/>
</div>
              </div>
        </div>
        </div>
      </div>
          <div className='hidden sm:block'>
           <div className='relative  bg-[#090909] w-[563px] xl-w-[674px] h-[793px] flex  justify-center  '>
            <div className=' absolute bottom-0 '>
              <Image src={'/assets/images/landing/logphone.png'}
              alt='phone'
              width={563}
              height={638}
              quality={100}/>

            </div>
            <div className='pt-[150px] z-10 text-transparent bg-gradient-to-br from-[#FDFF96] to-[#96FFAD] bg-clip-text'>
              <h4 className='xl:text-[36px] text-[28px] md:text-[32px] lg:text-[28px] font-bold leading-[186%]'>Taking orders in 
             </h4>
            </div>

            <div className='absolute top-[280px]  flex  space-x-8  text-white'> 
            <div className='flex flex-col  '>
              <h1>{counter.days} </h1>
              <p className='text-[16px]'>Days</p>
            </div>
            <div><h1>|</h1></div>
            <div className='flex flex-col  '>
              <h1>{counter.hours} </h1>
              <p className='text-[16px]'>Hours</p>

            </div>
            <div><h1>|</h1></div>

            <div className='flex flex-col  '>
              <h1>{counter.minutes} </h1>
              <p className='text-[16px]'>Minutes</p>

            </div>

            </div>

           </div>
           </div>
           {/* modal open when email is sent */}
    {isModalVisible && (
                  <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                          <div
                              className="fixed inset-0 transition-opacity"
                              aria-hidden="true"
                              onClick={closeModal}
                          >
                              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                          </div>
                          <div
                              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="modal-headline"
                          >
                              <div>
                                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                      {modalMessage}
                                  </h3>
                                  <button
                                      type="button"
                                      className="bg-black text-white px-4 py-2 rounded-md"
                                      onClick={closeModal}
                                  >
                                      Close
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              )} 
    </div> 
  )
}

export default Login

