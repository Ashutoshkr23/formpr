import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
export default function ContactDetails() {
    const router = useRouter();
    const [contact, setContact] = useState(null);
  
    useEffect(() => {
      const { slug } = router.query;
  
      async function fetchContact() {
        const res = await fetch(`/api/contact?uuid=${slug}`);
        const data = await res.json();
        if (data.contact) {
          setContact(data.contact);
        }
      }
  
      fetchContact();
    }, [router.query]);
  
    return (
      <div>
        {contact ? (
          <div>
            <h1>first Name: {contact.firstName}</h1>
            <h1>last Name:  {contact.lastName}</h1>
            <p>Mobile Number: {contact.mobileNumber}</p>
            <p>Company Number: {contact.companyNumber}</p>
            <p>Email: {contact.email}</p>
            <p>Company Logo: {contact.companyLogo}</p>
            <p>Deck: {contact.deck}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
  