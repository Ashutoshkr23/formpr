import Image from 'next/image'
import React from 'react'

function ChooseTemplates({ selectedTemplate, setSelectedTemplate }) {
  return (
    <div className='flex flex-grow drop-shadow-white flex-col h-[330px] rounded-[10px]  mb-5 bg-bright-gray pl-9 pt-4'>
      <p className='font-bold text-xs'>TEMPLATE</p>
      <div className='flex gap-4 mt-5'>
        <div className='h-[255px] w-[118px]' onClick={() => setSelectedTemplate('0')}>
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-1.png" />
        </div>
        <div className='h-[255px] w-[118px]' onClick={() => setSelectedTemplate('1')}>
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-2.png" />
        </div>
        <div className='h-[255px] w-[118px]' onClick={() => setSelectedTemplate('3')}>
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-3.png" />
        </div>
        <div className='h-[255px] w-[118px]' onClick={() => setSelectedTemplate('2')}>
          <Image height={255} width={118} src="/assets/images/templateimg/template/Template-4.png" />
        </div>
      </div>
    </div>
  )
}

export default ChooseTemplates
