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
            const { cardsArray, cartItems, puuid, razorpay_payment_id, razorpay_order_id, razorpay_signature, address } = req.body;
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
            cardsArray.map((item) => {
                let supremeCard = false ;
                // this uuid is of supreme
                if(item.cardTypeUuid == "7031e440-bc0b-4b39-8b8e-2afe3360d744"){
                    supremeCard = true
                }

                let cuuid = uuidv4()
                let  tempObj = {
                    cuuid: cuuid,
                    puuid: puuid,
                    cardType: item.cardTypeUuid,
                    cardAmount: item.amount,
                    cardName: item.fullName,
                    companyName: item.companyName,
                    companyLogo: item.companyLogo,
                    designUuid: supremeCard ? "" : item.designUuid,
                    contactUrl: `https://loopcard.club/details/${cuuid}`
                }
                if(supremeCard){

                    tempObj.hexCode = item.hexCode,
                    tempObj.fontCode = item.fontCode,
                    tempObj.abstract = {
                        // this uuid is of not using abstract design
                        abstractUsed:item.designUuid == "1bb3aa1e-410f-441c-a290-827bccc7f777" ? false :true ,
                        abstractHexCode:"#ffffff",
                        abstractUuid : item.designUuid
                    }
                }
                console.log(tempObj,"tempObj")
                temp.push(tempObj)
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
                    firstName: address.firstName,
                    lastName: address.lastName,
                    address: address.address,
                    email: address.email,
                    phoneNumber: address.phoneNumber,
                    pinCode: address.pinCode,
                    city: address.city,
                    state: address.state,

                },
                orderStatus: 0,
                statusHistory: {
                    status: 0
                }
            }
            const updateShipping = new shipping(shippinData)
            // Save the instance to the database
            const savedShipping = await updateShipping.save();

            const fetchUserCards = await card.find({puuid :puuid })

            const updateUserProfile = await UserData.updateOne({ puuid: puuid }, { $inc: { totalCards: totalQuantity } })
            res.status(200).json({
                error: false,
                message: "Success",
                result: fetchUserCards,
            })
        } else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    } catch (error) {
        // console.log(error, "errr")
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
} 