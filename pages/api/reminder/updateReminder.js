import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Connecting To MongoDB
        await connectToDatabase();

        const { userName, userContactNumber, itemID } = req.body;

        await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber }, { new: true });

        res.json({
            success: true,
        })
    }
}
