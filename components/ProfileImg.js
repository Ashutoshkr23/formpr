import Image from 'next/image'
import React from 'react'

const ProfileImg = ({profileimg}) => {
  return (
    <div className=''>
<div className='flex justify-center '>
        <Image className='rounded-[50px]'
        src={profileimg}
        width={100}
        height={100}

        />

</div>
    </div>
  )
}

export default ProfileImg