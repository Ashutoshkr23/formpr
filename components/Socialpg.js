import React from 'react'
import Link from 'next/link';
import Image from 'next/image'


const Socialpg = ({text1}) => {
  return (
    <div className='grid grid-cols-3 gap-y-11 gap-x-14 mt-8 '>

        <div>
            <Link href={'#'}>
            
            <Image src="/whatsap.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Whatsapp</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src="/gmail.png" alt="gmail Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Gmail</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src="/linkedin.png" alt="linkedin Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>LinkedIn</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src="/instagram.png" alt="instagram Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Instagram</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src="/facebook.png" alt="facebook Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Facebook</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src="/deck.png" alt="deckLogo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Our Deck</p>
        </div>
    </div>
  )
}

export default Socialpg