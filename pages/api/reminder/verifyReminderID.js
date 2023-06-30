// import logger from '@/lib/logger';
import { connectToDatabase } from '../../../lib/mongoose';
import setRemainderModel from '../../../models/setRemainderModel';
import mongoose from 'mongoose';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
    } catch (error) {
        // logger.fatal(`Error connecting to database ,Location:isSignedUp ,error:${error}`);
        return res.json({ error: "Connection Failed...!" });
    }
    if (req.method === 'POST') {
        const { id } = req.body;

        // Validate the id as a valid ObjectId
        const validId = /^[0-9a-fA-F]{24}$/.test(id);
        if (!validId) {
            return res.json({
                success: false,
                message: 'Invalid ID',
            });
        }

        try {
            // Use findById instead of find to retrieve a single document by id
            const getUserRemainder = await setRemainderModel.findById(id);
            if (!getUserRemainder) {
                return res.json({
                    success: false,
                    message: 'Reminder not found',
                });
            }

            return res.json({
                success: true,
                message: 'Reminder found',
                remainder: getUserRemainder,
            });
        } catch (error) {
            // logger.fatal(`Error verify Reminder ,Location:verifyReminderID ,error:${error}`);
            res.status(400).json({
                error: true,
                message: "Something went wrong!",
                result: error
            })

        }
    }
}
