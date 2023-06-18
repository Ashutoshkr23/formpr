//import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartNav } from '@/components';
import Image from 'next/image';
import SortBy from '@/components/ProfilePage/SortBy';
import SearchByName from '@/components/ProfilePage/SearchByName';
import ToggleSwtich from '@/components/ToggleSwtich';
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';
import moment from 'moment';
import Link from 'next/link';
import DatePicker from 'react-datepicker';


const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const router = useRouter()

  const [userAllRemainder, setuserAllRemainder] = useState([])

  const [getUserRemaindersCalled, setgetUserRemaindersCalled] = useState(false)

  const currentTime = moment();
  const formattedTime = currentTime.format('DD-MM-YYYY HH:mm');

  async function getUserRemainders() {
    if (getUserRemaindersCalled) {
      return;
    }

    setuserAllRemainder([])

    setgetUserRemaindersCalled(!getUserRemaindersCalled);

    const session = await getSession();

    const userEmail = session?.user?.email;

    const sendDataToAPI = { userEmail }

    const gettingUserRemainder = await axios.post('http://localhost:3000/api/getRemainder', sendDataToAPI);

    return setuserAllRemainder(gettingUserRemainder?.data?.userRemainderList);
  }


  const [userRemainder, setuserRemainder] = useState([]);

  const [userName, setuserName] = useState('');
  const handleuserNameChange = (event) => {
    setuserName(event.target.value);
  };

  const [userContactNumber, setuserContactNumber] = useState('');
  const handleuserContactNumberChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setuserContactNumber(inputValue);
    }
  };

  const [userCustomMessage, setuserCustomMessage] = useState('');
  const handleuserCustomMessageChange = (event) => {
    setuserCustomMessage(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [yourDate, setyourDate] = useState('')
  const [isDate, setisDate] = useState(false)

  const [editingReminder, seteditingReminder] = useState(true)

  const [reminderID, setreminderID] = useState('')

  const editARemainder = async (idOfTheItem) => {
    setgetUserRemaindersCalled(!getUserRemaindersCalled);
    const id = idOfTheItem;
    setreminderID(id)

    seteditingReminder(!editingReminder)
    if (editingReminder) {
      const response = await axios.post('http://localhost:3000/api/reminder/verifyReminderID', { id });
      const data = response.data.remainder
      setuserName(data.name);
      setuserContactNumber(data.contactNumber);
      setuserCustomMessage(data.customMessage);;
      setyourDate(data.customDate);
      setisDate(true)
    }
  };

  const updateReminder = async () => {
    const itemID = reminderID;
    if (isSaveDisabled) {
      return; // Don't perform update if inputs are empty or contact number has non-numeric characters
    }
    const data = { userName, userContactNumber, itemID, userCustomMessage, selectedDate };
    const response = await axios.post('http://localhost:3000/api/reminder/updateReminder', data);
    seteditingReminder(!editingReminder)
    getUserRemainders();
  };

  const isSaveDisabled = !userName || !userContactNumber || !/^\d+$/.test(userContactNumber) || !selectedDate || !userCustomMessage; // Check if input values are empty or contact number has non-numeric characters

  const deleteARemainder = async (idOfTheItem) => {
    const itemId = idOfTheItem;
    const data = { itemId };

    try {
      // Call your delete API endpoint here
      await axios.post('http://localhost:3000/api/deleteARemainder', data);

      // Remove the deleted item from the userAllRemainder state
      setuserAllRemainder(prevRemainders => prevRemainders.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const [setReminderTD, setsetReminderTD] = useState(false)
  function setReminderTDChange() {
    if (setReminderTD) {
      setsetReminderTD(false)
    } else if (!setReminderTD) {
      setsetReminderTD(true)
    }
  }

  useEffect(() => {
    getUserRemainders();
  }, [])

  const currentDate = new Date();
  const minDate = new Date(currentDate.getTime());
  const maxDate = new Date(currentDate.getTime() + 31556952000);
  const minTime = new Date(currentDate.getTime());
  const maxTime = new Date(currentDate.getTime() + 100000000);

  return (
    <>
      {editingReminder
        && <CartNav />
        && <ToggleSwtich
          outlineCSS='h-[47px] w-[94px]'
          circleCSS='h-[34px] w-[34px]'
          rightSideCircleCSS='translate-x-12 bg-black'
          boolean={setReminderTD}
        />
        && <div className="profile-page max-w-6xl mx-auto mt-24">
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
      }

      {editingReminder
        && <div className='max-w-[1208px] mx-auto mt-8'>
          <div className='flex justify-between'>
            <div className='flex font-bold capitalize bg-white drop-shadow-xl rounded-xl text-sm'>
              <div className={`whitespace-nowrap  m-auto px-6 rounded-xl py-2 cursor-pointer ${activeIndex === 0 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(0)}>
                my contacts
              </div>
              <div className={`whitespace-nowrap  m-auto px-6 rounded-xl py-2 cursor-pointer ${activeIndex === 1 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(1)}>
                Total reminders set
              </div>
              <div className={`whitespace-nowrap  m-auto px-6 rounded-xl py-2 cursor-pointer ${activeIndex === 2 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(2)}>
                total cards bought
              </div>
              <div className={`whitespace-nowrap  m-auto px-6 rounded-xl py-2 cursor-pointer ${activeIndex === 3 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(3)}>
                reminder history
              </div>
            </div>
            <SortBy />
            <SearchByName />
          </div>
        </div>
      }

      {editingReminder
        && <div className='max-w-6xl mx-auto'>
          <div className='mt-8 flex'>
            <div className='w-full'>
              <table className="table-auto w-full text-sm">
                <thead>
                  <tr className='text-[#4D6472] text-left capitalize'>
                    <th className="px-4 py-2 font-medium">name</th>
                    <th className="px-4 py-2 font-medium w-[128px] text-center">date entered</th>
                    <th className="px-4 py-2 font-medium text-center">set reminder</th>
                    <th className="px-4 py-2 font-medium w-[137px]">reminder date</th>
                    <th className="px-4 py-2 font-medium text-center">title</th>
                    <th className="px-4 py-2 font-medium w-[163px] text-center">edit reminder</th>
                  </tr>
                </thead>
                <tbody>
                  {userAllRemainder?.map((item, index) => (
                    <tr key={index}>
                      <td className="border-0 px-4 py-2">{item.name}</td>
                      <td className="border-0 px-4 py-2 text-center">{moment(item.createdAt).format("DD-MM-YY HH:mm").slice(0, 8)}</td>
                      <td className={`${(item.name).length === 0 ? "pointer-events-auto" : "pointer-events-none"} flex my-4`} onClick={() => editARemainder(item._id)}>
                        <ToggleSwtich
                          outlineCSS='h-[35px] w-[70px]'
                          circleCSS='h-[22px] w-[22px]'
                          rightSideCircleCSS='translate-x-9 bg-black'
                          offText='off'
                          onText='on'
                          boolean={(item.name).length === 0 ? false : true}
                        />
                      </td>
                      <td className="border-0 px-4 py-2 text-center">{(item.name.length === 0 ? "-" : ((item.customDate) > formattedTime ? (item.customDate) : 'Expired')).slice(0, 8)}</td>
                      <td className="border-0 px-4 py-2 text-center">{item.customMessage}</td>
                      <td className='inline-flex items-center gap-2 uppercase border-2 border-black rounded-xl py-2 px-4 text-[#4D6472] -mt-3 cursor-pointer' onClick={() => editARemainder(item._id)}>
                        edit reminder<Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='capitalize text-[#4D6472] font-bold space-y-1 pl-4'>
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
      }

      {!editingReminder
        && <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[547px] h-[423px] border rounded-3xl'>
          <div className='capitalize text-red-600 text-sm absolute top-[40px] left-[28px] cursor-pointer' onClick={editARemainder}>cancel</div>
          <div className='capitalize flex justify-center font-bold text-3xl mt-8'>reminder</div>
          <div className='px-6 space-y-4 mt-8'>
            <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userName} onChange={handleuserNameChange} placeholder="Enter Name" />
            <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userContactNumber} onChange={handleuserContactNumberChange} placeholder="Enter Contact Number" />
            <input className='w-full py-[6px] h-20 pl-4 pb-[46px] text-left rounded-lg border px-4 flex-grow outline-none' type="text" value={userCustomMessage} onChange={handleuserCustomMessageChange} placeholder="Custom Message" />
            {isDate && <DatePicker
              className={`placeholder-black text-center w-full py-[6px] rounded-lg border px-4`}
              selected={selectedDate} onChange={handleDateChange}
              showTimeSelect
              minDate={minDate}
              maxDate={maxDate}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText={yourDate} />
            }
            {!isDate && <DatePicker
              className={`text-center w-full py-[6px] rounded-lg border px-4`}
              selected={selectedDate} onChange={handleDateChange}
              showTimeSelect
              minDate={minDate}
              maxDate={maxDate}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText={"Select Date & Time"} />
            }
          </div>
          <div onClick={updateReminder} disabled={isSaveDisabled} className={`${isSaveDisabled ? 'disabled cursor-not-allowed opacity-40' : 'cursor-pointer'} flex justify-center uppercase mt-4`}>
            <div className='bg-black px-4 py-2 text-white font-bold rounded-xl'>
              set reminder
            </div>
          </div>
        </div>
      }
    </ >
  )
}

export default Profile