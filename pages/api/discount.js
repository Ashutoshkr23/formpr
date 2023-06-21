import { connectToDatabase } from '../../lib/mongoose';
import DiscountSchema from '@/models/DiscountSchema';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === 'POST') {
            const { discountType,discountCode, amount,percentage,minimumAmount,maximumAmount } = req.body;

            const discountUuid = uuidv4()
            //const cardUuid=uuidv4

            const discounts = new DiscountSchema({
                discountUuid:discountUuid,
                discountType:discountType,
                discountCode:discountCode,
                amount:amount,
                percentage:percentage,
                minimumAmount:minimumAmount,
                maximumAmount:maximumAmount,
            });

            await discounts.save();
            return res.status(201).json({ message: 'Discount created successfully' });
        }
        // else if (req.method === 'GET') {

        //     const cardTypes = await cardType.find()
        //     if (cardTypes) {
        //         return res.status(200).json({ error: false, message: 'cardType found', result: cardTypes });
        //     } else {
        //         return res.status(404).json({ error: true, message: 'cardType not found' });
        //     }
        // }
        else if (req.method === 'PUT') {

            const {  discountCode } = req.body;

            if(!discountCode){
                return res.status(200).json({
                    error:true,
                    message:"No discount Code recieved !"
                })
            }
            
            const discountData = await DiscountSchema.findOne({
                discountCode:discountCode
            })
            if(!discountData){
                res.status(200).json({error:true,message:"Discount Code Invalid !"})
            }
            // console.log(updateData, "updateData")


            return res.status(200).json({error:false,message:"Discount Applied Successfully !",result:discountData ? discountData:[]});
        }

        else {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }

    catch (error) {
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
}
