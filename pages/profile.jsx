//import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const { data: session } = useSession();
  const [account, setAccount] = useState('');
  const handleClick = async () => {

    try {
      // Make a PUT request to update the account
      const response = await axios.put('/api/userprofile', { email: session.user.email, account });

      // Handle the response
      if (response.status === 200) {
        // Account updated successfully
        setAccount('');
      } else {
        // Handle other status codes or error responses
        console.error('Failed to update account:', response.data);
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Error updating account:', error);
    }
  };


  return (
    <div>
      <div className='flex justify-center gap-4 mt-48'>
        <div>
          <Link href='/'>
            <BsInstagram className="text-4xl w-12 h-12" />
          </Link>
        </div>
        <div>
          <Link href='/'>
            <BsTwitter className="text-4xl w-12 h-12" />
          </Link>
        </div>


      </div>
      <div className='flex justify-center mt-10'>
        <label >
          Add wallet:
        </label>
        <input
          type="text"
          placeholder="wallet"
          value={account}
          className="border border-gray-300"
          onChange={(e) => setAccount(e.target.value)}

        />
        <button onClick={handleClick} className='bg-green-500 text-white ml-2'>ADD</button>

      </div>

    </div>
  )
}

export default Profile