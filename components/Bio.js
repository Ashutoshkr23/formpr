import Image from 'next/image'
import React from 'react'

const Bio = ({phone}) => {
  return (
    <div className=''>
        <div className='text-[12px]'>Bio</div>
        <div className='mt-3 text-[12px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis eleifend arcu in fringilla. Praesent a nibh quis felis molestie porta. 
{/* {text} */}
        </div>
        <div className="mt-[26px] grid grid-cols-2 gap-y-5">
<div className='flex'>
    <Image src={'/log.png'} alt='log' width={27} height={22} /><p className='text-[12px] ml-1.5 tracking-[-0.5px] '>Alphamint Labs</p>
</div>
<div className='flex ml-[50px]'>
    <Image src={'/phone.png'} alt='log' width={22} height={22} /><p className='text-[12px] ml-[1px] tracking-[-0.5px]'>{phone}</p>
</div>
<div className='flex'>
    <Image src={'/website.png'} alt='log' width={22} height={22} /><p className='text-[12px] ml-1.5 tracking-[-0.5px]'>www.alphamintlabs.com</p>
</div>

        </div>
       
    </div>
  )
}

export default Bio