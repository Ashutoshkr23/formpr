import Benefit from '@/components/landing/Benefit'
import Herof from '@/components/landing/Herof'
import LoginNav from '@/components/landing/LoginNav'
import Testimonial from '@/components/landing/Testimonial'
import React from 'react'

const landing = () => {
  return (
    <div className='bg-["#333333"] max-w-[1440px]  mx-auto px-4 sm:px-8 lg:px-28' >
      <LoginNav/>
      <Herof/>
      <Benefit/>
      <Testimonial/>
    </div>
  )
}

export default landing
