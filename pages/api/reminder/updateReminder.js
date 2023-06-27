import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';
import moment from 'moment-timezone';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const { userName, userContactNumber, itemID, userCustomMessage, selectedDate } = req.body;

        const specificTime = new Date(selectedDate);
        const currentTime = new Date();
        const timeDifference = Math.abs((specificTime - currentTime));

        // Converting To DD-MM-YYYY HH-MM
        const mySelectedDate = new Date(selectedDate);
        const userTimezone = moment.tz.guess();
        const formattedDate = moment(mySelectedDate).tz(userTimezone).format('DD-MM-YYYY HH:mm');

        const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber, customMessage: userCustomMessage, customDate: formattedDate }, { new: true });
        // console.log(updatedReminder);
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
        } else {
            // console.log('Selected date is in the past. No notification will be sent.');
        }

        res.json({
            success: true,
            updatedReminder: updatedReminder
        });
    }
}