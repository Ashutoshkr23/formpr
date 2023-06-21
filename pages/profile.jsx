//import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartNav } from '@/components';
import Image from 'next/image';
import SortBy from '@/components/ProfilePage/SortBy';
import SearchByName from '@/components/ProfilePage/SearchByName';
import ToggleSwtich from '@/components/ToggleSwtich';
import { useRouter } from 'next/router'
import { getSession, useSession } from 'next-auth/react';
import moment from 'moment';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FilterIcon from '@/components/ProfilePage/FilterIcon';


const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const router = useRouter()

  const { data: session } = useSession();

  const [userAllRemainder, setuserAllRemainder] = useState([])
  const [originalUserAllRemainder, setoriginalUserAllRemainder] = useState([])

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

    setoriginalUserAllRemainder(gettingUserRemainder?.data?.userRemainderList)

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

  const [enableDisableBackgroundCSS, setenableDisableBackgroundCSS] = useState('h-screen blur-none pointer-events-auto')

  const editARemainder = async (idOfTheItem) => {

    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

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

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  };

  const isSaveDisabled1 = !userName || !userContactNumber || !/^\d+$/.test(userContactNumber) || !selectedDate || !userCustomMessage; // Check if input values are empty or contact number has non-numeric characters

  const updateReminder = async () => {

    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    const itemID = reminderID;
    if (isSaveDisabled1) {
      return; // Don't perform update if inputs are empty or contact number has non-numeric characters
    }
    const data = { userName, userContactNumber, itemID, userCustomMessage, selectedDate };
    const response = await axios.post('http://localhost:3000/api/reminder/updateReminder', data);
    seteditingReminder(!editingReminder)
    getUserRemainders();

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  };

  const [editANameOnly, seteditANameOnly] = useState(true)
  const editAName = async (idOfTheItem) => {

    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    setgetUserRemaindersCalled(!getUserRemaindersCalled);
    const id = idOfTheItem;
    setreminderID(id)

    seteditANameOnly(!editANameOnly)
    if (editANameOnly) {
      const response = await axios.post('http://localhost:3000/api/reminder/verifyReminderID', { id });
      const data = response.data.remainder
      setuserName(data.name);
    }

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  };

  const isSaveDisabled2 = !userName
  const updateName = async () => {

    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    const itemID = reminderID;
    if (isSaveDisabled2) {
      return; // Don't perform update if inputs are empty or contact number has non-numeric characters
    }
    const data = { userName, itemID };
    const response = await axios.post('http://localhost:3000/api/reminder/editAName', data);
    seteditANameOnly(!editANameOnly)
    getUserRemainders();

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  };

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

  const currentDate = new Date();
  const minDate = new Date(currentDate.getTime());
  const maxDate = new Date(currentDate.getTime() + 31556952000);
  const minTime = new Date(currentDate.getTime());
  const maxTime = new Date(currentDate.getTime() + 100000000);

  const userAccountEmail = session?.user?.email;
  const [userAccountName, setuserAccountName] = useState('John Doe')
  const [userERC20Wallet, setuserERC20Wallet] = useState('x0ead706B3132ec0888dBd692753066f4635Db02as')
  const [stopGetUserDataFunction, setstopGetUserDataFunction] = useState(false)
  const [userAccountImage, setuserAccountImage] = useState('/assets/images/profilePage/profilePic.png')

  async function getUserData() {
    if (stopGetUserDataFunction) {
      return
    }

    const data = { userAccountEmail }
    const response = await axios.post('/api/profilePage/getUserDetails', data)
    if (response?.data?.getUserDetails?.name !== undefined) {
      setuserAccountName(response?.data?.getUserDetails?.name);
      setuserERC20Wallet(response?.data?.getUserDetails?.erc20WalletId);
      setuserAccountImage(response?.data?.getUserDetails?.avatar);
      setstopGetUserDataFunction(!stopGetUserDataFunction)
    }
  }

  getUserData();

  useEffect(() => {
    getUserRemainders();
  }, [])

  const block1ForActiveIndex0 = `xl:w-[200px] xl:max-w-[200px] lg:w-[241px] lg:max-w-[241px] w-[200px] max-w-[200px]`
  const block2ForActiveIndex0 = `xl:w-[150px] xl:max-w-[150px] lg:w-[241px] lg:max-w-[241px] w-[302px] max-w-[302px]`
  const block3ForActiveIndex0 = `xl:w-[150px] xl:max-w-[150px] lg:w-[241px] lg:max-w-[241px] w-[302px] max-w-[302px]`
  const block4ForActiveIndex0 = `xl:w-[150px] xl:max-w-[150px] xl:block hidden`
  const block5ForActiveIndex0 = `xl:w-[358px] xl:max-w-[358px] lg:w-[241px] lg:max-w-[241px] lg:block hidden`
  const block6ForActiveIndex0 = `xl:w-[200px] xl:max-w-[200px] lg:w-[243px] lg:max-w-[243px] w-[302px] max-w-[302px]`

  const handleSearch = (searchQuery) => {
    if (searchQuery.length === 0) {
      // If search query is empty, reset the userAllRemainder to its original value
      setuserAllRemainder(originalUserAllRemainder);
    } else {
      // Filter the array based on the search query
      const filteredRemainders = originalUserAllRemainder.filter((remainder) =>
        remainder.name.slice(0, searchQuery.length).toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Sort the filtered results (you can customize the sorting logic)
      const sortedRemainders = filteredRemainders.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      // Update the state with the filtered and sorted results
      setuserAllRemainder(sortedRemainders);
    }
  };

  return (
    <div className=''>
      <div className={`${enableDisableBackgroundCSS}`}>
        <CartNav />

        <div className='max-w-[1209px] mx-auto xl:pr-0 pr-4 text-right capitalize'>
          <ToggleSwtich
            outlineCSS='h-[47px] w-[94px]'
            circleCSS='h-[34px] w-[34px]'
            rightSideCircleCSS='translate-x-12 bg-black'
            boolean={setReminderTD}
          />
          <div className='mt-4'>allow contacts to</div>
        </div>

        <div className="profile-page max-w-6xl mx-auto md:mt-24 mt-12 xl:pl-0 md:pl-2 pl-0">
          <div className="profile-section flex md:flex-row flex-col items-center">
            <div className="left-side md:mr-28 mr-0">
              <Image className='rounded-full' width={130} height={130} src={userAccountImage} alt="profile pic"></Image>
            </div>
            <div className="right-side">
              <div className="username capitalize text-3xl font-bold md:mb-6 mb-4 md:ml-4 ml-0 md:text-left text-center">{userAccountName}</div>
              <div className="wallet-address capitalize font-bold md:ml-4 ml-0 text-sm md:text-left text-center">wallet address</div>
              <div className="waeelt-id border py-1 px-4 border-dotted rounded-3xl font-bold my-2 sm:text-base text-xs">{userERC20Wallet}</div>
              <div className="stay-tuned text-[#686A6C] text-xs md:ml-4 ml-0">*Stay tuned for upcoming offers with your wallet address</div>
            </div>
          </div>
        </div>

        {/* For Desktop */}
        <div className='max-w-[1208px] mx-auto mt-8 lg:block hidden'>
          <div className='flex justify-between bg-white drop-shadow-xl rounded-xl xl:mx-0 mx-2'>
            <div className='flex font-bold capitalize text-sm gap-14'>
              <div className={`whitespace-nowrap m-auto px-6 rounded-xl py-3 cursor-pointer ${activeIndex === 0 ? 'border' : 'text-[#686A6C]'}`} onClick={() => { handleClick(0) }}>
                my contacts
              </div>
              <div className={`whitespace-nowrap m-auto px-6 rounded-xl py-3 cursor-pointer ${activeIndex === 1 ? 'border' : 'text-[#686A6C]'}`} onClick={() => { handleClick(1) }}>
                reminder history
              </div>
              <div className='cursor-not-allowed'>
                <div className={`pointer-events-none  opacity-50 whitespace-nowrap m-auto px-6 rounded-xl py-3 ${activeIndex === 2 ? 'border' : 'text-[#686A6C]'}`} onClick={() => { handleClick(2) }}>
                  analytics
                </div>
              </div>
            </div>
            <span className='cursor-not-allowed flex opacity-50'>
              <div className='flex pointer-events-none'><SortBy /></div>
              <div className='flex pointer-events-none'><FilterIcon /></div>
            </span>
            <div className='flex'><SearchByName onSearch={handleSearch} /></div>
          </div>
        </div>

        {/* For Tablet & Mobile */}
        <div className='max-w-[1208px] mx-auto mt-8 lg:hidden block space-y-4'>
          <div className='flex justify-between bg-white drop-shadow-xl rounded-xl xl:mx-0 mx-2 capitalize text-sm font-bold py-4'>
            <span className='cursor-not-allowed flex opacity-50'>
              <div className='flex pointer-events-none'><SortBy /></div>
              <div className='flex pointer-events-none'><FilterIcon /></div>
            </span>
            <div className='flex'><SearchByName onSearch={handleSearch} /></div>
          </div>
          <div className='flex justify-between bg-white drop-shadow-xl rounded-xl xl:mx-0 mx-2 capitalize text-sm font-bold'>
            <div className={`whitespace-nowrap sm:px-6 px-2 rounded-xl py-3 cursor-pointer ${activeIndex === 0 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(0)}>
              my contacts
            </div>
            <div className={`whitespace-nowrap sm:px-6 px-2 rounded-xl py-3 cursor-pointer ${activeIndex === 1 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(1)}>
              reminder history
            </div>
            <div className='cursor-not-allowed'>
              <div className={`pointer-events-none opacity-50 whitespace-nowrap sm:px-6 px-2 rounded-xl py-3 ${activeIndex === 2 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(2)}>
                analytics
              </div>
            </div>
          </div>
        </div >

        {activeIndex === 0 &&
          <>
            <div className="mt-8 flex md:text-base text-xs">
              <div className='max-w-[1208px] m-auto flex w-full items-center capitalize font-bold text-[#4D6472] md:px-8 px-2'>
                <div className={`block-1 py-2 ${block1ForActiveIndex0} text-center`}>name</div>
                <div className={`block-2 py-2 ${block2ForActiveIndex0} text-center`}>date entered</div>
                <div className={`block-3 py-2 ${block3ForActiveIndex0} text-center`}>set reminder</div>
                <div className={`block-4 py-2 ${block4ForActiveIndex0} text-center`}>reminder date</div>
                <div className={`block-5 py-2 ${block5ForActiveIndex0} text-center`}>message</div>
                <div className={`block-6 py-2 ${block6ForActiveIndex0} text-center sm:block hidden`}>edit reminder</div>
              </div>
            </div>
            <div className='max-w-[1208px] m-auto w-full items-center pb-4 md:text-base text-xs'>
              {userAllRemainder?.filter(item => item.customDate > formattedTime || item.customDate.length === 0).map((item, index) => (
                <div key={index} className='bg-white rounded-xl drop-shadow-xl xl:mx-0 mx-2'>
                  <div className='flex flex-row xl:px-8 md:px-6 px-2 mb-2'>

                    <div className={`block-1 ${block1ForActiveIndex0} text-left flex items-center gap-2 cursor-pointer capitalize`}>
                      <span className='md:block hidden' onClick={() => editAName(item._id)}>
                        <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                      </span>

                      <span className='md:hidden block' onClick={() => editARemainder(item._id)}>
                        <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                      </span>
                      {((item.name.length !== 0 ? item.name : 'John Doe').trim().split(' ')[0])}
                    </div>

                    <div className={`block-2 ${block2ForActiveIndex0} max-w-[241px] m-auto text-center`}>{moment(item.createdAt).format("DD-MM-YY HH:mm")}</div>

                    <div className={`block-3 ${(item.customMessage).length === 0 ? "pointer-events-auto" : "pointer-events-none"} flex ${block3ForActiveIndex0} max-w-[241px] my-2 text-center`} onClick={() => editARemainder(item._id)}>
                      <ToggleSwtich
                        outlineCSS='h-[35px] w-[70px]'
                        circleCSS='h-[22px] w-[22px]'
                        rightSideCircleCSS='translate-x-9 bg-black'
                        offText='off'
                        onText='on'
                        boolean={(item.customMessage).length === 0 ? false : true}
                      />
                    </div>

                    <div className={`block-4 ${block4ForActiveIndex0} m-auto text-center text-red-600`}>
                      {(item.customMessage.length === 0 ? "-" : ((item.customDate) > formattedTime ? (item.customDate) : 'Expired')).slice(0, 8)}
                    </div>

                    <div className={`block-5 ${block5ForActiveIndex0} m-auto text-center`}>{item.customMessage}</div>

                    <div className={`block-6 ${block6ForActiveIndex0} sm:flex hidden m-auto items-center justify-center gap-2 uppercase border-2 border-black rounded-xl py-1 px-4 text-[#4D6472] cursor-pointer text-center whitespace-nowrap`} onClick={() => editARemainder(item._id)}>
                      edit reminder
                      <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }

        {activeIndex === 1 &&
          <>
            <div className="mt-8 flex md:text-base text-xs">
              <div className='max-w-[1208px] m-auto flex w-full items-center capitalize font-bold text-[#4D6472] md:px-8 px-2'>
                <div className={`block-1 py-2 ${block1ForActiveIndex0} text-center`}>name</div>
                <div className={`block-2 py-2 ${block2ForActiveIndex0} text-center`}>date entered</div>
                <div className={`block-3 py-2 ${block3ForActiveIndex0} text-center`}>reminder date</div>
                <div className={`block-4 py-2 ${block4ForActiveIndex0} text-center`}>time</div>
                <div className={`block-5 py-2 ${block5ForActiveIndex0} text-center`}>title</div>
                <div className={`block-6 py-2 ${block6ForActiveIndex0} text-center sm:block hidden`}>platform</div>
              </div>
            </div>
            <div className='max-w-[1208px] m-auto w-full items-center pb-4 md:text-base text-xs'>
              {userAllRemainder?.filter(item => (item.customDate < formattedTime || item.customDate === formattedTime) && item.customDate.length !== 0).map((item, index) => (
                <div key={index} className='bg-white rounded-xl drop-shadow-xl xl:mx-0 mx-2'>
                  <div className='flex flex-row xl:px-8 md:px-6 px-2 mb-2'>

                    <div className={`block-1 ${block1ForActiveIndex0} text-left flex items-center gap-2 cursor-pointer justify-center capitalize`}>
                      {((item.name.length !== 0 ? item.name : 'John Doe').trim().split(' ')[0])}
                    </div>

                    <div className={`block-2 ${block2ForActiveIndex0} max-w-[241px] m-auto text-center`}>
                      {moment(item.createdAt).format("DD-MM-YY HH:mm").slice(0, 8)}
                    </div>

                    <div className={`block-3 flex ${block3ForActiveIndex0} max-w-[241px] my-2 text-center flex justify-center`}>
                      {(item.customDate).slice(0, 10)}
                    </div>

                    <div className={`block-4 ${block4ForActiveIndex0} m-auto text-center`}>{(item.customDate).slice(11)}</div>

                    <div className={`block-5 ${block5ForActiveIndex0} m-auto text-center`}>{item.customMessage}</div>

                    <div className={`block-6 ${block6ForActiveIndex0} sm:flex hidden m-auto items-center justify-center gap-2 uppercase py-1 px-4 text-[#4D6472] cursor-pointer text-center whitespace-nowrap`}>
                      Mail
                      <Image width={28} height={28} src={'/assets/images/profilePage/mailIcon.png'} alt="profile pic"></Image>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      </div>

      {!editingReminder &&
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:w-[547px] md:h-[423px] w-[347px] h-[423px] border rounded-3xl bg-white'>
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
          <div onClick={updateReminder} disabled={isSaveDisabled1} className={`${isSaveDisabled1 ? 'disabled cursor-not-allowed opacity-40' : 'cursor-pointer'} flex justify-center uppercase mt-4`}>
            <div className='bg-black px-4 py-2 text-white font-bold rounded-xl'>
              set reminder
            </div>
          </div>
        </div>
      }

      {!editANameOnly &&
        <div className=''>
          <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:w-[547px] md:h-[230px] w-[347px] h-[230px] border rounded-3xl bg-white'>
            <div className='capitalize text-red-600 text-sm absolute top-[40px] left-[28px] cursor-pointer' onClick={editAName}>cancel</div>
            <div className='capitalize flex justify-center font-bold text-3xl mt-8'>edit name</div>
            <div className='px-6 space-y-4 mt-8'>
              <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userName} onChange={handleuserNameChange} placeholder="Enter Name" />
            </div>
            <div onClick={updateName} disabled={isSaveDisabled2} className={`${isSaveDisabled2 ? 'disabled cursor-not-allowed opacity-40' : 'cursor-pointer'} flex justify-center uppercase mt-4`}>
              <div className='bg-black px-4 py-2 text-white font-bold rounded-xl'>
                save name
              </div>
            </div>
          </div>
        </div>
      }
    </ div>
  )
}

export default Profile