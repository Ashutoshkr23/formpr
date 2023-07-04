import { connectToDatabase } from '../../../lib/mongoose';
import setReminderModel from '../../../models/setReminderModel';
import mongoose from 'mongoose';
import moment from 'moment-timezone';
// import logger from '@/lib/logger';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    try {
        await connectToDatabase();
    } catch (error) {
        // logger.fatal(`Error connecting to database ,Location:isSignedUp ,error:${error}`);
        return res.json({ error: "Connection Failed...!" });
    }
    if (req.method === 'POST') {

        try {

            const { itemID, userName, userContactNumber, userCustomMessage, formattedDateTime, reminderPlatform, enableReminder, disableReminder } = req.body;
            const objectLength = Object.keys(req.body).length;

            console.log(req.body);

            if (objectLength === 2 && disableReminder === false) {
                const getSendRemidnerBooleanValue = await setReminderModel.findOne({ _id: itemID });
                const updatedReminder = await setReminderModel.findOneAndUpdate({ _id: itemID }, { sendReminder: !getSendRemidnerBooleanValue.sendReminder }, { new: true });
                return res.json({
                    success: true,
                    updatedReminder: updatedReminder
                });
            }

            if (objectLength === 4 && userName.length !== 0 && userContactNumber.length !== 0) {
                const updatedReminder = await setReminderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber }, { new: true });
                return res.json({
                    success: true,
                    updatedReminder: updatedReminder
                });
            } else if (objectLength === 7 && userCustomMessage.length !== 0 && formattedDateTime.length !== 0 && reminderPlatform.length !== 0) {

                const updatedReminder = await setReminderModel.findOneAndUpdate({ _id: itemID }, { name: userName, contactNumber: userContactNumber, customMessage: userCustomMessage, customDate: formattedDateTime, reminderPlatform: reminderPlatform, sendReminder: enableReminder }, { new: true });

                // Finding Time Difference Between Date Selected By User, & Current Date
                const timestamp1 = new Date(formattedDateTime);
                const timestamp2 = new Date();

                const difference = timestamp1 - timestamp2;

                // Converting The Time Difference To Milliseconds
                const milliseconds = Math.abs(difference);

                // ! If Time Difference Is Greater That 30 Days
                // ^ Then It Will Run An Interval At Every Hour
                // & And If Time Difference Is Less Than 1 Hour
                // * It Will Send The Mail To User After A Timeout Of 1 Minute
                // ~ But If User Disabled Their Reminder After timeDifference < 3600000
                // ! It Will Not Send The Reminder
                if (milliseconds > 2592000000) {
                    setInterval(async () => {
                        const findReminder = await setReminderModel.find({ sendReminder: true, expired: false });

                        if (findReminder.length === 0) {

                            console.log("No Reminders Found!");

                        } else if (findReminder.length >= 1) {

                            console.log(findReminder.length + " Reminders Found.");

                            for (let i = 0; i < findReminder.length; i++) {

                                const timestamp1 = new Date(findReminder[i].customDate);
                                const timestamp2 = new Date();
                                const timeDifference = Math.abs(timestamp2 - timestamp1);

                                console.log(timeDifference);

                                if (timeDifference < 3600000) {
                                    console.log("Called");
                                    setTimeout(async () => {
                                        if (findReminder.sendReminder === true && findReminder.expired === false) {
                                            const findReminderID = findReminder._id;
                                            const expireTheReminder = await setReminderModel.findOneAndUpdate({ _id: findReminderID }, { expired: true }, { new: true });
                                            const message = {
                                                to: findReminder.userEmail,
                                                from: process.env.SENDGRID_EMAIL_ID,
                                                subject: 'Reminder Updated',
                                                text: 'Your reminder has been updated successfully.',
                                                html: `You have a meeting with ${findReminder[i].name} On ${findReminder[i].customDate}. Their phone number is ${findReminder[i].contactNumber}. ${findReminder[i].customMessage}`
                                            };
                                            await sgMail.send(message);
                                            console.log('Notification email sent successfully');
                                        } else {
                                            console.log("Mail Not Send, Because Reminder Disabled!");
                                        }
                                    }, 60000);
                                }
                            }
                        }
                    }, 3600000);
                } else {

                    const message = {
                        to: updatedReminder.userEmail,
                        from: process.env.SENDGRID_EMAIL_ID,
                        subject: 'Reminder Updated',
                        text: 'Your reminder has been updated successfully.',
                        html: `You have a meeting with ${userName} On ${formattedDateTime}. Their phone number is ${userContactNumber}. ${userCustomMessage}`
                    };

                    if (milliseconds > 0) {
                        setTimeout(async () => {
                            const checkReminder = await setReminderModel.findOne({ _id: itemID }).select('sendReminder');

                            if (checkReminder === null) {
                                return false;
                            }
                            if (checkReminder.sendReminder === false) {
                                return;
                            }

                            // Code To Send The Reminder To The User
                            try {
                                const expireTheReminder = await setReminderModel.findOneAndUpdate({ _id: itemID }, { expired: true }, { new: true });
                                await sgMail.send(message);
                                console.log('Notification email sent successfully');
                            } catch (error) {
                                console.error('Error sending notification email:', error);
                            }
                        }, milliseconds);
                    } else {
                        // console.log('Selected date is in the past. No notification will be sent.');
                    }
                    return res.json({
                        success: true,
                        // updatedReminder: updatedReminder
                    });
                }
            }
        }
        catch (error) {
            // logger.fatal(`Error on updateRemider ,Location:updateRemider ,error:${error}`);
            res.status(400).json({
                error: true,
                message: "Something went wrong!",
                result: error
            })
        }
    }
}