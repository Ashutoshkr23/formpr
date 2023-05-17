import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
const Socialro = () => {
  return (
    <div className='grid grid-cols-3 gap-y-11 mt-8 '>

        <div>
            <Link href={'/'}>
            
            <Image src="/whatsap.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-[12px]'>Whatsapp</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/gmailro.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-[12px]'>Gmail</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/linkedin.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-[12px]'>LinkedIn</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/instagram.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-[12px]'>Instagram</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/facebook.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-[12px]'>Facebook</p>
        </div>
        <div>
            <Link href={'/'}>
            
            <Image src="/pdf.png" alt="WhatsApp Logo" width={50} height={50} />
            </Link>
            <p className='text-[12px]'>Download PDF</p>
        </div>
    </div>
  )
}

export default Socialro