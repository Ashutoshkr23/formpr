import Benefit from '@/components/landing/Benefit'
import Herof from '@/components/landing/Herof'
import LoginNav from '@/components/landing/LoginNav'
import Testimonial from '@/components/landing/Testimonial'
import Products from '@/components/landing/Products'
import React from 'react'

const landing = () => {
  return (
    <div className='bg-["#333333"] max-w-[1440px]  mx-auto px-4 sm:px-8 lg:px-20 xl:px-28' >
      <LoginNav/>
      <Herof/>
      <Benefit/>
      <Testimonial/>
      <Products/>
    </div>
  )
}

export default landing
