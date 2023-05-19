import React from 'react'

function ProgressBar({ step }) {
  return (
    <div>
      <ul className="flex justify-between">
        <li className={`relative w-1/3 rounded-3xl p-4 text-xs text-center ${step === 1 ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-black'}`}>Step 1: Fill details</li>
        <li className={`relative w-1/3 rounded-3xl p-4 text-xs text-center ${step === 2 ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-black'}`}>Step 2: Choose template</li>
        <li className={`relative w-1/3 rounded-3xl p-4 text-xs text-center ${step === 3 ? 'bg-blue-500 text-white font-bold' : 'bg-gray-200 text-black'}`}>Step 3: Card</li>
      </ul>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2  text-xs flex rounded bg-gray-200">
          <div style={{ width: `${step * 33.33}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500"></div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar


