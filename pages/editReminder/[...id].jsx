import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import moment from 'moment';

const EditReminder = () => {
    const router = useRouter();
    const { id } = router.query;
    const [itemID, setItemID] = useState(null);
    const [data, setData] = useState(null);

    const [userRemainder, setuserRemainder] = useState([])

    const [userName, setuserName] = useState('');

    const handleuserNameChange = (event) => {
        setuserName(event.target.value);
    };

    const [userContactNumber, setuserContactNumber] = useState('')

    const handleuserContactNumberChange = (event) => {
        setuserContactNumber(event.target.value);
    };


    useEffect(() => {
        const verifyReminderID = async () => {
            try {
                const response = await axios.post('http://localhost:3000/api/reminder/verifyReminderID', { id });
                setItemID(id);
                setData(response.data);
                if (response.data.success === false) {
                    router.push('/remainder')
                } else if (response.data.success === true) {
                    const userRemainderArray = Object.values(response.data.remainder);
                    setuserRemainder(userRemainderArray);
                    setuserName(userRemainderArray[2])
                    setuserContactNumber(userRemainderArray[3])
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (id) {
            verifyReminderID();
        }
    }, [id]);

    if (!itemID || !data) {
        return <div>Loading...</div>;
    }


    return <div>
        <div className='flex justify-between px-4'>
            <div>Name:- <input type="text" value={userName} onChange={handleuserNameChange} placeholder="Enter Name" /></div>
            <div>Date:- {moment(userRemainder.createdAt).format("DD-MM-YY HH:mm")}</div>
            <div>Contact Number:- <input type="text" value={userContactNumber} onChange={handleuserContactNumberChange} placeholder="Enter Contact Number" /></div>
        </div>
    </div>;
};

export default EditReminder;
