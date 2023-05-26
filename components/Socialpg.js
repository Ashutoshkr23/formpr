import React from 'react'
import Link from 'next/link';
import Image from 'next/image'


const Socialpg = ({text1,type}) => {
  return (
    <div className='grid grid-cols-3 gap-y-11 gap-x-14 mt-8 '>

        <div className=''>
            <Link href={'#'}>
            
            <Image src={`/assets/images/social/${type}/watsp.png`}  alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Whatsapp</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src={`/assets/images/social/${type}/email.png`} alt="gmail Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1} pl-1`}>Gmail</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src={`/assets/images/social/${type}/linked.png`}  alt="linkedin Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>LinkedIn</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src={`/assets/images/social/${type}/insta.png`}  alt="instagram Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Instagram</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src={`/assets/images/social/${type}/facebook.png`}  alt="facebook Logo" width={50} height={50} />
            </Link>
            <p className={`text-[12px] ${text1}`}>Facebook</p>
        </div>
        <div>
            <Link href={'#'}>
            
            <Image src={`/assets/images/social/${type}/pdf.png`}  alt="deckLogo" width={50} height={50} />
            </Link>
            <p className={`text-[10px] ${text1}`}>Download PDF</p>
        </div>
    </div>
  )
}

export default Socialpg