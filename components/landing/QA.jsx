import React , {useState} from 'react'
import { BsFillTriangleFill } from 'react-icons/bs';


function QA({ques , ans}) {
    const [arrowRotation, setArrowRotation] = useState(180);
    const [showAnswer, setShowAnswer] = useState(false);


    const handleArrowClick = () => {
        setArrowRotation(arrowRotation + 180);
        setShowAnswer(!showAnswer);
    };
  return (
          <div>
              <div className='question mt-4 p-4'>
                  <button className='flex justify-between items-center w-full' onClick={handleArrowClick}>
                      <div className=' font-bold text-lg md:text-xl inline text-start'>{ques}</div>
                      <div className='ml-auto'><BsFillTriangleFill className='h-4 w-6' style={{ transform: `rotate(${arrowRotation}deg)` }} /></div>
                      <div className='ml-4'>

                      </div>
                  </button>
              </div>
              {showAnswer &&
                  <div className='answer mt-4 p-4'>
                      <p className=' font-medium text-sm md:text-xl'>{ans}</p>
                  </div>
              }
              <div className='w-full h-[1px] bg-[#596573]'></div>
          </div>
  )
}

export default QA
