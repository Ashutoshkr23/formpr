import React , {useState , useEffect , useRef} from 'react'
import Image from 'next/image'

function Socials({ visibleInputs, onToggleInput, setVisibleInputs, inputValues, handleInputChange, setCompletedSteps , showMenu , setShowMenu }) {
  const [isMailGiven, setIsMailGiven] = useState(false)
 


  
  useEffect(() => {
    setIsMailGiven(!!inputValues.mail);
  }, [inputValues.mail]);


  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleToggle = (inputName) => {
    onToggleInput(inputName);
  };

  const handleHideInput = (inputName) => {
    setVisibleInputs(visibleInputs.filter((name) => name !== inputName));
  };

  const handleHide = (inputName) => {
    handleHideInput(inputName);
  };

  
  return (
    <div  className={`flex flex-grow rounded-[10px] drop-shadow-white flex-col h-auto pb-60 sm:h-[460px] bg-black-dim px-4 sm:px-9 pt-4 my-5 ${isMailGiven ? 'border border-3 border-[#96FFAD] bg-gradient-to-b from-white to-[#E6FDFF]' : 'bg-white'
      }`}>
      <div className='flex'>
        <p className='font-bold  text-xs'>Social Links<span className='text-[#F66F6f] text-base ml-0.5 '>*</span></p>
        {isMailGiven && (
          <div className='h-5 w-5 ml-auto mr-10'>
            <Image height={20} width={20} src='/assets/images/templateimg/Tick.png' />
          </div>
        )}
      </div>
      <div>
        <div className=''>
          
          {visibleInputs.includes('mail') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
              <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Mail<span className='text-[#F66F6f] text-base ml-0.5 '>*</span></div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/email.png" alt='mail-icon' height={30} width={30} />
            </div>
              <input type="text" id="mail" name="mail" className={`bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow  rounded-md ${!inputValues.mail ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}  
              value={inputValues.mail}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px] invisible' onClick={() => handleHide('mail')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>
          )}
          {visibleInputs.includes('whatsapp') && (
            <div className='flex items-center mt-7 gap-2 flex-wrap'>
              <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Whatsapp</div>
              <div className='h-[30px] w-[30px]'>
                <Image src="/assets/images/social/folder1/watsp.png" alt='whatsapp icon' height={30} width={30} />
              </div>
              <input type="text" id="" name="whatsapp" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'
                value={inputValues.whatsapp}
                onChange={handleInputChange}
              />
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('whatsapp')}>
                <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
              </div>
            </div>
          )}
          {visibleInputs.includes('linkedin') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
            <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>LinkedIn </div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/linked.png" height={30} width={30} alt='linkedin' />
            </div>
            <input type="text" id="linkedIn" name="linkedin" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
                value={inputValues.linkedin}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('linkedin')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>)}
          {visibleInputs.includes('instagram') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
            <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>InstaGram</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/insta.png" height={30} width={30} alt='insta-icon'/>
            </div>
            <input type="text" id="Insta" name="instagram" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
            value={inputValues.instagram}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('instagram')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>
          )}
          {visibleInputs.includes('facebook') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
            <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Facebook</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/facebook.png" height={30} width={30} alt='fb-icon' />
            </div>
            <input type="text" id="facebook" name="facebook" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
            value={inputValues.facebook}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('facebook')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>
          )}
          {visibleInputs.includes('youtube') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
            <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Youtube</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/Youtube.png" height={30} width={30} alt='youtube-icon' />
            </div>
            <input type="text" id="youtube" name="youtube" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
            value={inputValues.youtube}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('youtube')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>
          )}
          {visibleInputs.includes('twitter') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
            <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Twitter</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/Twitter.png" height={30} width={30} alt='twitter-icon' />
            </div>
            <input type="text" id="Twitter" name="twitter" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
            value={inputValues.twitter}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('twitter')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>
          )}
          {visibleInputs.includes('reddit') && (
          <div className='flex items-center mt-7 gap-2 flex-wrap'>
            <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Reddit</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/Reddit.png" height={30} width={30} alt='reddit-icon' />
            </div>
            <input type="text" id="Reddit" name="reddit" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
            value={inputValues.reddit}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('reddit')}>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
            </div>
          </div>
          )}
          {visibleInputs.includes('behance') && (
            <div className='flex items-center mt-7 gap-2 flex-wrap'>
              <div className='h-8 sm:h-10 w-28 border text-xs bg-white border-1 flex pl-4 items-center rounded-md '>Behance</div>
              <div className='h-[30px] w-[30px]'>
                <Image src="/assets/images/social/folder1/Behance.png" height={30} width={30} alt='behance-icon' />
              </div>
              <input type="text" id="Behance" name="behance" className='bg-white h-8 sm:h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'  
              value={inputValues.behance}
              onChange={handleInputChange}/>
              <div className='h-[20px] w-[20px]' onClick={() => handleHide('behance')}>
                <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} alt='bin-icon' />
              </div>
            </div>
          )}
          <div className='mt-12 relative w-20 - '>
          <div className=' h-8 sm:h-10 w-28  z-50   text-xs bg-black text-white border-1 flex justify-center items-center rounded-md' onClick={handleButtonClick}>Add Link</div>
            {showMenu && (
            <div className='absolute flex flex-col bg-white w-40 -right-48 -top-10 px-4 space-y-4 py-4 border rounded-md'>
              {!visibleInputs.includes('whatsapp') && (
                <button onClick={() => handleToggle('whatsapp')}>Whatsapp</button>)}
              {!visibleInputs.includes('mail') && (
                <button onClick={() => handleToggle('mail')}>Mail</button>)}
              {!visibleInputs.includes('linkedin') && (
                <button onClick={() => handleToggle('linkedin')}>linkedin</button>)}
              {!visibleInputs.includes('instagram') && (
                <button onClick={() => handleToggle('instagram')}>Instagram</button>)}
              {!visibleInputs.includes('facebook') && (
                <button onClick={() => handleToggle('facebook')}>Facebook</button>)}
              {!visibleInputs.includes('youtube') && (
                <button onClick={() => handleToggle('youtube')}>Youtube</button>)}
              {!visibleInputs.includes('twitter') && (
                <button onClick={() => handleToggle('twitter')}>Twitter</button>)}
              {!visibleInputs.includes('reddit') && (
                <button onClick={() => handleToggle('reddit')}>Reddit</button>)}
              {!visibleInputs.includes('behance') && (
                  <button onClick={() => handleToggle('behance')}>Behance</button>)}
          </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials
