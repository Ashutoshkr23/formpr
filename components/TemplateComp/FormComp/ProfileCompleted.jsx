import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function ProfileCompleted() {
  return (
      <div className='fixed top-0 right-0 z-[50] w-screen h-screen bg-white flex items-center justify-center  bg-opacity-50 backdrop-blur-md p-4 sm:p-10   '>
          <div className='h-[500px] w-full sm:h-[560px]  sm:w-[746px] flex flex-col items-center py-10 bg-gradient-to-r from-[#67D4E1] to-[#8DF6B8] rounded-[10px] '>
            <div className='relative h-[195px] sm:h-[257px] w-[212px] sm:w-[359px]'>
            <Image src="/assets/images/ProfileCompleted.png" fill={true} className='sm:ml-10' alt="profile-completed icon"/>
        </div>
            <h1 className='text-xl sm:text-[40px] font-bold  mt-10 '>Profile Creation Completed</h1>
            <div className='pt-20'>
                  <Link href="/profile">
                      <button className="h-10 px-2 w-full sm:w-[388px] rounded-[10px] bg-black text-white text-xs sm:text-base">
                          Go to Manage Cards and view your profile
                      </button>
                  </Link>
            </div>


        </div>
      
    </div>
  )
}

export default ProfileCompleted
