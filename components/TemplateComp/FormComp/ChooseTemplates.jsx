import Image from 'next/image'
import React from 'react'

function ChooseTemplates({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div className='flex flex-grow drop-shadow-white flex-col h-auto pb-6 sm:h-[330px] rounded-[10px]  mb-5 bg-black-dim px-4 md:px-9 pt-4'>
      <p className='font-bold text-white text-xs'>TEMPLATE</p>
      <div className='flex flex-wrap gap-4 mt-5'>
        <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('0')}>
          {selectedTemplate === '0' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
          )}
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
            <Image fill={true}  src="/assets/images/templateimg/template/Template-1.png" />
          </div>
        </div>
        <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('1')}>
          {selectedTemplate === '1' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
          )}
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
          <Image fill={true}  src="/assets/images/templateimg/template/Template-2.png" />
          </div>
        </div>
        <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('3')}>
          {selectedTemplate === '3' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
          )}
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
          <Image fill={true}  src="/assets/images/templateimg/template/Template-3.png" />
          </div>
        </div>
        <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]' onClick={() => setSelectedTemplate('2')}>
          {selectedTemplate === '2' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
          )}
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
          <Image fill={true}  src="/assets/images/templateimg/template/Template-5.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseTemplates
