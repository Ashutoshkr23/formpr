import Image from 'next/image'
import React from 'react'

function ChooseTemplates({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div className='flex flex-grow drop-shadow-white flex-col h-[330px] rounded-[10px]  mb-5 bg-black-dim pl-9 pt-4'>
      <p className='font-bold text-white text-xs'>TEMPLATE</p>
      <div className='flex gap-4 mt-5'>
        <div className='relative h-[255px] w-[118px]' onClick={() => setSelectedTemplate('0')}>
          {selectedTemplate === '0' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
          )}
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-1.png" />
        </div>
        <div className='relative h-[255px] w-[118px]' onClick={() => setSelectedTemplate('1')}>
          {selectedTemplate === '1' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
          )}
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-2.png" />
        </div>
        <div className='relative h-[255px] w-[118px]' onClick={() => setSelectedTemplate('3')}>
          {selectedTemplate === '3' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
          )}
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-3.png" />
        </div>
        <div className='relative h-[255px] w-[118px]' onClick={() => setSelectedTemplate('2')}>
          {selectedTemplate === '2' && (
            <div className='absolute inset-0 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
          )}
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-5.png" />
        </div>
      </div>
    </div>
  )
}

export default ChooseTemplates
