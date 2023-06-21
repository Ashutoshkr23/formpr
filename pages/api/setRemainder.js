import { connectToDatabase } from '../../lib/mongoose'
import setRemainderModel from '../../models/setRemainderModel'

export default async function handler(req, res) {

    if (req.method === 'POST') {

        // Connecting To MongoDB
        await connectToDatabase();

        // Getting User cardUuid With It's Email From Front-End
        const { cardUuid, userEmail } = req.body;

        // Saving User cardUuid With It's Email In MongoDB
        const saveUser = await new setRemainderModel({
            cardUuid: cardUuid,
            userEmail: userEmail
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

