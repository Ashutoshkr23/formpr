import logger from '@/lib/logger';
import { connectToDatabase } from '@/lib/mongoose';
import UserData from '@/models/UserData';

export default async function handler(req, res) {

    // Connecting To MongoDB
    try {
        await connectToDatabase();
    } catch (error) {
        logger.fatal(`Error connecting to database ,Location:isSignedUp ,error:${error}`);
        return res.json({ error: "Connection Failed...!" });
    }

    if (req.method === 'POST') {

        const { userAccountEmail } = req.body;

        // Here We Have To Use User Email, Currently No Idea From Where It's Getting Fetched, So It's Hardcoded For Now
        const getUserDetails = await UserData.findOne({ email: userAccountEmail });

        res.json({
            success: true,
            getUserDetails: getUserDetails
        })
    }
}