import { connectToDatabase } from '@/lib/mongoose';
import UserData from '@/models/UserData';

export default async function handler(req, res) {

    // Connecting To MongoDB
    await connectToDatabase();

    if (req.method === 'POST') {

        const { userAccountEmail, inputUserAccountName } = req.body;

        console.log(req.body);

        const getUserDetails = await UserData.findOneAndUpdate({ email: userAccountEmail }, { name: inputUserAccountName })
        res.json({
            success: true,
            getUserDetails: getUserDetails
        })
    }
}