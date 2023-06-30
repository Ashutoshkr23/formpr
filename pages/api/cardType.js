import logger from '@/lib/logger';
import { connectToDatabase } from '../../lib/mongoose';
// import Purchase from '@/models/purchase';
import cardType from '@/models/cardType';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {
            const { amount, currency, cardName } = req.body;

            //const cardUuid=uuidv4

            const cardTypes = new cardType({
                amount,
                currency,
                cardName
            });

            await cardTypes.save();
            return res.status(201).json({ message: 'cardType created successfully' });
        }
        else if (req.method === 'GET') {

            const cardTypes = await cardType.find()
            if (cardTypes) {
                return res.status(200).json({ error: false, message: 'cardType found', result: cardTypes });
            } else {
                return res.status(404).json({ error: true, message: 'cardType not found' });
            }
        }
        else if (req.method === 'PUT') {

            const { uuid, designObj } = req.body;

            const designUuid = uuidv4()

            const filter = {
                cardTypeUuid: uuid
            }
            const query = {
                $push: {
                    designs: {
                        designUuid: designUuid,
                        designName: designObj.name,
                        hexCode: designObj.hexCode,
                        color: designObj.color,
                        gradient: designObj?.gradient,
                    }
                }
            }
            const updateData = await cardType.updateOne(filter, query)
            // console.log(updateData, "updateData")


            return res.status(201).json({ message: 'CardType updated successfully' });
        }

        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }

    catch (error) {
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
}
