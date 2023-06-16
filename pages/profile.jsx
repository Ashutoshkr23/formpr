//import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { CartNav } from '@/components';
import Image from 'next/image';
import SortBy from '@/components/ProfilePage/SortBy';
import SearchByName from '@/components/ProfilePage/SearchByName';


const Profile = () => {
  const { data: session } = useSession();
  const [account, setAccount] = useState('');
  /* const handleClick = async () => {

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
  }; */

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const Data = [
    {
      Name: 'account 1',
      DateEntered: "2017",
      Quantity: "1",
      Download: "Download"
    },
    {
      Name: 'account 2',
      DateEntered: "2017",
      Quantity: "1",
      Download: "Download"
    },
    {
      Name: 'account 3',
      DateEntered: "2017",
      Quantity: "1",
      Download: "Download"
    },
    {
      Name: 'account 4',
      DateEntered: "2017",
      Quantity: "1",
      Download: "Download"
    },
    {
      Name: 'account 5',
      DateEntered: "2017",
      Quantity: "1",
      Download: "Download"
    }
  ]

  const [sortBy, setsortBy] = useState(false)

  function openSortBy() {
    if (sortBy) {
      setsortBy(false)
    } else if (!sortBy) {
      setsortBy(true)
    }
  }

  return (
    <>
      <CartNav />
      <div className="profile-page max-w-6xl mx-auto mt-24">
        <div className="profile-section flex items-center">
          <div className="left-side mr-28">
            <Image width={130} height={130} src={'/assets/images/profilePage/profilePic.png'} alt="profile pic"></Image>
          </div>
          <div className="right-side">
            <div className="username capitalize text-3xl font-bold mb-6 ml-4">john doe</div>
            <div className="wallet-address capitalize font-bold ml-4 text-sm">wallet address</div>
            <div className="waeelt-id border py-1 px-4 border-dotted rounded-3xl font-bold my-2">0x7B2d0D3DE9e060D3Cf557f97b9a8c143C9789CE8</div>
            <div className="stay-tuned text-[#686A6C] text-xs ml-4">*Stay tuned for upcoming offers with your wallet address</div>
          </div>
        </div>
      </div>

      <div className='max-w-[1208px] mx-auto mt-8'>
        <div className='flex justify-between'>
          <div className='flex font-bold capitalize bg-white drop-shadow-xl rounded-xl'>
            <div className={`px-12 rounded-xl py-2 cursor-pointer ${activeIndex === 0 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(0)}>
              my contacts
            </div>
            <div className={`px-12 rounded-xl py-2 cursor-pointer ${activeIndex === 1 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(1)}>
              Total reminders set
            </div>
            <div className={`px-12 rounded-xl py-2 cursor-pointer ${activeIndex === 2 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(2)}>
              total cards bought
            </div>
          </div>
          <SortBy />
          <SearchByName />
        </div>
      </div>

      <div className='max-w-6xl mx-auto'>
        <div className='mt-8 flex'>
          <div className='w-full'>
            <table className="table-auto w-full text-sm">
              <thead>
                <tr className='text-[#4D6472] text-left'>
                  <th className="px-4 py-2 font-medium">Name</th>
                  <th className="px-4 py-2 font-medium">Date Entered</th>
                  <th className="px-4 py-2 font-medium">Quantity</th>
                  <th className="px-4 py-2 font-medium">Download</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((item, index) => (
                  <tr key={index}>
                    <td className="border-0 px-4 py-2">{item.Name}</td>
                    <td className="border-0 px-4 py-2">{item.DateEntered}</td>
                    <td className="border-0 px-4 py-2">{item.Quantity}</td>
                    <td className="border-0 px-4 py-2">{item.Download}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='capitalize text-[#4D6472] font-bold space-y-1'>
            <div className='cursor-pointer text-center'>a</div>
            <div className='cursor-pointer text-center'>b</div>
            <div className='cursor-pointer text-center'>c</div>
            <div className='cursor-pointer text-center'>d</div>
            <div className='cursor-pointer text-center'>e</div>
            <div className='cursor-pointer text-center'>f</div>
            <div className='cursor-pointer text-center'>g</div>
            <div className='cursor-pointer text-center'>h</div>
            <div className='cursor-pointer text-center'>i</div>
            <div className='cursor-pointer text-center'>j</div>
            <div className='cursor-pointer text-center'>k</div>
            <div className='cursor-pointer text-center'>l</div>
            <div className='cursor-pointer text-center'>m</div>
            <div className='cursor-pointer text-center'>n</div>
            <div className='cursor-pointer text-center'>o</div>
            <div className='cursor-pointer text-center'>p</div>
            <div className='cursor-pointer text-center'>q</div>
            <div className='cursor-pointer text-center'>r</div>
            <div className='cursor-pointer text-center'>s</div>
            <div className='cursor-pointer text-center'>t</div>
            <div className='cursor-pointer text-center'>u</div>
            <div className='cursor-pointer text-center'>v</div>
            <div className='cursor-pointer text-center'>w</div>
            <div className='cursor-pointer text-center'>x</div>
            <div className='cursor-pointer text-center'>y</div>
            <div className='cursor-pointer text-center'>z</div>
          </div>
        </div>
      </div>
    </ >
  )
}

export default Profile