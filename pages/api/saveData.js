import Purchase from '../../models/purchase';
import { connectToDatabase } from '../../lib/mongoose'
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {

      // Save the purchase data to MongoDB
      const {email,uuid,amount,currency}=req.body;
    //   const orderId="1335";
    //   const amount=499;
    //   const currency="INR";


    //   console.log(order_Id)
      console.log(amount)
      console.log(currency)

      

      // Connect to the MongoDB database

      // Create a new purchase document
          const cardUuid=uuidv4();

      const purchase = new Purchase({
        email,
        uuid,
        cardUuid,
        amount,
        currency,
      });
      console.log(cardUuid)

      await purchase.save();

     return  res.status(200).json({ message: 'Data saved successfully' });
    }  else {
        return res.status(405).json({ message: 'Method not allowed' });
      }
    } 
    
    catch (error) {
      return res.status(500).json({ message: 'Unable to create purchase', error });
    }
  }

