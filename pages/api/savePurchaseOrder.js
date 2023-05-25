import { connectToDatabase } from '../../lib/mongoose'
import { v4 as uuidv4 } from 'uuid';
import card from '@/models/card';
import purchase from '@/models/purchase';
import UserData from '@/models/UserData';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {
            const { cartItems, puuid, razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
            if (!puuid) {
                return res.status(422).json({ error: "Missing required fields." });

            }
            let totalQuantity = 0;
            let totalAmount = 0;
            // Loop over the array and add up the quantity field of each object
            for (var i = 0; i < cartItems.length; i++) {
                totalQuantity += cartItems[i].quantity;
                totalAmount += cartItems[i].amount * cartItems[i].quantity;
            }
            console.log(totalQuantity, "total", totalAmount);
            let temp = []
            cartItems.map((item) => {
                for (let i = 0; i < item.quantity; i++) {
                    temp.push({
                        cuuid: uuidv4(),
                        puuid: puuid,
                        cardType: item._id,
                        cardAmount: item.amount,
                    })
                }
            })
            console.log(temp, "temp")
            const data = await card.insertMany(temp)
            console.log(data, "data")
            let tempPurchaseArr = []
            let orderId = uuidv4()

            data.map((item) => {
                let tempObj = {
                    puuid: puuid,
                    cuuid: item.cuuid,
                    amount: item.cardAmount,
                    currency: "INR",
                    razorpay_payment_id: razorpay_payment_id,
                    razorpay_order_id: razorpay_order_id,
                    razorpay_signature: razorpay_signature,
                    orderId: orderId,
                    orderTrackingNumber: "1234",
                    cardType: item.cardType,
                    contactUrl: `/${item.cuuid}`,
                    shippingAddress: {
                        recipientName: "John",
                        lane1: "abcd",
                        postalCode: "400072",
                        state: "Maharashtra",

                    }
                }
                tempPurchaseArr.push(tempObj)
            })
            const purchaseData = await purchase.insertMany(tempPurchaseArr)
            const updateUserProfile = await UserData.updateOne({ puuid: puuid }, { $inc: { totalCards: totalQuantity } })
            console.log(purchaseData, "purchase", updateUserProfile)

            res.status(200).json({
                error: false,
                message: "Success",
                result: cartItems
            })
        } else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        console.log(error, "Error")
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
} 