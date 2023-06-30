import moment from 'moment/moment';
import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';
import logger from '@/lib/logger';
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
            const { userName, itemID } = req.body;

            const updatedReminder = await setRemainderModel.findOneAndUpdate({ _id: itemID }, { name: userName });

            res.json({
                success: true,
                updatedReminder: updatedReminder
            });
        } catch (error) {
            // logger.fatal(`Error on editAName ,Location:editAName ,error:${error}`);
            res.status(400).json({
                error: true,
                message: "Something went wrong!",
                result: error
            })
        }
    }
}