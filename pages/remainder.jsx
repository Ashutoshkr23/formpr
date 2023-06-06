import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Remainder = () => {

    const router = useRouter()

    const [userAllRemainder, setuserAllRemainder] = useState([])

    const [getUserRemaindersCalled, setgetUserRemaindersCalled] = useState(false)

    async function getUserRemainders() {
        if (getUserRemaindersCalled) {
            return;
        }

        setgetUserRemaindersCalled(true);

        const gettingUserRemainder = await axios.post('http://localhost:3000/api/getRemainder');
        return setuserAllRemainder(gettingUserRemainder?.data?.userRemainderList);
    }

    useEffect(() => {
        getUserRemainders();
    }, [])


    const deleteARemainder = async (idOfTheItem) => {
        console.log(idOfTheItem);

        const itemId = idOfTheItem;

        const data = { itemId }

        const gettingUserRemainder = await axios.post('http://localhost:3000/api/deleteARemainder', data);

        router.reload(window.location.pathname)
    };

    return (
        <>
            {userAllRemainder?.map((item, key) => {
                return (
                    <div key={key} className='flex justify-between px-4'>
                        <div>Name:- {item.name}</div>
                        <div>Date:- {moment(item.createdAt).format("DD-MM-YY HH:mm")}</div>
                        <div>Contact Number:- {item.contactNumber}</div>
                        <div onClick={() => deleteARemainder(item._id)} className='cursor-pointer'>Delete</div>
                    </div>
                );
            })}
        </>
    )
}

export default Remainder