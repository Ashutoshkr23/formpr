import { connectToDatabase } from '../../lib/mongoose';
// import { v4 as uuidv4 } from 'uuid';
import card from '@/models/card';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {
            const { puuid } = req.body;

            if (!puuid) {
                return res.status(422).json({ error: "Missing required fields." });

            }



            const allCards = await card.find({ puuid: puuid })

            return res.status(200).json({ error: false, message: 'Cards fetch successfully', result: allCards });
        } else if (req.method == "GET") {

            try {

                const { cuuid, puuid } = req.query;
                if (!cuuid && puuid) {
                    return res.status(422).json({ error: "Missing required fields." });

                }

                const checkCard = await card.find({ puuid: puuid, cuuid: cuuid });
                if (checkCard && checkCard.length) {
                    return res.status(200).json({
                        error: false,
                        message: "Card is Valid",
                        valid: true,
                    })
                } else {
                    return res.status(200).json({
                        error: false,
                        message: "Card is InValid",
                        valid: false,
                    })
                }

            } catch (error) {
                return res.status(500).json({ message: 'Something went wrong', error });
            }

        }
        // else if (req.method === 'GET') {

        //     const cardTypes = await cardType.find()
        //     if (cardTypes) {
        //         return res.status(200).json({ error: false, message: 'cardType found', result: cardTypes });
        //     } else {
        //         return res.status(404).json({ error: true, message: 'cardType not found' });
        //     }
        // }

        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }

    catch (error) {
        return res.status(500).json({ message: 'Unable to manage cards', error });
    }
}
