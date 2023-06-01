import Image from 'next/image'

const Android = () => {
    return (
        <div className='px-4 sm:px-8 md:px-16 lg:px-16  max-w-[1208px] mx-auto'>
            <div className='lg:pt-[170px] pt-[93px] '>

                {/* <div className=' flex justify-between '> */}
                <div className='flex lg:justify-center xl:space-x-8 items-center md:justify-center   '>
                    <div className='flex flex-col mr-6 '>
                        <div className=' md:min-w-[610px] xl:min-w-[700px]  mx-auto text-transparent md:text-right bg-gradient-to-r from-[#66D3E1] to-[#96FFAD] bg-clip-text '>
                            <h2>Android and iOS compatible </h2>
                        </div>
                        <div className='flex flex-col items-center space-y-7 lg:space-y-0  lg:flex-row lg:justify-end lg:space-x-4 lg:pt-[51px] pt-[58px] '>
                            <div className=''>
                                <Image src={'/assets/images/landing/iosbtns.png'}
                                    alt='ios'
                                    width={225}
                                    height={69}
                                />
                            </div>
                            <div className=''>
                                <Image src={'/assets/images/landing/androidbt.png'}
                                    alt='android'
                                    width={225}
                                    height={69}
                                />
                            </div>

                        </div>
                    </div>
                    <div className='relative hidden lg:block'>
                        <Image src={'/assets/images/landing/BlankMob.png'}
                            alt='android'
                            width={276}
                            height={491}
                        />
                        <div className='absolute hidden xl:block top-[112px] left-[40px]'>
                        <Image src={'/assets/images/landing/liteInterior.png'}
                            alt='android'
                            width={200}
                            height={266}
                        />

                        </div>
                        <div className='absolute xl:hidden top-[112px] left-[40px]'>
                        <Image src={'/assets/images/landing/liteInterior.png'}
                            alt='android'
                            width={180}
                            height={240}
                        />

                        </div>
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