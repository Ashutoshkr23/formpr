import React, { useState,useEffect } from 'react';
import { signIn, useSession,getSession } from 'next-auth/react';
import Link from 'next/link';
import Card from '@/components/Card';
import LoginNav from '@/components/landing/LoginNav';



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
    <div className=' flex items-center justify-center bg-blue-200'>
        {/* <nav className='flex flex-row justify-around mt-5'>
        <div>
        
        <Link href="/">
          Get your cards
        </Link>
     
      </div>


      <div>
        
        <Link href="/">
          Information
        </Link>
     
      </div>
      <div>
        
      
                     
                  
     
      </div>

        </nav> */}
{/* <div className='my-48'>

<Card/>

</div> */}
          <div className="flex flex-col w-full lg:w-[312px]  items-center justify-center  h-screen">
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
                                      className="bg-pink-cm text-white px-4 py-2 rounded-md"
                                      onClick={closeModal}
                                  >
                                      Close
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              )}
              <div className='mt-16 w-52 h-12'>
              </div> 
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
                  <div className="input-button mt-7 flex justify-center ">
                      <button type='submit' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Sign In
                      </button>
                  </div>
              </form> 
                  <p className='text-center h4 my-5'>Sign in With</p>
                 

                  <div className="input-button">
                          <button onClick={handleGoogleSignin} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                             Sign in with Google
                          </button>
                      </div>

           </div>
    </div> 
  )
}

export default Login