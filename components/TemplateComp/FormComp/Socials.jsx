import React , {useState} from 'react'
import Image from 'next/image'

function Socials() {
  
  return (
      <div className='flex flex-grow rounded-[10px] drop-shadow-white flex-col h-[500px] bg-bright-gray px-9 pt-4 my-5'>
        <p className='font-bold text-xs'>Social Links</p>
      <div>
        <div className=''>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>Whatsapp</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/watsp.png" height={30} width={30} />
            </div>
            <input type="text" id="" name="whatsapp" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md'/>
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>Mail</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/email.png" height={30} width={30} />
            </div>
            <input type="text" id="mail" name="mail" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>LinkedIn</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/linked.png" height={30} width={30} />
            </div>
            <input type="text" id="LinkedIn" name="LinkedIn" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>InstaGram</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/insta.png" height={30} width={30} />
            </div>
            <input type="text" id="Insta" name="Insta" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>Facebook</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/facebook.png" height={30} width={30} />
            </div>
            <input type="text" id="facebook" name="facebook" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>Youtube</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/Youtube.png" height={30} width={30} />
            </div>
            <input type="text" id="youtube" name="Youtube" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>Twitter</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/Twitter.png" height={30} width={30} />
            </div>
            <input type="text" id="Twitter" name="Twitter" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
          <div className='flex items-center mt-7 gap-2'>
            <div className='h-10 w-28 text-xs bg-white border-1 flex justify-center items-center rounded-md '>Reddit</div>
            <div className='h-[30px] w-[30px]'>
              <Image src="/assets/images/social/folder1/Reddit.png" height={30} width={30} />
            </div>
            <input type="text" id="Reddit" name="Reddit" className='bg-white h-10 px-5 mt-0.5 border flex flex-grow border-dim-gray rounded-md' />
            <div className='h-[20px] w-[20px]'>
              <Image src="/assets/images/social/folder1/Bin.png" height={20} width={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Socials
