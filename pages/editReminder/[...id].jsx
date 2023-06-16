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

    const [yourDate, setyourDate] = useState('Please Select A Date')


    useEffect(() => {
        const verifyReminderID = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/reminder/verifyReminderID', { id });
                setItemID(id);
                setData(response.data);
                if (response.data.success === false) {
                    router.push('/remainder');
                } else if (response.data.success === true) {
                    const userRemainderArray = Object.values(response.data.remainder);
                    setuserRemainder(userRemainderArray);
                    setuserName(userRemainderArray[2]);
                    setuserContactNumber(userRemainderArray[3]);
                    setuserCustomMessage(userRemainderArray[5]);;
                    setyourDate(userRemainderArray[6]);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            verifyReminderID();
        }
    }, [id]);

    const isSaveDisabled = !userName || !userContactNumber || !/^\d+$/.test(userContactNumber); // Check if input values are empty or contact number has non-numeric characters

    const updateReminder = async () => {
        if (isSaveDisabled) {
            return; // Don't perform update if inputs are empty or contact number has non-numeric characters
        }

        const data = { userName, userContactNumber, itemID, userCustomMessage, selectedDate };
        const response = await axios.post('http://localhost:3000/api/reminder/updateReminder', data);
        router.reload();
    };

    if (!itemID || !data) {
        return <div>Loading...</div>;
    }

    const currentDate = new Date();
    const minDate = new Date(currentDate.getTime());
    const minTime = new Date(currentDate.getTime());
    const maxTime = new Date(currentDate.getTime() + 31556952000);

    return (
        <div>
            <Link href={'/profile'}>← Reminder</Link>
            <div className='flex justify-between px-4'>
                <div>Name:- <input type="text" value={userName} onChange={handleuserNameChange} placeholder="Enter Name" /></div>
                <div>Date:- {moment(userRemainder.createdAt).format("DD-MM-YY HH:mm")}</div>
                <div>Contact Number:- <input type="text" value={userContactNumber} onChange={handleuserContactNumberChange} placeholder="Enter Contact Number" /></div>
                <div onClick={updateReminder} disabled={isSaveDisabled} className={isSaveDisabled ? 'disabled' : ''}>
                    Save
                </div>
            </div>
            <div className="flex items-center border-2 border-black p-2">
                <input type="text" value={userCustomMessage} onChange={handleuserCustomMessageChange} className="flex-grow outline-none" placeholder="Custom Message" />
            </div>
            <div>
                Select Date
                <div>{yourDate}</div>
                <DatePicker selected={selectedDate} onChange={handleDateChange} showTimeSelect minDate={minDate} minTime={minTime} maxTime={maxTime} dateFormat="MMMM d, yyyy h:mm aa" />
            </div>
        </div>
    );
};

export default EditReminder;
