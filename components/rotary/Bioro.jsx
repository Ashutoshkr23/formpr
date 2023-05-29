import React from 'react'
import Image from 'next/image'


const Bioro = () => {
  return (
    <div>
         <div className='text-[12px]'>Bio</div>
        <div className='mt-3 text-[12px]'>
        Club President of Rotary Club of Hiranandani Estate for the year 2023 - 2024.
        </div>
        <div className="mt-[26px] grid grid-cols-2 gap-y-5">
<div className='flex'>
    <Image src={'/rotaryclub.png'} alt='rotaryclub' width={24} height={21} /><p className='text-[10px] ml-1.5 tracking-[-0.5px] '>Rotary Club of Hiranandani Estate</p>
</div>
<div className='flex ml-[50px]'>
    <Image src={'/district.png'} alt='district' width={20} height={20} /><p className='text-[10px] ml-1.5 tracking-[-0.5px] '>District 3142</p>
</div>
<div className='flex '>
    <Image src={'/website.png'} alt='website' width={20} height={20} /><p className='text-[10px] ml-1.5 tracking-[-0.5px]'>rchiranandani.rotaryindia.org</p>
</div>
<div className='flex ml-[50px]'>
    <Image src={'/phone.png'} alt='phone' width={20} height={20} /><p className='text-[10px] ml-[1px] tracking-[-0.5px]'>+919819697361   </p>
</div>


        </div>
    </div>
  )
}

export default Bioro