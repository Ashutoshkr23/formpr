import { connectToDatabase } from "@/lib/mongoose";
import UserData from "@/models/UserData";
import Card from "@/models/card";

export default async function handle(req, res) {
  try {
    await connectToDatabase();
  } catch (err) {
    return res.status(500).json({ message: "Connection failed...!", error: err });
  }

  if (req.method === "POST") {
    try {
      const requestData = req.body;
       console.log("Request Body:", requestData);
      const filter = {
        cuuid: requestData.cuuid,
        puuid: requestData.puuid,
      };
      const updateOperation = { $set: { ...requestData } };
      const updateCard = await Card.updateOne(filter, updateOperation);

      return res.status(200).json({ error: false, message: "Successfully updated", result: updateCard });
    } catch (error) {
      // console.log("Error:", error);
      return res.status(500).json({ message: "Unable to manage cards", error });
    }
  }

  if (req.method === "GET") {
    try {
      const { cuuid, userPuuid } = req.query;


      if (userPuuid !== undefined) {
        const shareContactsstatus = await UserData.findOne({ puuid: userPuuid })
        if (shareContactsstatus.shareContacts === true) {
          return res.status(200).json({ success: 200, message: "true", shareContactsstatus: shareContactsstatus });
        } else if (shareContactsstatus.shareContacts !== true) {
          return res.status(200).json({ success: 200, message: "false", shareContactsstatus: shareContactsstatus });
        }
      }

      if (cuuid !== undefined) {
        const card = await Card.findOne({ cuuid });
        if (card) {
          return res.status(200).json({ card });
        }
        return res.status(404).json({ message: "Card not found" });
      } else {
        return res.status(400).json({ message: "Invalid query parameters" });
      }
    } catch (error) {
      console.error("Error retrieving card:", error);
      return res.status(500).json({ message: "Unable to retrieve card", error });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}

export const config = {
  api: {
    bodyParser: true,
  },
};

