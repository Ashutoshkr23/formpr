import React from 'react'
import Image from 'next/image'


const RotaryLogo= () => {
    return (
        <div>
            <div className=' '><Image className='rounded-[75px]'
                src={"/roticon.png"}
                width={150}
                height={150}
                alt='rotary-logo'

            /></div>
        </div>
    )
}

export default RotaryLogo