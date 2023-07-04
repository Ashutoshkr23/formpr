import { connectToDatabase } from '../../lib/mongoose'
import setReminderModel from '../../models/setReminderModel'

export default async function handler(req, res) {

    if (req.method === 'POST') {

        // Connecting To MongoDB
        await connectToDatabase();

        const { itemId } = req.body;

        // Here We Have To Use User Email, Currently No Idea From Where It's Getting Fetched, So It's Hardcoded For Now
        const getUserReminders = await setReminderModel.deleteOne({ _id: itemId });
        res.json({
            success: true,
        })
    }
}

