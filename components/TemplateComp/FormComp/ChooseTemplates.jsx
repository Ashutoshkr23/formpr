import Image from 'next/image'
import React from 'react'

function ChooseTemplates({ selectedTemplate, setSelectedTemplate }) {
  console.log(selectedTemplate)
  return (
    <div className='flex flex-grow drop-shadow-white flex-col h-auto pb-6 rounded-[10px]  mb-5 bg-black-dim px-4 md:px-9 pt-4'>
      <p className='font-bold text-white text-xs'>TEMPLATE<span className='text-[#F66F6f] text-base ml-0.5 '>*</span></p>
      <div className='flex flex-wrap gap-y-4 sm:gap-y-8 mt-5 '>
        <div className='w-1/3 sm:w-1/4 flex justify-center '>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('0')}>
            {selectedTemplate === '0' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0  z-30 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-1" src="/assets/images/templateimg/template/Template-1.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 flex justify-center '>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('1')}>
            {selectedTemplate === '1' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-2" src="/assets/images/templateimg/template/Template-2.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('3')}>
            {selectedTemplate === '3' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-3" src="/assets/images/templateimg/template/Template-3.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('2')}>
            {selectedTemplate === '2' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-4" src="/assets/images/templateimg/template/Template-5.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('4')}>
            {selectedTemplate === '4' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-4" src="/assets/images/templateimg/template/Template-6.png" />
            </div>
          </div>
        </div>
        
        <div className='w-1/3 sm:w-1/4 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('5')}>
            {selectedTemplate === '5' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-4" src="/assets/images/templateimg/template/Template-7.png" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ChooseTemplates
