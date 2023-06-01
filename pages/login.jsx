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
  return (
    <div className='  '>

      <div className='max-w-[766px] bg-white h-[793px]'>
        <div className='pt-8  lg:pl-[114px] '>
        <Image src={"/assets/images/landing/loop.svg"} alt='loop' width={74} height={32} />

        </div>
        <div className='flex flex-col items-center pt-16'>
        <div className='max-w-[435px] text-center'>
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
                          className='w-full h-full text-black rounded-[10px] border border-pink-cm outline-none px-4'
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
        </div>
        </div>
      </div>
       
           {/* <div className="flex flex-col ">
          
              
              <h1 className='h1-400 font-michroma mt-8'>Explore</h1>

               <form className='flex flex-col  mt-8' onSubmit={handleSubmit} >
                  <div className={` w-[312px] h-8`}>
                      <input
                          type="email"
                          name='email'
                          placeholder='Email or Username'
                          className='w-full h-full text-black rounded-md border border-pink-cm outline-none px-4'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>
                  <div className="input-button mt-7 flex  ">
                      <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Sign In
                      </button>
                  </div>
              </form> 
                  <p className=' h4 my-5'>Sign in With</p>
                 

                  <div className="input-button">
                          <button onClick={handleGoogleSignin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                             Sign in with Google
                          </button>
                      </div>

           </div> */}
    </div> 
  )
}

export default Login


  {/*  {isModalVisible && (
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
              )} */}