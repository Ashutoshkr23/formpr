//import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CartNav } from '@/components';
import Image from 'next/image';
import SortBy from '@/components/ProfilePage/SortBy';
import SearchByName from '@/components/ProfilePage/SearchByName';
import ToggleSwtich from '@/components/ToggleSwtich';
import { getSession, useSession } from 'next-auth/react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FilterIcon from '@/components/ProfilePage/FilterIcon';
import { Switch } from '@headlessui/react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from "next/router";

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [showHidePage, setshowHidePage] = useState(false)

  const router = useRouter();

  async function refreshTab() {
    setgetUserRemaindersCalled(!getUserRemaindersCalled);
    getUserRemainders();
  }

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const { data: session } = useSession();

  const [userAllRemainder, setuserAllRemainder] = useState([])
  const [originalUserAllRemainder, setoriginalUserAllRemainder] = useState([])

  const [getUserRemaindersCalled, setgetUserRemaindersCalled] = useState(false)

  const currentTime = moment();
  const formattedTime = currentTime.format('DD-MM-YYYY HH:mm');

  async function getUserSessionEmail() {
    const session = await getSession();

    return session?.user?.email;
  }

  async function getUserRemainders() {


    if (getUserRemaindersCalled) {
      return;
    }


    setuserAllRemainder([])

    setgetUserRemaindersCalled(!getUserRemaindersCalled);

    const userEmail = await getUserSessionEmail();

    const sendDataToAPI = { userEmail }

    const gettingUserRemainder = await axios.post('/api/getRemainder', sendDataToAPI);
    console.log(gettingUserRemainder.data);

    if (gettingUserRemainder.data.success === false) {
      setshowHidePage(false);
      router.push('/')
      return;
    } else if (gettingUserRemainder.data.success === true) {

      setshowHidePage(true)

      setoriginalUserAllRemainder(gettingUserRemainder?.data?.userRemainderList)

      return setuserAllRemainder(gettingUserRemainder?.data?.userRemainderList);
    }
  }


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

  const [yourDate, setyourDate] = useState('')
  const [isDate, setisDate] = useState(false)

  const [editUser, seteditUser] = useState(true)

  const [reminderID, setreminderID] = useState('')

  const [enableDisableBackgroundCSS, setenableDisableBackgroundCSS] = useState('h-screen blur-none pointer-events-auto')

  const updateAUserDetails = async (idOfTheItem) => {
    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    setgetUserRemaindersCalled(!getUserRemaindersCalled);
    const id = idOfTheItem;
    setreminderID(id)

    seteditUser(!editUser)
    if (editUser) {
      const response = await axios.post('/api/reminder/verifyReminderID', { id });
      const data = response.data.remainder
      setuserName(data.name);
      setuserContactNumber(data.contactNumber);
      setuserCustomMessage(data.customMessage);
    }

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      getUserRemainders();
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  };

  const isSaveDisabled1 = !userName || !userContactNumber // Check if input values are empty or contact number has non-numeric characters

  const updateUser = async () => {

    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    const itemID = reminderID;
    if (isSaveDisabled1) {
      return; // Don't perform update if inputs are empty or contact number has non-numeric characters
    }

    const data = { userName, userContactNumber, itemID, userCustomMessage };
    const response = await axios.post('/api/reminder/updateReminder', data);
    seteditUser(!editUser)
    getUserRemainders();

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  };

  const deleteARemainder = async (idOfTheItem) => {
    const itemId = idOfTheItem;
    const data = { itemId };

    try {
      await axios.post('/api/deleteARemainder', data);

      setuserAllRemainder(prevRemainders => prevRemainders.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const userAccountEmail = session?.user?.email;
  const [userAccountName, setuserAccountName] = useState('')
  const [userERC20Wallet, setuserERC20Wallet] = useState('Getting Wallet ID....')
  const [stopGetUserDataFunction, setstopGetUserDataFunction] = useState(false)
  const [userAccountImage, setuserAccountImage] = useState('')

  async function getUserData() {
    if (stopGetUserDataFunction) {
      return
    }

    const data = { userAccountEmail }
    const response = await axios.post('/api/profilePage/getUserDetails', data)
    if (response?.data?.getUserDetails?.name !== undefined) {
      setuserAccountName(response?.data?.getUserDetails?.name);
      setuserERC20Wallet(response?.data?.getUserDetails?.erc20WalletId);
      if (response?.data?.getUserDetails?.avatar === null || response?.data?.getUserDetails?.avatar === undefined) {
        setuserAccountImage('/assets/images/profilePage/profilePic.png');
      } else {
        setuserAccountImage(response?.data?.getUserDetails?.avatar);
      }
      setstopGetUserDataFunction(!stopGetUserDataFunction)
    }
  }

  getUserData();

  useEffect(() => {
    getUserRemainders();
    getUserShareContactsForUserBooleanDetails();
  }, [])

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

  const [editUserAccountName, seteditUserAccountName] = useState(true)

  const [inputUserAccountName, setinputUserAccountName] = useState('');
  const handleuserAccountName = (event) => {
    setinputUserAccountName(event.target.value);
  };

  async function editUserAccountNameBox() {
    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    seteditUserAccountName(!editUserAccountName)

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  }

  async function updateUserName() {
    seteditUserAccountName(!editUserAccountName)

    const data = { userAccountEmail, inputUserAccountName }

    const response = await axios.post('/api/profilePage/changeUserDetails', data)
    if (response.data.success === true) {
      setstopGetUserDataFunction(!stopGetUserDataFunction)
      getUserData()
    }

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }
  }

  const [onOffShareContacts, setonOffShareContacts] = useState(false)

  async function onOffShareContactsForUser() {
    setonOffShareContacts(!onOffShareContacts)

    const revertOnOffValue = !onOffShareContacts;

    const userEmail = await getUserSessionEmail();
    const data = { userEmail, revertOnOffValue }
    const response = await axios.post('/api/profilePage/onOffShareContacts', data)
    console.log(response);
  }

  const [enabledAllowContactsTo, setEnabledAllowContactsTo] = useState(false);

  async function getUserShareContactsForUserBooleanDetails() {
    const userEmail = await getUserSessionEmail();
    const data = { userEmail }
    const response = await axios.post('/api/profilePage/onOffShareContacts', data)
    console.log(response);
    if (response.data.success === true) {
      const shareContactsValue = response.data.getUserSharingDetails.shareContacts;
      setonOffShareContacts(shareContactsValue)
      setEnabledAllowContactsTo(shareContactsValue)
    }
  }

  const [editingReminder, seteditingReminder] = useState(true)

  const [asdf, setasdf] = useState(false)

  async function enableThereminder(idOfTheItem) {
    if (enableDisableBackgroundCSS === 'h-screen blur-none pointer-events-auto') {
      setenableDisableBackgroundCSS('h-screen blur-sm pointer-events-none')
    }

    seteditingReminder(!editingReminder)
    const id = idOfTheItem;
    setreminderID(id)

    seteditingReminder(!editingReminder)
    if (editingReminder) {
      const response = await axios.post('/api/reminder/verifyReminderID', { id });
      const data = response.data.remainder
      setuserName(data.name);
      setuserContactNumber(data.contactNumber);
      setuserCustomMessage(data.customMessage);
      console.log(data.customDate);
      if (data.customDate.length !== 0) {
        const specificDate = new Date(data.customDate);
        setSelectedDate(specificDate);
        setSelectedTime(specificDate);
      }
    }

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
    }

    setgetUserRemaindersCalled(!getUserRemaindersCalled);
    getUserRemainders();
  }

  async function disableThereminder(idOfTheItem) {
    console.log(idOfTheItem);
    const itemID = idOfTheItem;
    const disableReminder = false;
    const data = { itemID, disableReminder }
    const response = await axios.post('/api/reminder/updateReminder', data);
  }

  const today = new Date();
  const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateSelectedDateTime(date, selectedTime);
  };


  const handleTimeChange = (time) => {
    setSelectedTime(time);
    updateSelectedDateTime(selectedDate, time);
  };

  const updateSelectedDateTime = (date, time) => {
    if (date && time) {
      const dateTime = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes()
      );
      setSelectedDateTime(dateTime);
    }
  };

  const isSaveDisabled2 = !userName || !userContactNumber || !userCustomMessage || !selectedDate || !selectedTime

  async function updateReminder() {

    refreshTab()

    const itemID = reminderID;
    const dateTime = new Date(selectedDateTime);
    console.log(dateTime);
    const formattedDateTime = dateTime.toISOString().slice(0, -5) + "+00:00";
    const reminderPlatform = "Whatsapp"
    const enableReminder = true;
    const data = { itemID, userName, userContactNumber, userCustomMessage, formattedDateTime, reminderPlatform, enableReminder }
    const response = await axios.post('/api/reminder/updateReminder', data);

    setuserName('')
    setuserContactNumber('')
    setuserCustomMessage('')
    setSelectedDate(null)
    setSelectedTime(null)

    if (enableDisableBackgroundCSS === 'h-screen blur-sm pointer-events-none') {
      setenableDisableBackgroundCSS('h-screen blur-none pointer-events-auto')
      seteditingReminder(!editingReminder)
    }
  }

  const [navBarMargin, setnavBarMargin] = useState('mt-3')

  async function changeNavBarMargin() {
    if (navBarMargin === 'mt-3') {
      setnavBarMargin('mt-0')
    } else if (navBarMargin === 'mt-0') {
      setnavBarMargin('mt-3')
    }
  }

  return (
    <div className={`${navBarMargin}`}>
      {showHidePage &&
        <div className={`${enableDisableBackgroundCSS}`}>
          <div onClick={changeNavBarMargin}><CartNav /></div>

          <div className='max-w-[1209px] mx-auto xl:pr-0 pr-4 text-right capitalize' onClick={onOffShareContactsForUser}>
            <Switch
              checked={enabledAllowContactsTo}
              onChange={setEnabledAllowContactsTo}
              style={{ background: enabledAllowContactsTo ? 'linear-gradient(91.67deg, #96FFAD 0.94%, #66D3E1 101.73%' : 'white' }}
              className={`relative inline-flex md:h-[47px] h-[38px] md:w-[94px] w-[85px] shrink-0 rounded-full border-2 border-black transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`} >
              <span className="sr-only">Use setting</span>
              <span aria-hidden="true" className={`${enabledAllowContactsTo ? `translate-x-12 bg-black` : 'translate-x-2 bg-white'} mt-1 pointer-events-none inline-block md:h-[34px] h-[25px] md:w-[34px] w-[25px] transform rounded-full border-2 border-black shadow-lg ring-0 transition duration-200 ease-in-out`} />
            </Switch>
            <div className='mt-4'>allow contacts to</div>
          </div>

          <div className="profile-page max-w-6xl mx-auto md:mt-24 mt-12 xl:pl-0 md:pl-2 pl-0">
            <div className="profile-section flex md:flex-row flex-col items-center">
              <div className="left-side md:mr-28 mr-0">
                {userAccountImage.length === 0 &&
                  <div>
                    <Skeleton circle={true} height={130} width={130} />
                  </div>
                }
                {userAccountImage.length !== 0 &&
                  <Image className='rounded-full' width={130} height={130} src={userAccountImage} alt="profile pic"></Image>
                }
              </div>
              <div className="right-side">
                <div className="username capitalize text-3xl font-bold md:mb-6 mb-4 md:ml-4 ml-0 md:text-left text-center flex items-center gap-2 md:justify-start justify-center">
                  {userAccountName.length === 0 ? <Skeleton width={300} height={36} count={1} /> : userAccountName}
                  <span className='md:block hidden' onClick={() => editUserAccountNameBox()}>
                    <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                  </span>
                </div>
                <div className="wallet-address capitalize font-bold md:ml-4 ml-0 text-sm md:text-left text-center">wallet address</div>
                <div className="waeelt-id border py-1 px-4 border-dotted rounded-3xl font-bold my-2 sm:text-base text-xs">{userERC20Wallet}</div>
                <div className="stay-tuned text-[#686A6C] text-xs md:ml-4 ml-0">*Stay tuned for upcoming offers with your wallet address</div>
              </div>
            </div>
          </div>

          {/* For Desktop */}
          <div className='max-w-[1208px] mx-auto mt-8 lg:block hidden'>
            <div className='flex justify-between bg-white drop-shadow-xl rounded-xl xl:mx-0 mx-2'>
              <div className='flex font-bold uppercase text-sm gap-10'>
                <div className={`whitespace-nowrap m-auto px-6 rounded-xl py-3 cursor-pointer ${activeIndex === 0 ? 'border' : 'text-[#686A6C]'}`} onClick={() => { handleClick(0); refreshTab(); }}>
                  my contacts
                </div>
                <div className={`whitespace-nowrap m-auto px-6 rounded-xl py-3 cursor-pointer ${activeIndex === 1 ? 'border' : 'text-[#686A6C]'}`} onClick={() => { handleClick(1); refreshTab(); }}>
                  active reminder
                </div>
                <div className='cursor-pointer'>
                  <div className={`whitespace-nowrap m-auto px-6 rounded-xl py-3 ${activeIndex === 2 ? 'border' : 'text-[#686A6C]'}`} onClick={() => { handleClick(2); refreshTab(); }}>
                    reminder history
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
              <div className='flex w-full justify-around'>
                <div className='flex pointer-events-none'><SortBy /></div>
                <div className='flex pointer-events-none'><FilterIcon /></div>
              </div>
              <div className='flex'><SearchByName onSearch={handleSearch} /></div>
            </div>
            <div className='flex justify-between bg-white drop-shadow-xl rounded-xl xl:mx-0 mx-2 capitalize text-sm font-bold'>
              <div className={`text-center sm:px-6 px-2 rounded-xl py-3 cursor-pointer ${activeIndex === 0 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(0)}>
                my contacts
              </div>
              <div className={`text-center sm:px-6 px-2 rounded-xl py-3 cursor-pointer ${activeIndex === 1 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(1)}>
                active reminder
              </div>
              <div className=''>
                <div className={`text-center sm:px-6 px-2 rounded-xl py-3 ${activeIndex === 2 ? 'border' : 'text-[#686A6C]'}`} onClick={() => handleClick(2)}>
                  reminder history
                </div>
              </div>
            </div>
          </div >

          {activeIndex === 0 &&
            <>
              <div className="mt-8 flex md:text-base text-xs drop-shadow-2xl">
                <div className='max-w-[1208px] m-auto flex w-full items-center capitalize font-bold text-[#4D6472]'>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center whitespace-nowrap">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Phone no.
                          </th>
                          <th scope="col" className="px-6 py-3">
                            date added
                          </th>
                          <th scope="col" className="px-6 py-3">
                            set reminder
                          </th>
                          <th scope="col" className="px-6 py-3">
                            reminder date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            edit reminder
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userAllRemainder?.filter(item => item.expired !== true).map((item, index) => (
                          <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center font-medium text-black whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {item.name}
                            </th>
                            <td className="px-6 py-4">
                              {item.contactNumber}
                            </td>
                            <td className="px-6 py-4">
                              {moment(item.createdAt).format("DD-MM-YY HH:mm")}
                            </td>
                            <td className="px-6 py-4">
                              {item.sendReminder === false &&
                                <div className='flex justify-center' onClick={() => enableThereminder(item._id)}>
                                  <ToggleSwtich
                                    outlineCSS='h-[35px] w-[70px]'
                                    circleCSS='h-[22px] w-[22px]'
                                    rightSideCircleCSS='translate-x-9 bg-black'
                                    offText='off'
                                    onText='on'
                                    boolean={false}
                                  />
                                </div>
                              }
                              {item.sendReminder === true &&
                                <div className='flex justify-center' onClick={() => disableThereminder(item._id)}>
                                  <ToggleSwtich
                                    outlineCSS='h-[35px] w-[70px]'
                                    circleCSS='h-[22px] w-[22px]'
                                    rightSideCircleCSS='translate-x-9 bg-black'
                                    offText='off'
                                    onText='on'
                                    boolean={true}
                                  />
                                </div>
                              }
                            </td>
                            <td className="px-6 py-4">
                              {item.customDate ? new Date(item.customDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '-'}
                            </td>
                            <td className="px-6 py-4">
                              <div className='inline-flex justify-center gap-2 mx-0 uppercase cursor-pointer border rounded-xl py-2 px-4' onClick={() => updateAUserDetails(item._id)}>
                                edit contact
                                <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          }

          {activeIndex === 1 &&
            <>
              <div className="mt-8 flex md:text-base text-xs drop-shadow-2xl">
                <div className='max-w-[1208px] m-auto flex w-full items-center capitalize font-bold text-[#4D6472]'>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center whitespace-nowrap">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            reminder date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            time
                          </th>
                          <th scope="col" className="px-6 py-3">
                            title
                          </th>
                          <th scope="col" className="px-6 py-3">
                            reminder platform
                          </th>
                          <th scope="col" className="px-6 py-3">
                            edit reminder
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userAllRemainder?.filter(item => item.sendReminder === true && item.expired !== true).map((item, index) => (
                          <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center font-medium text-black whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center justify-between lg:gap-0 gap-2">
                              <div className={`${item.reminderPlatform === 'Whatsapp' ? 'bg-[#49C958]' : 'bg-[#00A7EB]'} w-[13px] h-[41px]`}></div>
                              <div>{item.name}</div>
                              <div></div>
                            </th>
                            <td className="px-6 py-4">
                              {new Date(item.customDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                            </td>
                            <td className="px-6 py-4">
                              {item.customDate && (new Date(item.customDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))}
                            </td>
                            <td className="px-6 py-4">
                              {(item.customMessage)}
                            </td>
                            <td className="px-6 py-4">
                              {item.reminderPlatform === 'Whatsapp' ? (
                                <div className='flex items-center justify-center gap-4'><span>Whatsapp</span><Image width={24} height={24} src="/assets/images/profilePage/whatsappIcon.png" alt="Whatsapp" /></div>
                              ) : (
                                <div className='flex items-center justify-center gap-4'><span>Mail</span><Image width={24} height={24} src="/assets/images/profilePage/mailIcon.png" alt="Whatsapp" /></div>
                              )}
                            </td>
                            <td className="px-6 py-4">
                              <div className='inline-flex justify-center gap-2 mx-0 uppercase cursor-pointer border rounded-xl py-2 px-4' onClick={() => enableThereminder(item._id)}>
                                edit reminder
                                <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          }

          {activeIndex === 2 &&
            <>
              <div className="mt-8 flex md:text-base text-xs drop-shadow-2xl">
                <div className='max-w-[1208px] m-auto flex w-full items-center capitalize font-bold text-[#4D6472]'>
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center whitespace-nowrap">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            reminder date
                          </th>
                          <th scope="col" className="px-6 py-3">
                            time
                          </th>
                          <th scope="col" className="px-6 py-3">
                            title
                          </th>
                          <th scope="col" className="px-6 py-3">
                            reminder platform
                          </th>
                          <th scope="col" className="px-6 py-3">
                            edit reminder
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {userAllRemainder?.filter(item => item.expired === true).map((item, index) => (
                          <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-center font-medium text-black whitespace-nowrap">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {item.name}
                            </th>
                            <td className="px-6 py-4">
                              {new Date(item.customDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                            </td>
                            <td className="px-6 py-4">
                              {item.customDate && (new Date(item.customDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))}
                            </td>
                            <td className="px-6 py-4">
                              {(item.customMessage)}
                            </td>
                            <td className="px-6 py-4">
                              {item.reminderPlatform === 'Whatsapp' ? (
                                <div className='flex items-center justify-center gap-4'><span>Whatsapp</span><Image width={24} height={24} src="/assets/images/profilePage/whatsappIcon.png" alt="Whatsapp" /></div>
                              ) : (
                                <div className='flex items-center justify-center gap-4'><span>Mail</span><Image width={24} height={24} src="/assets/images/profilePage/mailIcon.png" alt="Whatsapp" /></div>
                              )}
                            </td>
                            <td className="px-6 py-4 cursor-not-allowed">
                              <div className='inline-flex justify-center gap-2 mx-0 uppercase border rounded-xl py-2 px-4 pointer-events-none opacity-50'>
                                edit reminder
                                <Image width={20} height={20} src={'/assets/images/profilePage/editReminder.png'} alt="profile pic"></Image>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      }

      {!editUser &&
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:w-[547px] w-[347px] h-[273px] border rounded-3xl bg-white'>
          <div className='capitalize text-red-600 text-sm absolute top-[40px] left-[28px] cursor-pointer' onClick={updateAUserDetails}>cancel</div>
          <div className='capitalize flex justify-center font-bold text-3xl mt-8'>edit user</div>
          <div className='px-6 space-y-4 mt-8'>
            <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userName} onChange={handleuserNameChange} placeholder="Enter Name" />
            <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userContactNumber} onChange={handleuserContactNumberChange} placeholder="Enter Contact Number" />
          </div>
          <div onClick={updateUser} disabled={isSaveDisabled1} className={`${isSaveDisabled1 ? 'disabled cursor-not-allowed opacity-40' : 'cursor-pointer'} flex justify-center uppercase mt-4`}>
            <div className='bg-black px-4 py-2 text-white font-bold rounded-xl'>
              save details
            </div>
          </div>
        </div>
      }

      {!editUserAccountName &&
        <div className=''>
          <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:w-[547px] md:h-[230px] w-[347px] h-[230px] border rounded-3xl bg-white'>
            <div className='capitalize text-red-600 text-sm absolute top-[40px] left-[28px] cursor-pointer' onClick={editUserAccountNameBox}>cancel</div>
            <div className='capitalize flex justify-center font-bold text-3xl mt-8'>edit name</div>
            <div className='px-6 space-y-4 mt-8'>
              <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={inputUserAccountName} onChange={handleuserAccountName} placeholder="Enter New Username" />
            </div>
            <div onClick={updateUserName} className={`flex justify-center uppercase mt-4`}>
              <div className='bg-black px-4 py-2 text-white font-bold rounded-xl'>
                update name
              </div>
            </div>
          </div>
        </div>
      }

      {!editingReminder &&
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] md:w-[547px] w-[347px] h-[446px] border rounded-3xl bg-white'>
          <div className='capitalize text-red-600 text-sm absolute top-[40px] left-[28px] cursor-pointer' onClick={enableThereminder}>cancel</div>
          <div className='capitalize flex justify-center font-bold text-3xl mt-8'>reminder</div>
          <div className='px-6 space-y-4 mt-8'>
            <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userName} onChange={handleuserNameChange} placeholder="Enter Name" />
            <input className='w-full py-[6px] rounded-lg border px-4' type="text" value={userContactNumber} onChange={handleuserContactNumberChange} placeholder="Enter Contact Number" />
            <input className='w-full py-[6px] h-20 pl-4 pb-[46px] text-left rounded-lg border px-4 flex-grow outline-none' type="text" value={userCustomMessage} onChange={handleuserCustomMessageChange} placeholder="Custom Message" />
            <div className='flex justify-between'>
              <div className='relative'>
                <div className='absolute top-[2px] left-[8px] z-50 capitalize flex items-center gap-[1px] text-[#7F7F7F]'>
                  <Image width={20} height={20} src="/assets/images/profilePage/dateIcon.png" alt="" />
                  date
                </div>
                {!isDate &&
                  <DatePicker
                    className='border px-2 py-4 w-full rounded-lg text-center'
                    selected={selectedDate}
                    onChange={handleDateChange}
                    minDate={today}
                    maxDate={nextYear}
                  />
                }
                {isDate &&
                  <DatePicker
                    className='border px-2 py-4 w-full rounded-lg text-center'
                    selected={selectedDate}
                    onChange={handleDateChange}
                    minDate={today}
                    maxDate={nextYear}
                  />
                }
              </div>
              <div className='relative'>
                <div className='absolute top-[2px] left-[8px] z-50 capitalize flex items-center gap-[1px] text-[#7F7F7F]'>
                  <Image width={20} height={20} src="/assets/images/profilePage/timeIcon.png" alt="" />
                  time
                </div>
                {!isDate &&
                  <DatePicker
                    className='border px-2 py-4 w-full rounded-lg text-center'
                    selected={selectedTime}
                    onChange={handleTimeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="HH:mm"
                  />
                }
                {isDate &&
                  <DatePicker
                    className='border px-2 py-4 w-full rounded-lg text-center'
                    selected={selectedTime}
                    onChange={handleTimeChange}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="HH:mm"
                  />
                }
              </div>
            </div>
          </div>
          <div onClick={updateReminder} disabled={isSaveDisabled2} className={`${isSaveDisabled2 ? 'disabled cursor-not-allowed opacity-40' : 'cursor-pointer'} flex justify-center uppercase mt-4`}>
            <div className='flex font-bold gap-2 bg-white border rounded-lg mx-6 py-2 w-full justify-center text-[#7F7F7F]'>
              remind through whatsapp <Image width={26} height={26} src="/assets/images/profilePage/whatsappIcon.png" alt="" />
            </div>
          </div>
        </div>
      }
    </ div>
  )
}

export default Profile