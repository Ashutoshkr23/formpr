import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';

const EditForm = () => {
  const { data: session } = useSession();
  const [uuid, setUuid] = useState(null);
  const [contact, setContact] = useState(null);
  const [editField, setEditField] = useState(null);

  const fetchUuid = async () => {
    try {
      const response = await axios.get(`/api/userprofile?email=${session.user.email}`);
      setUuid(response.data.uuid);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchContact = async () => {
    try {
      const response = await axios.get(`/api/contact?uuid=${uuid}`);
      setContact(response.data.contact);
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

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleSave = async (field, value) => {
    try {
      await axios.put(`/api/contact?uuid=${uuid}&field=${field}&value=${value}`);
      setContact({
        ...contact,
        [field]: value,
      });
      setEditField(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center'>
      {contact ? (
        <div>
          <h1>Edit Contact</h1>

          <div className='mt-10'>
            <label htmlFor='firstName'>First Name:</label>
            {editField === 'firstName' ? (
              <div>
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={contact.firstName}
                  onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                />
                <button onClick={() => handleSave('firstName', contact.firstName)}>Save</button>
              </div>
            ) : (
              <div>
                <span>{contact.firstName}</span>
                <button onClick={() => handleEdit('firstName')}>Edit</button>
              </div>
            )}
          </div>

          <div>
            <label htmlFor='lastName'>Last Name:</label>
            {editField === 'lastName' ? (
              <div>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={contact.lastName}
                  onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                />
                <button onClick={() => handleSave('lastName', contact.lastName)}>Save</button>
              </div>
            ) : (
              <div>
                <span>{contact.lastName}</span>
                <button onClick={() => handleEdit('lastName')}>Edit</button>
              </div>
            )}
          </div>

          <div>
            <label htmlFor='mobileNumber'>Mobile Number:</label>
            {editField === 'mobileNumber' ? (
              <div>
                <input
                  type='text'
                  id='mobileNumber'
                  name='mobileNumber'
                  value={contact.mobileNumber}
                  onChange={(e) => setContact({ ...contact, mobileNumber: e.target.value })}
                />
                <button onClick={() => handleSave('mobileNumber', contact.mobileNumber)}>Save</button>
              </div>
            ) : (
              <div>
                <span>{contact.mobileNumber}</span>
<button onClick={() => handleEdit('mobileNumber')}>Edit</button>
</div>
)}
</div>
<div>
        <label htmlFor='companyNumber'>Company Number:</label>
        {editField === 'companyNumber' ? (
          <div>
            <input
              type='text'
              id='companyNumber'
              name='companyNumber'
              value={contact.companyNumber}
              onChange={(e) => setContact({ ...contact, companyNumber: e.target.value })}
            />
            <button onClick={() => handleSave('companyNumber', contact.companyNumber)}>Save</button>
          </div>
        ) : (
          <div>
            <span>{contact.companyNumber}</span>
            <button onClick={() => handleEdit('companyNumber')}>Edit</button>
          </div>
        )}
      </div>

      <div>
        <label htmlFor='email'>Email:</label>
        {editField === 'email' ? (
          <div>
            <input
              type='email'
              id='email'
              name='email'
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
            <button onClick={() => handleSave('email', contact.email)}>Save</button>
          </div>
        ) : (
          <div>
            <span>{contact.email}</span>
            <button onClick={() => handleEdit('email')}>Edit</button>
          </div>
        )}
      </div>

      <div>
        <label htmlFor='companyLogo'>Company Logo:</label>
        {editField === 'companyLogo' ? (
          <div>
            <input
              type='text'
              id='companyLogo'
              name='companyLogo'
              value={contact.companyLogo}
              onChange={(e) => setContact({ ...contact, companyLogo: e.target.value })}
            />
            <button onClick={() => handleSave('companyLogo', contact.companyLogo)}>Save</button>
          </div>
        ) : (
          <div>
            <span>{contact.companyLogo}</span>
            <button onClick={() => handleEdit('companyLogo')}>Edit</button>
          </div>
        )}
      </div>

      <div>
        <label htmlFor='deck'>Deck:</label>
        {editField === 'deck' ? (
          <div>
            <input
              id='deck'
              name='deck'
              value={contact.deck}
              onChange={(e) => setContact({ ...contact, deck: e.target.value })}
            ></input>
            <button onClick={() => handleSave('deck', contact.deck)}>Save</button>
          </div>
        ) : (
          <div>
            <span>{contact.deck}</span>
            <button onClick={() => handleEdit('deck')}>Edit</button>
          </div>
        )}
      </div>
    </div>
  ) : (
    <p className='flex justify-center items-center'>
      You have not created any card yet, please create a card.
    </p>
  )}
</div>
);
};

export default EditForm;
               

