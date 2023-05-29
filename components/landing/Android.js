import Image from 'next/image'

const Android = () => {
  return (
    <div className='hidden lg:block pt-[170px] '>
    
    {/* <div className=' flex justify-between '> */}
       <div className='flex justify-between items-center '> 
            <div className='flex flex-col '>
<div className='lg:text-[32px] xl:text-[48px] mx-auto font-bold  text-transparent bg-gradient-to-r from-[#66D3E1] to-[#96FFAD] bg-clip-text '>
    <h1>Android and iOS compatible </h1>
</div>
<div className='flex flex-row justify-end space-x-4 pt-[51px] '>
    <div className=''>
    <Image src={'/assets/images/iosbtns.png'}
        alt='ios'
        width={225}
        height={69}
        />
    </div>
    <div className=''>
        <Image src={'/assets/images/androidbtn.png'}
        alt='android'
        width={225}
        height={69}
        />
    </div>

</div>
          </div> 
            <div className=' '>
                <Image src={'/assets/images/android.png'}
                alt='android'
                width={491}
                height={491}
                />
            </div>

        </div>
        
    {/* </div> */}
    <div /> 
    </div>
  )
}

export default Android