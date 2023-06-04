import React from 'react'
import Head from 'next/head'
import { LandingNav, Products, Story, Android, Hero, FAQ, Benefits, LoopBlack, Swiper, Partners  } from '@/components'

const Landing = () => {

  return (
    // max-w-[1440px]  mx-auto px-4 sm:px-8 md:px-16 xl:px-20
    <div className=' max-w-[1440px]  mx-auto' >  
      <Head>
      <title>Loop: Visting Cards Reimagined on Web3</title>
      <meta property="og:title" content="NFC Visting Cards Reimagined on Web3" key="title" 
              description= "NFC Web3 visting cards for a seamless networking expereince"/>
      </Head>
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
