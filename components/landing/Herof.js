import Image from 'next/image'
import React from 'react'

const Herof = () => {
  return (
        <div className='flex  lg:flex-row justify-between flex-col-reverse  '>

    <div className="flex flex-col mt-[205px] mx-auto ">
        <div className='text-[70px] font-bold  '>
     <span>Enter The </span> <span className="text-transparent bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] bg-clip-text">
     Loop.
        </span>
        </div>
        <div className='text-[16px] text-[#1D76A9]'>Visiting Cards Reimagined on Web3.0   </div>
    </div>

    <div className='flex m-auto mt-9'>
    <div className='relative '>
    <Image src={'/assets/images/phone1.svg'} 
    width={243}
    height={552}
    />
     <div className='absolute top-[240px] -z-10 -right-[155px]'>
    <Image src={'/assets/images/cardpi.svg'} 
    width={221}
    height={174}
    />
</div>
    
<div className='absolute top-[119px]  -left-[175px] '>
    <Image src={'/assets/images/cardbl.svg'} 
    width={244}
    height={177}
    />
</div>

<div className='absolute top-[543px] opacity-30'>
    <Image src={'/assets/images/phone2.svg'} 
    width={227}
    height={154}
    />
</div>
</div>
   


</div>

    </div>
  )
}

export default Herof