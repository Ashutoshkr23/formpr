import { connectToDatabase } from '../../lib/mongoose'
import setReminderModel from '../../models/setReminderModel'
import UserData from '@/models/UserData';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { userEmail } = req.body;

        const gettinguserPuuid = await UserData.findOne({ email: userEmail })

        if (gettinguserPuuid === null) {
            return res.json({
                success: false,
            })
        } else {

            const userpuuid = gettinguserPuuid.puuid;

            const getUserReminders = await setReminderModel.find({ puuid: userpuuid });
            return res.json({
                success: true,
                userReminderList: getUserReminders
            })
        }
    }
}