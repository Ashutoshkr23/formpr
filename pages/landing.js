import Benefit from '@/components/landing/Benefit'
import Herof from '@/components/landing/Herof'
import LoginNav from '@/components/landing/LoginNav'
import Products from '@/components/landing/Products'
import React from 'react'

const landing = () => {
  return (
    <div className='bg-["#333333"]'>
      <LoginNav/>
      <Herof/>
      <Benefit/>
      <Products/>
    </div>
  )
}

export default landing
