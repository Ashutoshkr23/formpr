import { connectToDatabase } from '../../lib/mongoose';
import Purchase from '@/models/purchase';
// import { Product } from "@/models/Product";

// Stripe Commands
const stripe = require('stripe')(process.env.STRIPE_SK);

export default async function handle(req, res) {

    await connectToDatabase();

    if (req.method !== 'POST') {
        res.json("Should be POST request");
        return;
    }

    const { email, uuid, cardUuid } = req.body;

    const productInfoName = "Cart 1"
    const quantity = "1"
    const productInfoPrice = "100"

    let line_items = [];

    line_items.push({
        quantity,
        price_data: {
            currency: 'USD',
            product_data: { name: productInfoName },
            // If * 100 Not Done, Then Price Will Shot 99.99 Instead Of 9999
            unit_amount: quantity * productInfoPrice * 100,
        }
    });

    // Will Create Order In MongoDB Database
    const orderDoc = await Purchase.create({
        line_items,
        productInfoName,
        email,
        quantity,
        productInfoPrice,
        email,
        uuid,
        cardUuid,
    })

    // Using Stripe To Create Payment
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        customer_email: email,
        success_url: process.env.PUBLIC_URL + `/ContactForm?success=1`,
        cancel_url: process.env.PUBLIC_URL + `/ContactForm?canceled=1`,
        metadata: { orderId: orderDoc._id.toString() },
    })

    res.json({
        url: session.url
    });
}
