import React, { useState } from 'react'
import Image from 'next/image';
import { IoIosAddCircle, RxCrossCircled, IoMdAddCircle, } from 'react-icons/io';

function Card({ cardStyle, heading, headingStyle, text, textStyle, img, frontContent, backContent , btncolor }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>
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
                        <div className={`card-back  w-[345px]  h-[230px] md:w-[500px] md:h-[336px] rounded-[20px]   `}>
                            <div className={` ${cardStyle}`}>
                                <h1>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                    anim id est laborum.
                                </h1>
                            </div>
                           
                            <div className='absolute bottom-4 right-8'>
                                <IoMdAddCircle onClick={handleFlip} size={32} color='black' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;
