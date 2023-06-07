import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Connecting To MongoDB
        await connectToDatabase();

        const { userName, userContactNumber, itemID } = req.body;

        const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber }, { new: true });

        const message = {
            to: updatedReminder.userEmail,
            from: process.env.SENDGRID_EMAIL_ID,
            subject: 'Reminder Updated',
            text: 'Your reminder has been updated successfully.',
            html: `You have a meeting with ${userName}. Their phone number is ${userContactNumber}.`
        };

        try {
            await sgMail.send(message);
            console.log('Notification email sent successfully');
        } catch (error) {
            console.error('Error sending notification email:', error);
        }

        res.json({
            success: true,
            updatedReminder: updatedReminder
        })
    }
}
