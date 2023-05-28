import {QA} from '@/components'
import React from 'react'

function FAQ() {


  return (
    <div className='mt-20 lg:mt-52 mb-40'>
          <h5 className='text-xs md:text-base font-medium text-[#596573] '>FAQ</h5>
          <h1 className='text-3xl md:text-5xl mt-2 font-bold'>Looping In: Answers to frequently asked questions</h1>
          
          <QA
              ques={"Q: How does Loop work?"}
              ans={"A: Loop uses NFC-powered technology to transfer your information seamlessly. All you have to do is tap your Loop card on a smartphone, and your information will be instantly transferred."}/>
          <QA
              ques={"Q: Q: Do I need an app to use Loop?"}
              ans={"A: No, you don't need an app to use Loop. All you need is a smartphone with NFC capabilities."} />
          <QA
              ques={"Q: Is my information safe with Loop? "}
              ans={"A: Yes, your information is safe with Loop. We take privacy and security seriously, and we've taken extra steps to ensure that your information is always safe and secure."} />
          <QA
              ques={"Q: Can I update my information on Loop?"}
              ans={"A:Yes, you can update your information on Loop in real-time. Simply log in to your account, make the necessary changes, and your information will be updated across all your Loop cards."} />      
    </div>
  )
}

export default FAQ
