import React from 'react'
import Image from 'next/image'


const Profilero = () => {
  return (
    <div>
      <div className='flex justify-center relative '>
        <Image className='rounded-[50px]'
          src={"/proro.png"}
          width={100}
          height={100}

        />

      </div>
    </div>
  )
}

export default Profilero