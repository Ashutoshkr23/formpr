import React from 'react'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver'; // Import the file-saver library
import ProfileImg from '@/components/ProfileImg';
import Bio from '@/components/Bio';
import Social from '@/components/Social';
import Image from 'next/image';
import Socialro from '@/components/rotary/Socialro';
import Bioro from '@/components/rotary/Bioro';
import Profilero from '@/components/rotary/Profilero';
import RotaryLogo from '@/components/rotary/RotaryLogo';



const downloadVCard = () => {

  // Create a vCard string from the contact data
  const vCard = `BEGIN:VCARD
FN:Sukumaran Nair
TEL;TYPE=CELL:+919819697361
EMAIL;: siddharth@alphamintlabs.com
URL:rchiranandani.rotaryindia.org
END:VCARD`;

  // Convert the vCard string to a Blob object
  const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });

  // Save the Blob as a file using the file-saver library
  saveAs(blob, 'hello.vcf');
};
const rotary = () => {
  // function to convert page into pdf and download it 
 
  return (
    <div className='bg-black'>
      <div className='bg-gradient-to-b min-h-screen h-auto  relative pt-[146px] mx-auto  from-[#00246C] to-[#009999] sm:w-[640px]'>
        <div className='top-[55px]  inset-0 mx-auto absolute h-[150px] w-[150px] '>      <RotaryLogo /></div>
        <div className='relative px-6 bg-gradient-to-b   from-[#FFFFFF] to-[#B0B0B0] mx-auto h-[612px] w-[351px] rounded-[20px]'>
          
          <div className='-top-16 inset-0 mx-auto absolute h-[100px] w-[100px] '>      <Profilero/></div>

          <div className='flex justify-center pt-[52px] font-semibold text-[20px]'>Sukumaran Nair</div>
          <div className='flex justify-center mt-[11px] font-semibold text-[16px]'>Club President</div>
          <div><Bioro /></div>
          <div><Socialro  /></div>
          <div className=''><button className='  bg-black font-bold text-[20px] text-white h-[50px] w-[304px] rounded-[14px] mt-[31px]' onClick={downloadVCard}>SAVE CONTACT</button>  </div>

        </div>

        <div className='text-[10px] flex justify-center mt-8 pb-[29px] text-white'>made with love by <Image className='ml-[3px]' src={'/loopro.svg'} width={27} height={12}/></div>

      </div>

    </div>
  )
}

export default rotary