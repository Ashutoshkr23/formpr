import Image from 'next/image'
import React from 'react'

const LoopBlack = () => {
  return (
    <div className='mt-[222px]'>
        <div className='hidden lg:block bg-[#090909] h-[648px] max-w-[1212px] mx-auto rounded-[20px]' >
            <div className=' pt-11 pl-9 flex '>
                <div>
                <div className='text-transparent bg-gradient-to-r from-[#8EF8B7] to-[#090909] bg-clip-text'>
                    <h1 >Loop Black </h1>
                </div>
                <div className='text-[40px] pt-9 text-white leading-[140%] pr-[16px] max-w-[652px]'>
                    <h3>Unveil the Power of <span className='text-transparent bg-gradient-to-r from-[#8EF8B7] to-[#090909] bg-clip-text'>Darkness,</span> Unleash Limitless Connections.</h3>

                </div>
                <div className='pl-[13px] max-w-[604px]  pt-[76px] text-white text-[14px] leading-[164%]'>
                    <div className=' '>
                        <p>Make a bold statement with Loop Black, our signature card designed to captivate with its sleek and matte black finish. </p>
                    </div>
                    <div className='pt-9  '>
                        <p>Your takes centre stage in a subtle, small size on the front, while the Loop logo adds a touch of distinction behind in a glossy black, creating a stunning contrast. </p>
                    </div>

                   

                </div>
                <div className='pt-[76px] pl-3 text-[#596573] text-[12px]'>
                        <p>This card exudes exclusivity and leaves a lasting impression that&apos;s both refined and memorable.</p>
                    </div>
                </div>

                <div className=' pr-5 pt-7'>
                    <Image src={'/assets/images/landing/loopcard.png'} height={450} width={494} alt='loopcard'/>
                </div>
            </div>

        </div>


    </div>
  )
}

export default LoopBlack