import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function ProfileCompleted() {
  return (
      <div className='fixed top-0 right-0 z-[50] w-screen h-screen bg-white flex items-center justify-center  bg-opacity-50 backdrop-blur-md   '>
          <div className=' h-[560px]  w-[746px] flex flex-col items-center py-10 bg-gradient-to-r from-[#67D4E1] to-[#8DF6B8] rounded-[10px] '>
            <Image src="/assets/images/ProfileCompleted.png" height={257} width={359} className='pl-20 '/>
            <h1 className='text-[40px] font-bold  mt-10 '>Profile Creation Completed</h1>
            <div className='pt-20'>
                  <Link href="/manageCards">
                      <button className="h-10 w-[388px] rounded-[10px] bg-black text-white">
                          Go to Manage Cards and view your profile
                      </button>
                  </Link>
            </div>


        </div>
      
    </div>
  )
}

export default ProfileCompleted
