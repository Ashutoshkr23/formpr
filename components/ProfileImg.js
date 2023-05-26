import Image from 'next/image'
import React from 'react'

const ProfileImg = () => {
  return (
    <div className=''>
      <div className='flex justify-center '>
        <Image className='rounded-[50px]'
          src={"/employee.svg"}
          width={100}
          height={100}
          alt="profile image"

        />

      </div>
    </div>
  )
}

export default ProfileImg