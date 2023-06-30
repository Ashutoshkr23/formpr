import logger from '@/lib/logger';
import { connectToDatabase } from '@/lib/mongoose';
import UserData from '@/models/UserData';

export default async function handler(req, res) {

    try {
        await connectToDatabase();
    } catch (error) {
        logger.fatal(`Error connecting to database ,Location:isSignedUp ,error:${error}`);
        return res.json({ error: "Connection Failed...!" });
    }

    if (req.method === 'POST') {
        try {

            const { userAccountEmail, inputUserAccountName } = req.body;

            console.log(req.body);

            const getUserDetails = await UserData.findOneAndUpdate({ email: userAccountEmail }, { name: inputUserAccountName })
            res.json({
                success: true,
                getUserDetails: getUserDetails
            })
        } catch (error) {
            logger.fatal(`Error changes user detais ,Location:changeUserDetails ,error:${error}`);
            res.status(400).json({
                error: true,
                message: "Something went wrong"
            })
        }
    }
}