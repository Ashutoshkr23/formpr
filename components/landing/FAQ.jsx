import React, { useState } from 'react'
import QA from './QA';


function FAQ() {
    const [arrowRotation, setArrowRotation] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);


    const handleArrowClick = () => {
        setArrowRotation(arrowRotation + 180);
        setShowAnswer(!showAnswer);
    };

  return (
    <div className='mt-20 lg:mt-52 mb-40'>
          <h5 className='text-xs md:text-base font-medium text-[#596573] '>FAQ</h5>
          <h1 className='text-3xl md:text-5xl mt-2 font-bold'>Looping In: Answers to frequently asked questions
</h1>
          <QA
              ques={"Q: How does Loop work?"}
              ans={"A: Loop uses NFC-powered technology to transfer your information seamlessly. All you have to do is tap your Loop card on a smartphone, and your information will be instantly transferred."}/>
          <QA
              ques={"Q: Q: Do I need an app to use Loop?"}
              ans={"A: Loop uses NFC-powered technology to transfer your information seamlessly. All you have to do is tap your Loop card on a smartphone, and your information will be instantly transferred."} />
          <QA
              ques={"Q: Is my information safe with Loop? "}
              ans={"A: Loop uses NFC-powered technology to transfer your information seamlessly. All you have to do is tap your Loop card on a smartphone, and your information will be instantly transferred."} />
          <QA
              ques={"Q: Can I update my information on Loop?"}
              ans={"A: Loop uses NFC-powered technology to transfer your information seamlessly. All you have to do is tap your Loop card on a smartphone, and your information will be instantly transferred."} />
          
    </div>
  )
}

export default FAQ
