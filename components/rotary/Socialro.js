import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { saveAs } from 'file-saver';
import ReactDOMServer from 'react-dom/server';
const Socialro = () => {
    const handleDownloadPdf = async () => {
        const element = document.querySelector('.bg-gradient-to-b'); // Target the outermost container element

        // Delay the PDF generation for 1 second to allow the content to fully render
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/svg');

        const pdfWidth = canvas.width / 2.83; // Convert canvas width to PDF units (1 inch = 72 PDF units)
        const pdfHeight = canvas.height / 2.83; // Convert canvas height to PDF units

        const pdf = new jsPDF({
            orientation: 'p', // Portrait orientation
            unit: 'pt', // Use points as the unit of measurement
            format: [pdfWidth, pdfHeight], // Set custom page size
        });

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('rotary_page.pdf');
    };
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
        <div className='instagram-icon'>
              <Link href={'https://www.instagram.com/ashutosh._.kr/'}>
            
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
          <div onClick={handleDownloadPdf}>
            <Image src="/pdf.png" alt="WhatsApp Logo" width={50} height={50} />
            <p className='text-[12px]'>Download PDF</p>
        </div>
    </div>
  )
}

export default Socialro