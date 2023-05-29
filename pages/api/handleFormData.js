import { connectToDatabase } from "@/lib/mongoose";
import card from "@/models/card";

export default async function handler(req, res) {
    try {
        await connectToDatabase();
    } catch (err) {

        return res.status(500).json({ message: 'Connection failed...!', error });

    }
    if (req.method === 'POST') {
        try {
            //   const {cuuid,puuid,themeId,firstName,lastName,bio,companyName,profilePicture,email,designation}
            const { cuuid, puuid, themeId, firstName, lastName, bio, companyName, mobileNumber, profilePicture, companyNumber, email, designation, companyLogo, deck, website,
                whatsapp, linkedIn,
                Instagram,
                facebook,
                template, uuid, cardUuid } = req.body;
        } catch (error) {
            return res.status(500).json({ message: 'Unable to manage cards', error });
        }
    } else {
        res.status(400).json({
            error: true,
            message: "This type of request is not allowed"
        })
    }
}