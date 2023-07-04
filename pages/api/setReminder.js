import UserData from '@/models/UserData';
import { connectToDatabase } from '../../lib/mongoose'
import setReminderModel from '../../models/setReminderModel'

export default async function handler(req, res) {

    if (req.method === 'POST') {

        // Connecting To MongoDB
        await connectToDatabase();

        // Getting User cardUuid With It's Email From Front-End
        const { cardUuid, userEmail, userPuuid, userName, countactNumber } = req.body;

        const updateUserProfile = await UserData.findOne({ puuid: userPuuid })
        const userPUUID = updateUserProfile.puuid;

        if (userName === undefined && countactNumber === undefined) {
            const saveUser = await new setReminderModel({
                cardUuid: cardUuid,
                userEmail: userEmail,
                puuid: userPUUID
            });

            await saveUser.save()
                .then((saveUser) => {
                })
                .catch((err) => {
                    console.error(err);
                });
            return res.json({ success: true })

        } else if (userName !== undefined && countactNumber !== undefined) {
            const saveUser = await new setReminderModel({
                cardUuid: cardUuid,
                userEmail: userEmail,
                puuid: userPUUID,
                name: userName,
                contactNumber: countactNumber
            });

            await saveUser.save()
                .then((saveUser) => {
                })
                .catch((err) => {
                    console.error(err);
                });
            return res.json({ success: true })
        }

    }
}

