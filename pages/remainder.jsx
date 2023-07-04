import axios from 'axios'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getSession } from 'next-auth/react';
import { CartNav } from '@/components';
import SortBy from '@/components/ProfilePage/SortBy';
import SearchByName from '@/components/ProfilePage/SearchByName';
import Image from 'next/image';
import ToggleSwtich from '@/components/ToggleSwtich';

const Reminder = () => {

    const router = useRouter()

    const [userAllReminder, setuserAllReminder] = useState([])

    const [getUserRemindersCalled, setgetUserRemindersCalled] = useState(false)

    async function getUserReminders() {


        if (getUserRemindersCalled) {
            return;
        }


        setgetUserRemindersCalled(true);

        const session = await getSession();

        const userEmail = session?.user?.email;

        const sendDataToAPI = { userEmail }

        const gettingUserReminder = await axios.post('/api/getReminder', sendDataToAPI);

        return setuserAllReminder(gettingUserReminder?.data?.userReminderList);
    }

    useEffect(() => {
        getUserReminders();
    }, [])


    const editAReminder = async (idOfTheItem) => {
        const itemId = idOfTheItem;

        router.push('/editReminder/' + itemId)
    };

    const deleteAReminder = async (idOfTheItem) => {
        const itemId = idOfTheItem;
        const data = { itemId };

        try {
            // Call your delete API endpoint here
            await axios.post('/api/deleteAReminder', data);

            // Remove the deleted item from the userAllReminder state
            setuserAllReminder(prevReminders => prevReminders.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <CartNav />
            <ToggleSwtich />
            <div className='flex gap-4 max-w-[1208px] mx-auto mt-24'>
                <SortBy sortByCustomClasses='py-2' />
                <SearchByName />
            </div>
            <div className='max-w-6xl mx-auto'>
                <table className="table-auto w-full text-sm mt-8">
                    <thead className=''>
                        <tr className='text-[#4D6472] text-left'>
                            <th className="text-center px-4 py-2 font-medium">Name</th>
                            <th className="text-center px-4 py-2 font-medium">Date Entered</th>
                            <th className="text-center px-4 py-2 font-medium">Contact Number</th>
                            <th className="text-center px-4 py-2 font-medium">Reminder</th>
                            <th className="text-center px-4 py-2 font-medium">Delete Reminder</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAllReminder?.map((item, index) => (
                            <tr key={index}>
                                <td className='text-center '>{item.name}</td>
                                <td className='text-center '>{moment(item.createdAt).format("DD-MM-YY HH:mm")}</td>
                                <td className='text-center '>{item.contactNumber}</td>
                                <td className='my-2 text-center cursor-pointer uppercase flex items-center justify-center border-2 rounded-3xl py-2 gap-2 w-[160px] m-auto' onClick={() => editAReminder(item._id)}>
                                    <Image width={20} height={20} src={'/assets/images/reminderPage/bellIcon.png'} alt="profile pic"></Image>
                                    set reminder
                                </td>
                                <td className='text-center cursor-pointer' onClick={() => deleteAReminder(item._id)}>Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Reminder