import Benefit from '@/components/landing/Benefit'
import Herof from '@/components/landing/Herof'
import LoginNav from '@/components/landing/LoginNav'
import Testimonial from '@/components/landing/Testimonial'
import Products from '@/components/landing/Products'
import React from 'react'
import Story from '@/components/landing/Story'
import Android from '@/components/landing/Android'

const landing = () => {
  return (
    <div className='bg-["#333333"] max-w-[1440px]  mx-auto px-4 sm:px-8 lg:px-20 xl:px-28' >
      <LoginNav/>
      <Herof/>
      <Benefit/>
      <Products/>
      <Story/>
      <Testimonial/>
      <Android/>

      
    </div>
  )
}

export default landing
