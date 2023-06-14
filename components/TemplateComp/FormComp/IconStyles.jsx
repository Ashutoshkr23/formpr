import React from 'react'
import Image from 'next/image'

function IconStyles() {
  return (
    <div className='flex flex-grow rounded-[10px] drop-shadow-white flex-col h-auto bg-bright-gray px-9 py-8 my-5'>
    <p className='font-bold text-xs mb-5'>ICON STYLES</p>
      <div className='flex flex-wrap gap-5'>
              <div className='h-[125px] w-[224px]'>
                  <Image height={125} width={224} src="/assets/images/templateimg/IconStyle/Light.png" />
              </div>
              <div className='h-[125px] w-[224px]'>
                  <Image height={125} width={224} src="/assets/images/templateimg/IconStyle/Dark.png" />
              </div>
              <div className='h-[125px] w-[224px]'>
                  <Image height={125} width={224} src="/assets/images/templateimg/IconStyle/Color.png" />
              </div>
      </div>
    </div>
  )
}

export default IconStyles
