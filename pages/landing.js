import Benefit from '@/components/landing/Benefit'
import Herof from '@/components/landing/Herof'
import LoginNav from '@/components/landing/LoginNav'
import React from 'react'

const landing = () => {
  return (
    <div className='bg-["#333333"]'>
      <LoginNav/>
      <Herof/>
      <Benefit/>
    </div>
  )
}

export default landing
