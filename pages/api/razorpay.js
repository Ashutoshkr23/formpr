import DiscountSchema from '@/models/DiscountSchema';
import Razorpay from 'razorpay';
import shortid from 'shortid';
// import Purchase from '../../models/purchase';
// import { connectToDatabase } from '../../lib/mongoose';

export default async function handler(req, res) {
  const { cartItems ,discountCode} = req.body;

  if (!cartItems.length) {
    return res.status(400).json({
      error: 'Missing required field',
    });
  }
  if (req.method === 'POST') {
    // Initialize Razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });
    

    const totalAmount = await discountAmount(cartItems,discountCode)
    console.log(totalAmount,"total")

    // Create an order -> generate the OrderID -> Send it to the Front-end
    // Also, check the amount and currency on the backend (Security measure)
    const payment_capture = 1;
    const amount = parseInt(totalAmount);
    const currency = 'INR';
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);

      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      res.status(400).json({
        error: 'Failed to create Razorpay order',
      });
    }
  } else {
    // Handle any other HTTP method
    res.status(405).end();
  }
}



const discountAmount = async (cartItems, discountCode) => {
  if (cartItems) {
    // let totalQuantity = 0;
    let totalAmount = 0;
    let discountedAmount = 0;
    let finalPrice = 0;
    // Loop over the array and add up the amount field of each object
    for (var i = 0; i < cartItems.length; i++) {
      // totalQuantity += cartItems[i].quantity;
      totalAmount += cartItems[i].amount * cartItems[i].quantity;
    }

    if (discountCode && discountCode.length) {
      const discountData = await DiscountSchema.findOne({
        discountCode: discountCode,
      });
      if (discountData) {
        if (discountData.discountType == 2) {
          const discount = (totalAmount * discountData.percentage) / 100;
          discountedAmount = Number(discount.toFixed(2));
          const finalAmount = totalAmount - discount;
          // const roundedTotalPrice = Math.round(finalAmount * 100) / 100;
          const roundedTotalPrice = Number(finalAmount.toFixed(2));
          finalPrice = roundedTotalPrice;
        } else {
          discountedAmount = discountData.amount;

          const finalAmount = totalAmount - discountData.amount;
          finalPrice = finalAmount;
        }
      } else {
        finalPrice = totalAmount;
      }
    }else{
      finalPrice = totalAmount
    }
    return finalPrice
  }
};

