import React from 'react'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const Partners = () => {
  return (
    <>
      <div className='mt-20' id='partners'>
            <div className="relative overflow-hidden w-full">
                <div className='text-center mt-28'>
                    <h3>Dwellers of the loop</h3>
                    <h2 className='mt-2'>Our Partners</h2>
                </div>
                    {/* Creating a horizontal scrolling logo cloud */}

                    {/*Desktop view */}

                    <div className='hidden lg:flex lg:mt-20 ' >
                    <Marquee speed={100}>
                        
                        <Image src={'/assets/images/landing/partnerLogos/AMLBW.png'} height={98} width={282} className="mx-8" alt='AML Logo'/>
                        <Image src={'/assets/images/landing/partnerLogos/BravasLogoBW.png'} height={98} width={261} className="mx-8" alt='Bravas Digital Logo'/>
                        <Image src={'/assets/images/landing/partnerLogos/CeomitraLogoBW.png'} height={98} width={271} className="mx-8" alt='Ceomitra Logo'/>
                        <Image src={'/assets/images/landing/partnerLogos/RotaryLogoBW.png'} height={98} width={98} className="mx-8" alt="Rotary Logo"/>
                        <Image src={'/assets/images/landing/partnerLogos/AntalBW.png'} height={98} width={99} className="mx-8" alt="Antal Thane Logo"/>
                        <Image src={'/assets/images/landing/partnerLogos/BlackCabBW.png'} height={98} width={107} className="mx-8" alt="Black Cab Logo"/>
                        <Image src={'/assets/images/landing/partnerLogos/IABW.png'} height={61} width={200} className="mx-8" alt="Ingenious Advisors Logo"/>

                    </Marquee>
                    </div>

                      {/*Tablet Mobile view */}

                    <div className='mt-10 lg:hidden'>
                        
                    <Marquee className='flex lg:hidden' speed={100}>
                        
                        <Image src={'/assets/images/landing/partnerLogos/AMLBW.png'} height={49} width={141} className="mx-4" alt='AML Logo'/>
                        <Image src={'/assets/images/landing/partnerLogos/BravasLogoBW.png'} height={49} width={131} className="mx-4" alt='Bravas Digital Logo'/>
                        <Image src={'/assets/images/landing/partnerLogos/CeomitraLogoBW.png'} height={49} width={136} className="mx-4" alt='Ceomitra Logo'/>
                        <Image src={'/assets/images/landing/partnerLogos/RotaryLogoBW.png'} height={49} width={49} className="mx-4" alt="Rotary Logo"/>
                        <Image src={'/assets/images/landing/partnerLogos/AntalBW.png'} height={49} width={49} className="mx-4" alt="Antal Thane Logo"/>
                        <Image src={'/assets/images/landing/partnerLogos/BlackCabBW.png'} height={49} width={53} className="mx-4" alt="Black Cab Logo"/>
                        <Image src={'/assets/images/landing/partnerLogos/IABW.png'} height={31} width={100} className="mx-4" alt="Ingenious Advisors Logo"/>

                    </Marquee>
                    </div>



            </div>
        </div>
    </>
  )
}

export default Partners

