import logger from '@/lib/logger';
import { connectToDatabase } from '@/lib/mongoose';
import UserData from '@/models/UserData';
import card from '@/models/card';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
    } catch (error) {
        logger.fatal(`Error connecting to database ,Location:isSignedUp ,error:${error}`);
        return res.json({ error: "Connection Failed...!" });
    }

    if (req.method === 'POST') {

        const { userEmail, revertOnOffValue } = req.body;

        if (userEmail !== undefined && revertOnOffValue === undefined) {
            const getUserSharingDetails = await UserData.findOne({ email: userEmail });
            res.json({
                success: true,
                getUserSharingDetails: getUserSharingDetails
            })
        } else if (userEmail !== undefined && revertOnOffValue !== undefined) {
            const getUserCardDetails = await UserData.findOneAndUpdate({ email: userEmail }, { shareContacts: revertOnOffValue });
            const shareContactsValue = getUserCardDetails.shareContacts;
            res.json({
                success: true,
                shareContactsValue: shareContactsValue
            })
        }


    }
}