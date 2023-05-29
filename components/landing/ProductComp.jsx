import React, { useState } from 'react'
import Image from 'next/image'

function ProductComp({ text, img }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    return (
        <div >
            <div className={`h-[482px] xl:h-[511px] mx-auto  w-[320px] xl:w-[385px] rounded-2xl p-1 ${isHovered ? 'bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]' : ''
                }`} onMouseEnter={handleHover}
                onMouseLeave={handleHover}>
                <div className='h-[474px] xl:h-[503px] w-[312px]  xl:w-[377px] rounded-2xl  bg-white'>
                    <div className='flex flex-col  items-center'>
                        <div className='pt-8'>
                            <p className='text-sm xl:text-xl'>{text} </p>
                        </div>

                        <div className='pt-[52px] hidden xl:block'>
                            <Image src={img}
                                alt='card1'
                                height={301}
                                width={315}
                            />
                        </div>
                        <div className='pt-16 xl:hidden'>
                            <Image src={img}
                                alt='card1'
                                height={353}
                                width={280}
                            />
                        </div>
                        <div className='w-[138px] xl:w-[165px] h-9 xl:h-10 text-xs xl:text-base  pt-5'>
                            <button className={`text-center w-full py-[5px] rounded-[10px] ${isHovered ? 'bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] text-white' : 'bg-black text-white'
                                }`}
                            >BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComp