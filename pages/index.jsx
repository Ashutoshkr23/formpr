import React from 'react'
import { LandingNav, Testimonial, Products, Story, Android, Hero, FAQ, Benefits, LoopBlack,  } from '@/components'

const Landing = () => {
  return (
    // max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20
    <div className='bg-["#333333"] max-w-[1440px]  mx-auto' >  
      <LandingNav />
      <Hero />
      <Benefits />
      <Products />
      <LoopBlack/>
      <Story />
      <Testimonial />
      <Android />
      <FAQ />
      
    </div>
  )
}

export default Landing
