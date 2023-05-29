import React, { useState } from 'react'
import Image from 'next/image';
import {  IoMdAddCircle, } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';


function Card({ cardStyle, heading, headingStyle, text, textStyle, img, frontContent, backContent , btncolor }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <div className={`card ${isFlipped ? 'flipped' : ''} `}>
                <div className={` relative w-[345px]  h-[230px] md:w-[500px] md:h-[336px] `}>
                    <div className='card-inner '>
                        <div className={`card-front  w-[345px]  h-[230px] md:w-[500px] md:h-[336px] rounded-[20px] `}>
                            <div className={` ${cardStyle}`}>
                                <h1 className={headingStyle}>{heading}</h1>
                                <h3 className={textStyle}>{text}</h3>
                                {img && (
                                    <div className='hidden md:block absolute bottom-0 right-0'>
                                        <Image src={img} alt='benefit' width={331} height={336} />
                                    </div>
                                )}
                                {img && (
                                    <div className='md:hidden absolute bottom-0 right-0'>
                                        <Image src={img} alt='benefit' width={228} height={232} />
                                    </div>
                                )}
                            </div>
                            
                            <div className='absolute bottom-4 right-8'>
                                <IoMdAddCircle onClick={handleFlip} size={32} color={btncolor} />
                            </div>
                        </div>
                        <div className={`card-back  w-[345px]  h-[230px] md:w-[500px] md:h-[336px] rounded-[20px]`}>
                            <div className={`${cardStyle} p-8 text-[16px] sm:text-[20px] md:text-[20px] `}>
                                <p>
                                    {backContent}
                                </p>
                            </div>
                           
                            <div className='absolute bottom-4 right-8'>
                                <RxCrossCircled onClick={handleFlip} size={32} color='black' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Card;
