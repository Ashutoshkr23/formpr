import UserData from '@/models/UserData';
import { connectToDatabase } from '../../lib/mongoose'
import setRemainderModel from '../../models/setRemainderModel'

export default async function handler(req, res) {

    if (req.method === 'POST') {

        // Connecting To MongoDB
        await connectToDatabase();

        // Getting User cardUuid With It's Email From Front-End
        const { cardUuid, userEmail, userPuuid } = req.body;

        // const updateUserProfile = await UserData.find({ puuid: puuid }, { $inc: { totalCards: totalQuantity } })
        const updateUserProfile = await UserData.findOne({ puuid: userPuuid })

        const userPUUID = updateUserProfile.puuid;

        // Saving User cardUuid With It's Email In MongoDB
        const saveUser = await new setRemainderModel({
            cardUuid: cardUuid,
            userEmail: userEmail,
            puuid: userPUUID
        });

        console.log(saveUser);

        await saveUser.save()
            .then((saveUser) => {
            })
            .catch((err) => {
                console.error(err);
            });
        res.json({ success: true })
    }
}

