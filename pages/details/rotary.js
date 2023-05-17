import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { saveAs } from 'file-saver'; // Import the file-saver library
import ProfileImg from '@/components/ProfileImg';
import Bio from '@/components/Bio';
import Social from '@/components/Social';
import Image from 'next/image';



const downloadVCard = () => {
    // Create a vCard string from the contact data
    const vCard = `BEGIN:VCARD
FN:"Sukumaran Nair"
TEL;TYPE=CELL:"+919819697361"
EMAIL;:"ahga@gsvu"
END:VCARD`;

    // Convert the vCard string to a Blob object
    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });

    // Save the Blob as a file using the file-saver library
    saveAs(blob, 'hello.vcf');
  };
const rotary = () => {
  return (
    <div className='bg-black'>
        <div className='bg-gradient-to-b from-[#00246C] to-[#009999] sm:w-[640px]'></div>
        <div className='relative px-6 bg-gradient-to-b from-[#FFFFFF] to-[#B0B0B0] mx-auto h-[612px] w-[351px] rounded-[20px]'>

        <div className='-top-16 inset-0 mx-auto absolute h-[100px] w-[100px] '>      <ProfileImg/></div>  

<div className='flex justify-center pt-[52px] font-semibold text-[20px]'>name</div>
<div className='flex justify-center mt-[11px] font-semibold text-[16px]'>Design Lead</div>
<div><Bio phone={558555553}/></div> 
<div><Social/></div> 
<div className=''><button className='  bg-black font-bold text-[20px] text-white h-[50px] w-[304px] rounded-[14px] mt-[31px]' onClick={downloadVCard}>SAVE CONTACT</button>  </div>  

</div>
        
    </div> 
  )
}

export default rotary