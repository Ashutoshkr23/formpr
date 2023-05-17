import React from 'react'
import Link from 'next/link';
import Image from 'next/image'


const Social = () => {
  return (
    <div className='grid grid-cols-3 gap-y-11 mt-8 '>

        <div>
            <Link href={'/'}>
            
            <Image src="/whatsap.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-12'>Whatsapp</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/gmail.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-12'>Gmail</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/linkedin.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-12'>LinkedIn</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/instagram.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-12'>Instagram</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/facebook.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-12'>Facebook</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/deck.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-12'>Our Deck</p>
        </div>
    </div>
  )
}

export default Social