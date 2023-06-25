import React from 'react'
import { signIn, useSession,getSession } from 'next-auth/react';


const Card = () => {
    const handleGoogleSignin =  () => {
        signIn('google', { callbackUrl: '/' });
    
      
      
      };
  return (
    <div className='flex flex-row justify-around'>
    <div>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className="p-5">
    <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
   
</div>
</div>
<div className='flex justify-center mt-5'>
<span>&#8377;499</span>
</div>
<div className='flex justify-center mt-5'>
<button name="Buy Visiting Card" onClick={handleGoogleSignin} className='px-2 rounded-sm text-lg bg-green-200'>Buy</button>
</div>
</div>
<div>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className="p-5">
    <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
 
</div>
</div>

<div className='flex justify-center mt-5'>
<span>&#8377;749</span>
</div>
<div className='flex justify-center mt-5'>

<button name='Buy Visting Card' onClick={handleGoogleSignin} className='px-2 rounded-sm text-lg bg-green-200'>Buy</button>
</div>
</div>
<div>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className="p-5">
    <div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </div>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    
</div>
</div>
<div className='flex justify-center mt-5'>
<span>&#8377;999</span>
</div>
<div className='flex justify-center mt-5'>

<button name ="Buy Card" onClick={handleGoogleSignin} className='px-2 rounded-sm text-lg bg-green-200'>Buy</button>
</div>
</div>
</div>
  )
}

export default Card