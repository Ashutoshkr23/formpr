import React from 'react'
import ProfileImg from './ProfileImg'
import Social from './Social'
import Image from 'next/image'
import BioTemp from './BioTemp'


const Template = ({ fname, lname, designation, bio, company, website, mobile, gradient1, gradient2, text1 ,text2 ,text3  }) => {
    
  return (
  
<div className=' '>

      <div className={`${gradient1} w-[375px] h-[812px] rounded-[30px] mx-auto pt-[146px]`}>

        <div className={`${gradient2} relative px-6  mx-auto h-[612px] w-[351px] rounded-[20px]`}>
      <div className='-top-16 inset-0 mx-auto absolute h-[100px] w-[100px] '><ProfileImg/></div>  

          <div className='flex justify-center pt-[52px] font-semibold text-[20px] '>
            <input className={`text-center bg-transparent `}
          type="text" 
          value={fname || lname ? `${fname} ${lname}` : 'John Doe'}
          placeholder={fname || lname ? undefined : 'John Doe'}
        //   value={inputValue}
        //   onChange={handleChange}
        />
          </div>
          <div className='flex justify-center mt-[11px] font-semibold text-[16px]'>
            <input className={`text-center bg-transparent`} 
          type="text" 
          placeholder="Design Lead" 
           value={designation}
        //   onChange={handleChange}
        />
          </div>
      <div><BioTemp bio={bio} company={company} mobile={mobile} website={website}/></div> 
       <div className=''><Social/></div> 
     <div className=''><button className=' bg-black font-bold text-[20px] text-white h-[50px] w-[304px] rounded-[14px] mt-[31px]' >SAVE CONTACT</button>  </div>  
   
</div>
<div className='text-[10px] flex justify-center mt-2 pb-[29px]'>made with love by <Image className='ml-1 mt-[2px]' src={'/loop.png'} width={27} height={12}/></div>
     <div className='flex mx-auto mt-[-7px] rounded-[31px]  h-[5px] w-[133px] bg-white'></div> 
    </div>
    </div>
  )
}

export default Template