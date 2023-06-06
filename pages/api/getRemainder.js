import { connectToDatabase } from '../../lib/mongoose'
import setRemainderModel from '../../models/setRemainderModel'

export default async function handler(req, res) {

    if (req.method === 'POST') {

        // Connecting To MongoDB
        await connectToDatabase();

        // Here We Have To Use User Email, Currently No Idea From Where It's Getting Fetched, So It's Hardcoded For Now
        const getUserRemainders = await setRemainderModel.find({ userEmail: 'fgcvbh@werdfgh' });
        res.json({
            success: true,
            userRemainderList: getUserRemainders
        })
    }
}

