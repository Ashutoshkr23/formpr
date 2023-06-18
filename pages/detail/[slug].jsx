import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

const Contact = () => {
  const [contactData, setContactData] = useState(null);

  const router = useRouter();
  useEffect(() => {
    const { slug } = router.query;
    console.log(slug);
    async function fetchContact() {
      try {
        const res = await fetch(`/api/handleFormData?cuuid=${slug}`);
        const data = await res.json();
        if (data.card) {
          setContactData(data.card);
        }
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    fetchContact();
  }, [router.query]);

  return (
    <div>
      {contactData && (
        <>
          <p>{contactData.bio}</p>
          <p>Name: {contactData.name}</p>
          <p>Role: {contactData.role}</p>
          {/* Render other contact details as needed */}
        </>
      )}
    </div>
  );
};

export default Contact;
