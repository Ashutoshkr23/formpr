import shipping from '@/models/shipping';
import { connectToDatabase } from '../../lib/mongoose';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    try {
        await connectToDatabase();

        if (req.method === 'GET') {
            const { puuid } = req.query;

            const orderHistory = await shipping.find({ puuid: puuid });
            if (orderHistory && orderHistory.length > 0) {
                return res.status(200).json({ error: false, message: 'purchase found', result: orderHistory });
            } else {
                return res.status(404).json({ error: false, message: 'purchase not found', result: [] });
            }
        }

        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }

    catch (error) {
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
}
