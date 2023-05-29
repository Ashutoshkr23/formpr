import React from 'react'
import { LandingNav, Testimonial, Products, Story, Android, Hero, FAQ, Benefits } from '@/components'

const Landing = () => {
  return (
    <div className='bg-["#333333"] max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20' >
      <LandingNav />
      <Hero />
      <Benefits />
      <Products />
      <Story />
      <Testimonial />
      <Android />
      <FAQ />
    </div>
  )
}

export default Landing
