import moment from 'moment/moment';
import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Connecting To MongoDB
        await connectToDatabase();

        const { userName, itemID } = req.body;

        const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName });

        res.json({
            success: true,
            updatedReminder: updatedReminder
        });
    }
}