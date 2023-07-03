import Image from 'next/image'
import React , {useState , useEffect} from 'react'

function ChooseTemplates({ selectedTemplate, completedSteps, setSelectedTemplate, setCompletedSteps }) {
  const [isTemplateSelected, setIsTemplateSelected] = useState(false);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  useEffect(() => {
    if (selectedTemplate !== 0) {
      setIsTemplateSelected(true);
      setCompletedSteps([0]);
    }
  }, [selectedTemplate]);


  console.log(selectedTemplate)
  return (
    <div className={`flex flex-grow drop-shadow-white flex-col bg-white h-auto pb-6 rounded-[10px]  mb-5  px-4 md:pl-9 pt-4 ${isTemplateSelected ? 'border border-3 border-[#96FFAD] bg-white' : 'bg-white'
      }`}>
      <div className='flex'>
        <p className='font-bold  text-xs'>TEMPLATE<span className='text-[#F66F6f] text-base ml-0.5 '>*</span></p>
        {isTemplateSelected && (
          <div className='h-5 w-5 ml-auto mr-10'>
            <Image height={20} width={20} src='/assets/images/templateimg/Tick.png' />
          </div>
        )}
      </div>
      <div className='flex flex-wrap gap-y-4 sm:gap-y-8 mt-5 '>
        <div className='w-1/3 sm:w-1/4 xl:w-1/6 flex justify-center '>
          <div className='relative h-[170px]  w-[78px]  sm:h-[255px] sm:w-[118px] cursor-pointer' onClick={() => handleTemplateSelect('1')}>
            {selectedTemplate === '1' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0  z-30 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-1" src="/assets/images/templateimg/template/Template-1.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 xl:w-1/6 flex justify-center '>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px] cursor-pointer' onClick={() => handleTemplateSelect('2')}>
            {selectedTemplate === '2' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-2" src="/assets/images/templateimg/template/Template-2.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 xl:w-1/6 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px] cursor-pointer' onClick={() => handleTemplateSelect('4')}>
            {selectedTemplate === '4' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[12px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-3" src="/assets/images/templateimg/template/Template-3.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 xl:w-1/6 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px] cursor-pointer' onClick={() => handleTemplateSelect('3')}>
            {selectedTemplate === '3' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-4" src="/assets/images/templateimg/template/Template-5.png" />
            </div>
          </div>
        </div>
        <div className='w-1/3 sm:w-1/4 xl:w-1/6 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px] cursor-pointer' onClick={() => handleTemplateSelect('5')}>
            {selectedTemplate === '5' && (
              <div className='absolute border-2 border-[#66D3E1] inset-0 z-30 bg-[#81919A] bg-opacity-50 rounded-[8px]'></div>
            )}
            <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px]'>
              <Image fill={true} alt="template-4" src="/assets/images/templateimg/template/Template-6.png" />
            </div>
          </div>
        </div>

        <div className='w-1/3 sm:w-1/4 xl:w-1/6 flex justify-center'>
          <div className='relative h-[170px] w-[78px] sm:h-[255px] sm:w-[118px] cursor-pointer' onClick={() => handleTemplateSelect('6')}>
            {selectedTemplate === '6' && (
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
