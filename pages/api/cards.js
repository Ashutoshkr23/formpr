// import logger from '@/lib/logger';
import { connectToDatabase } from '../../lib/mongoose';
// import Purchase from '@/models/purchase';
import card from '@/models/card';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {
            const { cuuid } = req.body;

            const cardObj = await card.findOne({cuuid:cuuid})
            // logger.info('This is an informational log message');
            // logger.error('This is an informational error message');
            console.log(cardObj,"Cards server post")

            if (cardObj) {
                return res.status(200).json({ error: false, message: 'card found', result: cardObj });
            } else {
                return res.status(404).json({ error: true, message: 'card not found' });
            }
        }
        else if (req.method === 'GET') {

            const cards = await card.find()
            console.log(cards,"Cards server get")
            if (cards) {
                return res.status(200).json({ error: false, message: 'cards found', result: cards });
            } else {
                return res.status(404).json({ error: true, message: 'cards not found' });
            }
        }
       

        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }

    catch (error) {
        console.log(error,"err")
        return res.status(500).json({ message: 'Something went wrong', error });
    }
}
