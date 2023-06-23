import { connectToDatabase } from '../../lib/mongoose'
import setRemainderModel from '../../models/setRemainderModel'
import UserData from '@/models/UserData';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { userEmail } = req.body;

        const gettinguserPuuid = await UserData.findOne({ email: userEmail })

        const userpuuid = gettinguserPuuid.puuid;

        const getUserRemainders = await setRemainderModel.find({ puuid: userpuuid });
        res.json({
            success: true,
            userRemainderList: getUserRemainders
        })
    }
}