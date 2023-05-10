import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import { saveAs } from 'file-saver'; // Import the file-saver library

export default function ContactDetails() {
  const router = useRouter();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const { slug } = router.query;
    // //console.log(slug)
    async function fetchContact() {
      const res = await fetch(`/api/contact?uuid=${slug}`);
      const data = await res.json();
      if (data.contact) {
        setContact(data.contact);
      }
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

  return (
    <div>
      {contact ? (
        <div>
          <h1>Name: {contact.firstName} {contact.lastName}</h1>
          <p>Mobile Number: {contact.mobileNumber}</p>
          <p>Company Number: {contact.companyNumber}</p>
          <p>Email: {contact.email}</p>
          <p>Company Logo: {contact.companyLogo}</p>
          <p>Deck: {contact.deck}</p>
          <button className='bg-green-600 text-white' onClick={downloadVCard}>Add Contact</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}


