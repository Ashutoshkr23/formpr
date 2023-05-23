import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <div className='pt-[194px]'>
<div className='flex flex-col'>
<div className='flex flex-col justify-center items-center '>
    <div>
<h4 >Products</h4>
    </div>
    <div className=' text-[50px] font-bold'>
        <h1 >Step into the Loop</h1>
    </div>
</div>

<div className='flex justify-center space-x-14 pt-[92px]'>
    <div className='h-[511px] w-[385px] border-2  '>
        <div className='flex flex-col  items-center'>
<div className='pt-8'>
<p className='text-[20px]'>Loop Lite</p>
</div>

<div className='pt-[52px]'>
<Image src={'/assets/images/Group 327 (2).png'}
alt='card1'
height={301}
width={315}
/>
</div>
<div className='w-[165px] h-[41px] text-[16px]  pt-5'>
    <button className='rounded-[10px] bg-gradient-to-r from-[#68D5DF] to-[#95FEAF] px-[43px] py-[5px] text-black' >BUY NOW</button>
</div>

    </div>

    </div>


    <div className='h-[511px] w-[385px] '>

    <div className='flex flex-col  items-center'>
<div className='pt-8'>
<p className='text-[20px]'>Loop Elevate </p>
</div>

<div className='pt-[52px]'>
<Image src={'/assets/Group 328.png'}
alt='card1'
height={301}
width={315}
/>
</div>
<div className='w-[165px] h-[41px] text-[16px]  pt-5'>
    <button className='px-[43px] py-[5px] bg-black text-white rounded-[10px]'>BUY NOW</button>
</div>

    </div>

    </div>
    <div className='h-[511px] w-[385px] '>

    <div className='flex flex-col  items-center'>
<div className='pt-8'>
<p className='text-[20px]'>Loop Supreme</p>
</div>

<div className='pt-[52px]'>
<Image src={'/assets/images/Group 330.png'}
alt='card1'
height={301}
width={315}
/>
</div>
<div className='w-[165px] h-[41px] text-[16px]  pt-5'>
    <button className='px-[43px] py-[5px] bg-black text-white rounded-[10px]'>BUY NOW</button>
</div>

    </div>


    </div>

</div>

</div>
    </div>
  )
}

export default Products