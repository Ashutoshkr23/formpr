import { connectToDatabase } from '../../lib/mongoose';
import Purchase from '@/models/purchase';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    if (req.method === 'POST') {
      const { email, uuid, cardUuid } = req.body;

      //const cardUuid=uuidv4

      const purchase = new Purchase({
        email,
        uuid,
        cardUuid,
      });

      await purchase.save();
      return res.status(201).json({ message: 'Purchase created successfully' });
    }
    else if (req.method === 'GET') {
      const { email } = req.query;

      const purchase = await Purchase.findOne({ email });
      if (purchase) {
        return res.status(200).json({ message: 'purchase found', cardUuid: purchase.cardUuid });
      } else {
        return res.status(404).json({ message: 'purchase not found' });
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
