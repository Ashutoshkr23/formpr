import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Connecting To MongoDB
        await connectToDatabase();

        const { userName, userContactNumber, itemID, userCustomMessage, selectedDate } = req.body;

        const specificTime = new Date(selectedDate);
        const currentTime = new Date();
        const timeDifference = specificTime - currentTime;

        // Converting To DD-MM-YYYY HH-MM
        const mySelectedDate = new Date(selectedDate);
        const day = mySelectedDate.getDate().toString().padStart(2, '0');
        const month = (mySelectedDate.getMonth() + 1).toString().padStart(2, '0');
        const year = mySelectedDate.getFullYear().toString();
        const hours = mySelectedDate.getHours().toString().padStart(2, '0');
        const minutes = mySelectedDate.getMinutes().toString().padStart(2, '0');
        const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;

        const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber, customMessage: userCustomMessage, customDate: formattedDate }, { new: true });

        const message = {
            to: updatedReminder.userEmail,
            from: process.env.SENDGRID_EMAIL_ID,
            subject: 'Reminder Updated',
            text: 'Your reminder has been updated successfully.',
            html: `You have a meeting with ${userName} On ${formattedDate}. Their phone number is ${userContactNumber}. ${userCustomMessage}`
        };

        if (timeDifference > 0) {
            setTimeout(async () => {
                // Code to send the reminder to the user
                try {
                    await sgMail.send(message);
                    console.log('Notification email sent successfully');
                } catch (error) {
                    console.error('Error sending notification email:', error);
                }
            }, timeDifference);
        }

        res.json({
            success: true,
            updatedReminder: updatedReminder
        });
    }
}