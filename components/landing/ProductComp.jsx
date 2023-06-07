import React, { useState } from 'react'
import Image from 'next/image'

function ProductComp({ text, img, content, cardtype, text2 , offering1, offering2}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    return (
        <div className='flex flex-col hover:scale-105 '>
            <div className=' relative z-20 ml-3 -mb-5  w-[116px] h-9 rounded-lg bg-black pt-2'>
                <p className='text-center  font-semibold text-xs text-white'>{cardtype}</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className={`h-[600px] border relative p-1 mx-auto w-[280px] mobile:w-[320px] xl:w-[385px] rounded-2xl  ${isHovered ? 'bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] border-0' : 'border'
                    }`} onMouseEnter={handleHover}
                    onMouseLeave={handleHover}>

                    <div className='h-full w-full rounded-2xl  bg-white'>
                        <div className='flex flex-col  items-center'>
                            <div className='pt-8'>
                                <p className='text-sm xl:text-xl'>{text} </p>
                            </div>

                            <div className='mt-[40px] pt-3 relative hidden xl:block'>
                                <div className='h-80 w-[315px]'>
                                <Image src={img}
                                    alt='card1'
                                    height={301}
                                    width={315}
                                    quality={100}
                                />
                                </div>
                                {isHovered && (
                                    <div className="absolute  top-0 inset-0 flex backdrop-filter backdrop-blur  text-center">
                                        <div className='h-full flex items-center w-full px-4 bg-white bg-opacity-30 text-opacity-100'>
                                        <p className="my-auto ">{content}</p>
                                        </div>
                                    </div>
                                )}

                            </div>
                            <div className='mt-12 pt-4 xl:hidden'>
                                <Image src={img}
                                    alt='card1'
                                    height={353}
                                    width={280}
                                    quality={100}
                                />
                            </div>
                            <p className='font-medium text-xs text-[#686A6C]'>{text2} </p>
                            <div className='w-[138px] xl:w-[165px] h-9 xl:h-10 text-xs xl:text-base  pt-5'>
                                <button className={`buynow text-center w-full py-[5px] font-bold rounded-[10px] ${isHovered ? 'bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] text-black' : 'bg-black text-white'
                                    }`}
                                >BUY NOW</button>
                            </div>
                            <div className="flex-col w-full px-8 mt-10 ">
                                <div className='flex w-full' >
                                    <Image height={20} width={20} src={"/assets/images/landing/CheckMark.svg"} alt="checkmark" />
                                    <p className='text-xs ml-4'>{offering1}</p>
                                </div>
                                <div className='flex w-full mt-4' >
                                    <Image height={20} width={20} src={"/assets/images/landing/CheckMark.svg"} alt="checkmark" />
                                    <p className='text-xs ml-4'>{offering2}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComp
