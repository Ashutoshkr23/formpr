import React from 'react'
import { LandingNav, Products, Story, Android, Hero, FAQ, Benefits, LoopBlack, Swiper, Partners  } from '@/components'

const Landing = () => {
  return (
    // max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20
    <div className=' max-w-[1440px]  mx-auto' >  
      <LandingNav />
      <Hero />
      <Benefits />
      <Products />
      <LoopBlack/>
      <Story />
      <Partners/>
      <Android />
      <FAQ />
      
    </div>
  )
}

export default Landing
