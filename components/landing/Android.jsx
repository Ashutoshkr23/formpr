import Image from 'next/image'

const Android = () => {
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-16  max-w-[1208px] mx-auto'>
            <div className='lg:pt-[170px] pt-[93px] '>

                {/* <div className=' flex justify-between '> */}
                <div className='flex lg:justify-center md:justify-center   '>
                    <div className='flex flex-col  '>
                        <div className='text-[30px] md:text-[42px] lg:pt-[136px] lg:text-[48px] mx-auto font-bold  text-transparent bg-gradient-to-r from-[#66D3E1] to-[#96FFAD] bg-clip-text '>
                            <h2>Android and iOS compatible </h2>
                        </div>
                        <div className='flex flex-col items-center space-y-7 lg:space-y-0  lg:flex-row lg:justify-end lg:space-x-4 lg:pt-[51px] pt-[58px] '>
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
                    <div className=' hidden lg:block'>
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
            {/* mobile  */}
            {/* <div className='lg:hidden pt-[93px]'>
    hello

</div> */}


        </div>
    )
}

export default Android