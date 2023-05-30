import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { saveAs } from 'file-saver'; // Import the file-saver library
import ProfileImg from '@/components/ProfileImg';
import Bio from '@/components/Bio';
import Social from '@/components/Social';
import Image from 'next/image';
//import Navbar from '@/components/Navbar';

export default function ContactDetails() {
  const router = useRouter();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const { slug } = router.query;
// console.log(slug)
    async function fetchContact() {
      const res = await fetch(`/api/contact?cardUuid=${slug}`);
      const data = await res.json();
      if (data.contact) {
        setContact(data.contact);
      }
      console.log(contact)
    }

    fetchContact();
  }, [router.query]);

  const downloadVCard = () => {
    // Create a vCard string from the contact data
    const vCard = `BEGIN:VCARD
FN:${contact.firstName} ${contact.lastName}
TEL;TYPE=CELL:${contact.mobileNumber}
EMAIL;:${contact.email}
END:VCARD`;

    // Convert the vCard string to a Blob object
    const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });

    // Save the Blob as a file using the file-saver library
    saveAs(blob, `${contact.firstName} ${contact.lastName}.vcf`);
  };
// const name=contact.firstName +" "+ contact.lastName;
// console.log(name)
  return (
    <div className='bg-black '>

<div className=" bg-gradient-to-b from-[#D2FFEC] via-[#F16869] to-[#FF932F] w-full mx-auto sm:w-[640px] pt-[146px]">
{contact ? (
<div className='relative px-6 bg-gradient-to-b from-[#FFFFFF] to-[#B0B0B0] mx-auto h-[612px] w-[351px] rounded-[20px]'>


  
      <div className='-top-16 inset-0 mx-auto absolute h-[100px] w-[100px] '>      <ProfileImg/></div>  

          <div className='flex justify-center pt-[52px] font-semibold text-[20px]'>{contact.firstName} {contact.lastName}</div>
          <div className='flex justify-center mt-[11px] font-semibold text-[16px]'>Design Lead</div>
      <div><Bio phone={contact.mobileNumber}/></div> 
       <div><Social/></div> 
     <div className=''><button className='  bg-black font-bold text-[20px] text-white h-[50px] w-[304px] rounded-[14px] mt-[31px]' onClick={downloadVCard}>SAVE CONTACT</button>  </div>  

      
</div>
) : (
  <p>Loading...</p>
)} 
     <div className='text-[10px] flex justify-center mt-8 pb-[29px]'>made with love by <Image className='ml-3' alt='loop' src={'/loop.png'} width={27} height={12}/></div>
    </div>
    </div>
  );
}

