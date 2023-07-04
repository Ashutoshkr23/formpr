import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EditReminder = () => {
    const router = useRouter();
    const { id } = router.query;
    const [itemID, setItemID] = useState(null);
    const [data, setData] = useState(null);

    const [userReminder, setuserReminder] = useState([]);

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


    useEffect(() => {
        const verifyReminderID = async () => {
            try {
                const response = await axios.post('/api/reminder/verifyReminderID', { id });
                setItemID(id);
                setData(response.data);
                if (response.data.success === false) {
                    router.push('/profile');
                } else if (response.data.success === true) {
                    const userReminderArray = Object.values(response.data.reminder);
                    setuserReminder(userReminderArray);
                    setuserName(userReminderArray[2]);
                    setuserContactNumber(userReminderArray[3]);
                    setuserCustomMessage(userReminderArray[5]);;
                    setyourDate(userReminderArray[6]);
                    setisDate(true)
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            verifyReminderID();
        }
    }, [id]);

    const isSaveDisabled = !userName || !userContactNumber || !/^\d+$/.test(userContactNumber) || !selectedDate || !userCustomMessage; // Check if input values are empty or contact number has non-numeric characters

    const updateReminder = async () => {
        if (isSaveDisabled) {
            return; // Don't perform update if inputs are empty or contact number has non-numeric characters
        }
        const data = { userName, userContactNumber, itemID, userCustomMessage, selectedDate };
        const response = await axios.post('/api/reminder/updateReminder', data);
        router.push('/profile');
    };

    if (!itemID || !data) {
        return <div>Loading...</div>;
    }

    const currentDate = new Date();
    const minDate = new Date(currentDate.getTime());
    const maxDate = new Date(currentDate.getTime() + 31556952000);
    const minTime = new Date(currentDate.getTime());
    const maxTime = new Date(currentDate.getTime() + 100000000);

    return (
        <>
            <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-[547px] h-[423px] border rounded-3xl'>
                <Link href={'/profile'}><div className='capitalize text-red-600 text-sm absolute top-[40px] left-[28px] cursor-pointer'>cancel</div></Link>
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
        </>
    );
};

export default EditReminder;
