import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdAddCircle } from 'react-icons/io';
import { RxCrossCircled } from 'react-icons/rx';
import ScrollTrigger from 'react-scroll-trigger';

function Card({ cardStyle, heading, headingStyle, text, textStyle, img, frontContent, backContent, btncolor }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const onCardEnterViewport = () => {
    setIsCardVisible(true);
    setTimeout(() => {
      setIsTextVisible(true);
    }, 700); // Delay the text visibility by 1 second
    setTimeout(() => {
      setIsHeadingVisible(true);
    }, 500); 
  };

  return (
    <ScrollTrigger onEnter={onCardEnterViewport}>
      <div className={`card ${isFlipped ? 'flipped' : ''} ${isCardVisible ? 'card-visible' : ''}`} onClick={handleFlip}>
        <div className={`${
                isCardVisible ? '' : ''
              } relative w-[300px] mobile:w-[345px]  h-[230px] md:w-[450px] xl:w-[500px] md:h-[336px] `}>
          <div className='card-inner'>
            <div
              className={`card-front  w-[300px] mobile:w-[345px]  h-[230px] md:w-[450px] xl:w-[500px] md:h-[336px] rounded-[20px] `}
            >
              <div className={` ${cardStyle}`}>
                {isHeadingVisible && <h1 className={`${headingStyle} animate-text`}>{heading}</h1>}
                {isTextVisible && <h3 className={`${textStyle} animate-text`}>{text}</h3>}
                {img && (
                  <div className='hidden md:block absolute bottom-0 right-0'>
                    <Image src={img} alt='loop benefits' width={331} height={336} />
                  </div>
                )}
                {img && (
                  <div className='md:hidden absolute bottom-0 right-0'>
                    <Image src={img} alt='loop benefits' width={228} height={232} />
                  </div>
                )}
              </div>

              <div className='absolute bottom-4 right-8 hover:opacity-50 hover:cursor-pointer'>
                <IoMdAddCircle onClick={handleFlip} size={32} color={btncolor} />
              </div>
            </div>
            <div
              className={`card-back w-[300px] mobile:w-[345px]  h-[230px] md:w-[450px] xl:w-[500px] md:h-[336px] rounded-[20px] 
             `}
            >
              <div className={`${cardStyle} p-8 text-[14px] sm:text-[14px] md:text-[14px] m-auto ` }>
                <p className='items-center justify-center'>{backContent}</p>
              </div>

              <div className='absolute bottom-4 right-8'>
                <RxCrossCircled onClick={handleFlip} size={32} color='black' />
              </div>
            </div>
          </div>
        </div>
</div>
</ScrollTrigger>
);
}

export default Card;
