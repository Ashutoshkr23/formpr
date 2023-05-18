import React from 'react'
import ProfileImg from './ProfileImg'
import Social from './Social'
import Image from 'next/image'
import BioTemp from './BioTemp'


const Template = ({fname,lname,designation,bio,company,website,mobile}) => {
    
  return (
  
<div className='bg-black '>

<div className=" bg-gradient-to-b from-[#D2FFEC] via-[#F16869] to-[#FF932F] w-full mx-auto sm:w-[640px] pt-[146px]">

<div className='relative px-6 bg-gradient-to-b from-[#FFFFFF] to-[#B0B0B0] mx-auto h-[612px] w-[351px] rounded-[20px]'>


  
      <div className='-top-16 inset-0 mx-auto absolute h-[100px] w-[100px] '>      <ProfileImg/></div>  

          <div className='flex justify-center pt-[52px] font-semibold text-[20px] '>
          <input className='text-center bg-gray-100'
          type="text" 
          value={`${fname} ${lname}`}
          placeholder="John Doe" 
        //   value={inputValue}
        //   onChange={handleChange}
        />
          </div>
          <div className='flex justify-center mt-[11px] font-semibold text-[16px]'>
          <input className='text-center bg-gray-100'
          type="text" 
          placeholder="Design Lead" 
           value={designation}
        //   onChange={handleChange}
        />
          </div>
      <div><BioTemp bio={bio} company={company} mobile={mobile} website={website}/></div> 
       <div><Social/></div> 
     <div className=''><button className='  bg-black font-bold text-[20px] text-white h-[50px] w-[304px] rounded-[14px] mt-[31px]' >SAVE CONTACT</button>  </div>  

          

      
</div>

     <div className='text-[10px] flex justify-center mt-8 pb-[29px]'>made with love by <Image className='ml-3' src={'/loop.png'} width={27} height={12}/></div>
    </div>



    </div>
  )
}

export default Template