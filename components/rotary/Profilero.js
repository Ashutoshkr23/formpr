import React from 'react'
import Image from 'next/image'


const Profilero = () => {
  return (
    <div>

        <div className=' '><Image className='rounded-[50px]'
        src={"/roticon.png"}
        width={150}
        height={150}

        /></div>
        <div className='flex justify-center mt-[-80px] relative '>
        
        <Image className='rounded-[50px]'
        src={"/proro.png"}
        width={90}
        height={85}

        />

</div>
    </div>
  )
}

export default Profilero