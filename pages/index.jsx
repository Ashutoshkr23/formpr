import React from 'react'
import { LandingNav, Testimonial, Products, Story, Android, Hero, FAQ, Benefits } from '@/components'

const Landing = () => {
  return (
    <div className='bg-["#333333"] max-w-[1440px]  mx-auto  ' >
      <LandingNav />
      <Hero />
      <Benefits />
      <Products />

    </div>
  )
}

export default Landing
