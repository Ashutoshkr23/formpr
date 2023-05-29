import React from 'react'
import ProfileImg from './ProfileImg'
import Image from 'next/image'
import BioTemp from './BioTemp'
import Socialpg from './Socialpg'



const Template = ({ fname, type, border, lname, btntext, profileimg, designation, bio, company, website, mobile, gradient1, gradient2, text1, text2, text3, btn, loop }) => {

  console.log(type)
  return (

    <div className=' '>

      <div className={`${gradient1} w-[375px] h-[812px] rounded-[30px] pt-[161px] mx-auto `}>

        <div className={`${gradient2} relative px-6  mx-auto h-[651px] w-[375px]  rounded-[20px] `}>
          <div className='-top-[79px] inset-0 mx-auto absolute h-[100px] w-[100px] '><ProfileImg profileimg={profileimg} /></div>

          <div className='flex justify-center pt-[40px] font-semibold text-[20px] tracking-[-0.5px] '>
            <input className={`text-center bg-transparent ${text1} `}
              type="text"
              value={fname || lname ? `${fname} ${lname}` : 'Andrew Darren'}
              placeholder={fname || lname ? undefined : 'Andrew Darren'}
            //   value={inputValue}
            //   onChange={handleChange}
            />
          </div>
          <div className='flex justify-center mt-[11px] font-semibold text-[16px]'>
            <input className={`text-center bg-transparent ${text2}`}
              type="text"
              placeholder="Design Lead"
              value={designation}
            //   onChange={handleChange}
            />
          </div>
          <div><BioTemp bio={bio} border={border} text1={text1} text2={text2} company={company} mobile={mobile} website={website} /></div>



          <div className=''><Socialpg text1={text1} type={type} /></div>




          <div className=''><button className={`${btn} border-2 font-thin text-[20px] ${btntext} h-[50px] w-[304px] rounded-[14px] mt-7`} >SAVE CONTACT</button>  </div>

          <div className={`text-[10px] flex justify-center mt-7 pb-[29px] ${text1}`}>made with love by <Image className='ml-1 mt-[2px]' src={loop} width={27} height={12} /></div>
          <div className='flex mx-auto mt-[-12px] rounded-[31px]  h-[3px] w-[133px] bg-[#A8A8A8]'></div>

        </div>

      </div>
    </div>
  )
}

export default Template