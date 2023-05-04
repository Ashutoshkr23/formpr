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

          <div className='mt-10 flex'>
            <label htmlFor='firstName'>First Name:</label>
            {editField === 'firstName' ? (
              <div className='flex' >
                <input
                  type='text'
                  id='firstName'
                  name='firstName'
                  value={contact.firstName}
                  onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
                />
                <p className='cursor-pointer' onClick={() => handleSave('firstName', contact.firstName)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>
              </div>
            ) : (
              <div className='flex'>
                <span>{contact.firstName}</span>
                <p  className='cursor-pointer'  onClick={() => handleEdit('firstName')}>   <svg className='w-5 '  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
              </div>
            )}
          </div>

          <div className='flex'> 
            <label htmlFor='lastName'>Last Name:</label>
            {editField === 'lastName' ? (
              <div className='flex'>
                <input
                  type='text'
                  id='lastName'
                  name='lastName'
                  value={contact.lastName}
                  onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
                />
                <p className='cursor-pointer' onClick={() => handleSave('lastName', contact.lastName)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>
              </div>
            ) : (
              <div className='flex'>
                <span>{contact.lastName}</span>
                <p  className='cursor-pointer'  onClick={() => handleEdit('lastName')}>   <svg className='w-5 '  fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
              </div>
            )}
          </div>

          <div className='flex'>
            <label htmlFor='mobileNumber'>Mobile Number:</label>
            {editField === 'mobileNumber' ? (
              <div className='flex'>
                <input
                  type='text'
                  id='mobileNumber'
                  name='mobileNumber'
                  value={contact.mobileNumber}
                  onChange={(e) => setContact({ ...contact, mobileNumber: e.target.value })}
                />
             
<p className='cursor-pointer' onClick={() => handleSave('mobileNumber', contact.mobileNumber)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>
              </div>
            ) : (
              <div className='flex'>
                <span>{contact.mobileNumber}</span>
                <p className='cursor-pointer' onClick={() => handleEdit('mobileNumber')}>   <svg className='w-5 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
</div>
)}
</div>
<div className='flex'>
        <label htmlFor='companyNumber'>Company Number:</label>
        {editField === 'companyNumber' ? (
          <div className='flex'>
            <input
              type='text'
              id='companyNumber'
              name='companyNumber'
              value={contact.companyNumber}
              onChange={(e) => setContact({ ...contact, companyNumber: e.target.value })}
            />
          

<p className='cursor-pointer' onClick={() => handleSave('companyNumber', contact.companyNumber)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>
          </div>
        ) : (
          <div className='flex'>
            <span>{contact.companyNumber}</span>
            <p  className='cursor-pointer' onClick={() => handleEdit('companyNumber')}>   <svg className='w-5 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
          </div>
        )}
      </div>

      <div className='flex'>
        <label htmlFor='email'>Email:</label>
        {editField === 'email' ? (
          <div className='flex'>
            <input
              type='email'
              id='email'
              name='email'
              value={contact.email}
              onChange={(e) => setContact({ ...contact, email: e.target.value })}
            />
         
         
<p className='cursor-pointer' onClick={() => handleSave('email', contact.email)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>

          </div>
        ) : (
          <div className='flex'>
            <span>{contact.email}</span>
            <p className='cursor-pointer'  onClick={() => handleEdit('email')}>   <svg className='w-5 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
          </div>
        )}
      </div>

      <div className='flex'>
        <label htmlFor='companyLogo'>Company Logo:</label>
        {editField === 'companyLogo' ? (
          <div className='flex'>
            <input
              type='text'
              id='companyLogo'
              name='companyLogo'
              value={contact.companyLogo}
              onChange={(e) => setContact({ ...contact, companyLogo: e.target.value })}
            />
            

<p className='cursor-pointer' onClick={() => handleSave('companyLogo', contact.companyLogo)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>
          </div>
        ) : (
          <div className='flex'>
            <span>{contact.companyLogo}</span>
            <p  className='cursor-pointer'  onClick={() => handleEdit('companyLogo')}>   <svg className='w-5 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
          </div>
        )}
      </div>

      <div className='flex'>
        <label htmlFor='deck'>Deck:</label>
        {editField === 'deck' ? (
          <div className='flex'>
            <input
              id='deck'
              name='deck'
              value={contact.deck}
              onChange={(e) => setContact({ ...contact, deck: e.target.value })}
            ></input>
         


<p className='cursor-pointer'  onClick={() => handleSave('deck', contact.deck)}><svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
</svg></p>
          </div>
        ) : (
          <div className='flex'>
            <span>{contact.deck}</span>
            <p  className='cursor-pointer'  onClick={() => handleEdit('deck')}>   <svg className='w-5 ' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
</svg></p>
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
               

