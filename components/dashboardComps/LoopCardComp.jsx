import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { CartContext } from '@/context/CartContext';
import { useRouter } from 'next/router';

function LoopCardComp({ text, img, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const { cartItems, plusCartFunc } = useContext(CartContext);
    const router = useRouter()

    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    return (
        <div onClick={() => {
            let id = cartItems[index - 1]._id
            plusCartFunc(id)
            router.push("/cart")
        }}>
            <div className={`h-[457px] lg:h-[511px]  w-[344px] lg:w-[385px] rounded-2xl p-1 ${isHovered ? 'bg-gradient-to-br from-[#66D3E1] to-[#96FFAD]' : ''
                }`} onMouseEnter={handleHover}
                onMouseLeave={handleHover}>
                <div className='h-[449px] lg:h-[503px] w-[336px] lg:w-[377px] rounded-2xl  bg-white'>
                    <div className='flex flex-col  items-center'>
                        <div className='pt-8'>
                            <p className='text-sm lg:text-xl'>{text} </p>
                        </div>

                        <div className='pt-[52px] hidden lg:block'>
                            <Image src={img}
                                alt='card1'
                                height={301}
                                width={315}
                            />
                        </div>
                        <div className='pt-16 lg:hidden'>
                            <Image src={img}
                                alt='card1'
                                height={353}
                                width={280}
                            />
                        </div>
                        <div className='w-[138px] lg:w-[165px] h-9 lg:h-10 text-xs lg:text-base  pt-5'>
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

export default LoopCardComp
