import { connectToDatabase } from "@/lib/mongoose";
import card from "@/models/card";

export default async function handle(req, res) {
    try {
        await connectToDatabase();
    } catch (err) {
        return res.status(500).json({ message: 'Connection failed...!', error: err });
    }

    if (req.method === 'POST') {
        try {
            const requestData = req.body;
            console.log('Request Body:', requestData);
            const filter = {
                cuuid: requestData.cuuid, // Access cuuid directly from req.body
                puuid: requestData.puuid
            };
            const updateOperation = { $set: { ...requestData } };
            const updateCard = await card.updateOne(filter, updateOperation);

            return res.status(200).json({ error: false, message: "Successfully updated", result: updateCard });
        } catch (error) {
            console.log('Error:', error);
            return res.status(500).json({ message: 'Unable to manage cards', error });
        }
    } else {
        res.status(400).json({
            error: true,
            message: "This type of request is not allowed"
        });
    }
}

export const config = {
    api: { bodyParser: true }
};

