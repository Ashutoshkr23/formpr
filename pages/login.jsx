import React, { useState, useEffect } from 'react';
import { signIn, useSession, getSession } from 'next-auth/react';
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

  const handleGoogleSignin = () => {
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

  const [counter, setCounter] = useState({ days: '00', hours: '00', minutes: '00' });

  useEffect(() => {
    // Calculate remaining time here
    const targetDate = new Date('2023-06-09T19:00:00');
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    // Update counter values
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    setCounter({
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0')
    });

    // Update counter every minute
    const interval = setInterval(() => {
      const newCurrentDate = new Date();
      const newRemainingTime = targetDate - newCurrentDate;

      const newDays = Math.floor(newRemainingTime / (1000 * 60 * 60 * 24));
      const newHours = Math.floor((newRemainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const newMinutes = Math.floor((newRemainingTime % (1000 * 60 * 60)) / (1000 * 60));

      setCounter({
        days: newDays.toString().padStart(2, '0'),
        hours: newHours.toString().padStart(2, '0'),
        minutes: newMinutes.toString().padStart(2, '0')
      });
    }, 60000); // 1 minute

    return () => {
      clearInterval(interval);
    };
  }, []);
  const Counter = parseInt(counter.days) > 0 || parseInt(counter.hours) > 0 || parseInt(counter.minutes) > 0;

  return (
    <div className='flex flex-col  lg:flex-row  pb-[100px] md:pb-[150px] '>

      <div className='lg:w-3/5 w-full bg-yellow-100 pt-8 lg:h-full  '>
        <div className=' hidden sm:block xl:pl-[114px] lg:pl-[50px] sm:pl-[100px] '>
        <Image src={"/assets/images/landing/loops.png"} alt='loop' width={74} height={32} />

        </div>
        {/* <div className='  sm:hidden pt-8 pl-[50px] '>
          <Image src={"/assets/images/landing/loops.png"} alt='loop' width={50} height={22} />

        </div> */}

        <div className='flex flex-col items-center pt-[90px] sm:pt-16'>
        <div className='lg:max-w-[435px] mobile:w-[250px] sm:w-[400px] text-center'>
          <h2>Welcome to the Loop.</h2>
        </div>
        <div className='pt-12 text-[14px]'>
  <p>Enter your email</p>
        </div>
        <div className='flex flex-col items-center'>
        <form className=' flex flex-col items-center mt-8' onSubmit={handleSubmit} >
                  <div className={`flex flex-col mobile:w-[250px] sm:w-[389px]  h-8 `}>
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
                      <button type='submit' className="bg-black w-[120px] sm:w-[165px] h-10  text-white font-bold rounded-[10px] ">
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
              <div className='mt-[60px] mb-0 relative items-center flex  space-x-4 rounded-[10px] h-[72px] xl:h-[101px] w-[310px] mobile:w-[342px] sm:w-[450px] lg:w-[400px] xl:w-[582px] bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] '>
<div className='xl:pl-[100px] pl-[30px] sm:pl-[90px]  lg:pl-[50px]'>
<h4 className='xl:text-[36px] sm:text-[24px] mobile:text-[18px] text-[14px] font-bold'>100+</h4>
</div>
<div className=''>
  <p className='xl:text-[14px] md:text-[12px] text-[10px]  leading-[186%]'>Total preorders received!</p>
</div>
<div className='hidden xl:block absolute right-10 bottom-5'>
  <Image src={'/assets/images/landing/logincard.png'}
  height={106}
  width={147}
  alt='card'
  quality={100}/>
</div>
<div className='hidden mobile:block xl:hidden absolute right-2 bottom-5'>
  <Image src={'/assets/images/landing/logincard.png'}
  height={90}
  width={120}
  alt='card'
  quality={100}/>
</div>
<div className='mobile:hidden absolute right-5 bottom-7'>
  <Image src={'/assets/images/landing/logincard.png'}
  height={60}
  width={90}
  alt='card'
  quality={100}/>
</div>
              </div>
        </div>
        </div>
      </div>
          <div className='lg:w-2/5 w-full mt-11 lg:mt-0  bg-[#090909]  '>
           <div className='sm:pt-[140px] pt-11  flex flex-col  items-center h-[307px] sm:h-[500px] h- lg:h-screen'>
            
            <div className=' text-transparent bg-gradient-to-br from-[#FDFF96] to-[#96FFAD] bg-clip-text'>
              <h4 className='text-[20px] sm:text-[32px] md:text-[36px] font-bold leading-[186%]'>Taking orders in 
             </h4>
            </div>

      {Counter && (     <div className=' pt-14  max-w-[286px]  flex justify-center space-x-5 sm:space-x-8 text-white'> 
            <div className='flex flex-col  '>
              <h1>{counter.days} </h1>
              <p className='sm:text-[16px] text-sm pl-4'>Days</p>
            </div>
            <div><h1>|</h1></div>
            <div className='flex flex-col  '>
              <h1>{counter.hours} </h1>
              <p className='sm:text-[16px] text-sm pl-2'>Hours</p>

            </div>
            <div><h1>|</h1></div>

            <div className='flex flex-col  '>
              <h1>{counter.minutes} </h1>
              <p className='sm:text-[16px] text-sm pl-2'>Minutes</p>

            </div>

          </div>)} 

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

