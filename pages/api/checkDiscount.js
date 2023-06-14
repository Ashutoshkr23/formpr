import { connectToDatabase } from '../../lib/mongoose'
import allowedUsersModel from '../../models/allowedUsersModel'

export default async function handler(req, res) {

    if (req.method === 'POST') {

        const { userEmail, getDiscountCodeValue } = req.body;

        // Connecting To MongoDB
        await connectToDatabase();

        const verifyCoupon = await allowedUsersModel.findOne({ couponCode: getDiscountCodeValue });

        if (verifyCoupon === null) {
            return res.json({
                success: false,
                message: 'Invalid Coupon Code'
            })
        }

        if (verifyCoupon.email === userEmail && verifyCoupon.couponCode === getDiscountCodeValue) {
            const couponCode = verifyCoupon.discountPercentage;
            return res.json({
                success: true,
                couponCode: couponCode
            })
        } else if (verifyCoupon.email !== userEmail || verifyCoupon.couponCode !== getDiscountCodeValue) {
            return res.json({
                success: false,
                message: 'Invalid Coupon Code'
            })
        }
    }
}