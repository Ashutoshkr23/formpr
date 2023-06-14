import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';

const Remainder = () => {

    const router = useRouter()

    const [userAllRemainder, setuserAllRemainder] = useState([])

    const [getUserRemaindersCalled, setgetUserRemaindersCalled] = useState(false)

    async function getUserRemainders() {


        if (getUserRemaindersCalled) {
            return;
        }


        setgetUserRemaindersCalled(true);

        const session = await getSession();

        const userEmail = session?.user?.email;

        const sendDataToAPI = { userEmail }

        const gettingUserRemainder = await axios.post('http://localhost:3000/api/getRemainder', sendDataToAPI);

        return setuserAllRemainder(gettingUserRemainder?.data?.userRemainderList);
    }

    useEffect(() => {
        getUserRemainders();
    }, [])


    const editARemainder = async (idOfTheItem) => {
        const itemId = idOfTheItem;

        router.push('/editReminder/' + itemId)
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

    return (
        <>
            {userAllRemainder?.map((item, key) => {
                return (
                    <div key={key} className='flex justify-between px-4'>
                        <div>Name:- {item.name}</div>
                        <div>Date:- {moment(item.createdAt).format("DD-MM-YY HH:mm")}</div>
                        <div>Contact Number:- {item.contactNumber}</div>
                        <div onClick={() => editARemainder(item._id)} className='cursor-pointer'>Edit</div>
                        <div onClick={() => deleteARemainder(item._id)} className='cursor-pointer'>Delete</div>
                    </div>
                );
            })}
        </>
    )
}

export default Remainder