import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const EditForm = () => {
  const { data: session } = useSession();
  const [uuid, setUuid] = useState(null);
  const [contact, setContact] = useState(null);

  const fetchUuid = async () => {
    try {
      const response = await axios.get(`/api/userprofile?email=${session.user.email}`);
      // console.log('email:', session.user.email);
      //  console.log('uuid:', response.data.uuid);
      setUuid(response.data.uuid);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchContact = async () => {
    try {
      const response = await axios.get(`/api/contact?uuid=${uuid}`);
      setContact(response.data.contact);
      console.log(uuid)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUuid();
  }, [session]);

  useEffect(() => {
    if (uuid) {
      fetchContact();
    }
  }, [uuid]);

  return (
    <div className='flex justify-center'>
      {contact ? (
        <div>
                <h1>Edit Contact</h1>

                <div className='mt-10'>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={contact.firstName}
                
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={contact.lastName}
                //onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={contact.mobileNumber}
                //onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="companyNumber">Company Number:</label>
              <input
                type="text"
                id="companyNumber"
                name="companyNumber"
                value={contact.companyNumber}
              //  onChange={handleInputChange}
              />
              </div>
        <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
              />
            </div>

            <div>
              <label htmlFor="companyLogo">Company Logo:</label>
              <input
                type="text"
                id="companyLogo"
                name="companyLogo"
                value={contact.companyLogo}
                //onChange={handleInputChange}
              />
              </div>
              <div>
              <label htmlFor="deck">Deck:</label>
              <input
                id="deck"
                name="deck"
                value={contact.deck}
               // onChange={handleInputChange}
              ></input>
            </div>
        </div>
      ) : (
        <p className='flex justify-center items-center'>you have not created any card yet,please create a card.</p>
      )}
    </div>
  );
};

export default EditForm;
