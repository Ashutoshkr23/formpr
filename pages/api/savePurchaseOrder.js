import { connectToDatabase } from '../../lib/mongoose'
import { v4 as uuidv4 } from 'uuid';
import card from '@/models/card';
import purchase from '@/models/purchase';
import UserData from '@/models/UserData';
import shipping from '@/models/shipping';

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
            let temp = []
            cartItems.map((item) => {
                for (let i = 0; i < item.quantity; i++) {
                    let cuuid = uuidv4()
                    temp.push({
                        cuuid: cuuid,
                        puuid: puuid,
                        cardType: item._id,
                        cardAmount: item.amount,
                        contactUrl: `https://loopcard.club/details/${cuuid}`
                    })
                }
            })
            const data = await card.insertMany(temp)
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
                    // shippingAddress: {
                    //     recipientName: "John",
                    //     lane1: "abcd",
                    //     postalCode: "400072",
                    //     state: "Maharashtra",

                    // }
                }
                tempPurchaseArr.push(tempObj)
            })
            const purchaseData = await purchase.insertMany(tempPurchaseArr)
            const shippinData = {
                puuid: puuid,
                totalAmount: totalAmount,
                numberOfCards: totalQuantity,
                currency: "INR",
                razorpay_payment_id: razorpay_payment_id,
                razorpay_order_id: razorpay_order_id,
                razorpay_signature: razorpay_signature,
                orderId: orderId,
                orderTrackingNumber: "1234",
                shippingAddress: {
                    recipientName: "John",
                    lane1: "abcd",
                    postalCode: "400072",
                    state: "Maharashtra",

                },
                orderStatus: 0,
                statusHistory: {
                    status: 0
                }
            }
            const updateShipping = new shipping(shippinData)
            // Save the instance to the database
            const savedShipping = await updateShipping.save();

            const updateUserProfile = await UserData.updateOne({ puuid: puuid }, { $inc: { totalCards: totalQuantity } })

            res.status(200).json({
                error: false,
                message: "Success",
                result: cartItems
            })
        } else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
} 