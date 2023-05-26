import { connectToDatabase } from '../../lib/mongoose';
import theme from '@/models/theme';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {
            const { mainBackground, innerBackground, contactButtonColor, contactButtonFontColor, primaryFontColor, secondaryFontColor } = req.body;

            //  console.log(cardUuid)
            //const cardUuid=uuidv4
            const themeId = uuidv4()
            const themeData = new theme({
                mainBackground, innerBackground, contactButtonColor, contactButtonFontColor, primaryFontColor, secondaryFontColor, themeId
            });

            await themeData.save();
            return res.status(201).json({ message: 'Theme created successfully' });
        }
        else if (req.method === 'GET') {
            //console.log('emailsss:', email);

            const themeData = await theme.find()
            if (themeData) {
                return res.status(200).json({ error: false, message: 'Theme found', result: themeData });
            } else {
                return res.status(404).json({ error: true, message: 'Theme not found' });
            }
        }

        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }

    catch (error) {
        return res.status(500).json({ message: 'Unable to create Theme', error });
    }
}
