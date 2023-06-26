import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const ShippingSchema = new mongoose.Schema({

    // puuid and cuuid will be personId and Card id respectively
    puuid: { type: String },
    totalAmount: { type: Number, required: true }, //this is total Amount of cards without discount
    finalPrice: { type: Number, required: true }, // this is the final Price users pay
    discountedAmount: { type: Number,default:0 }, //this is amount discounted to user if user uses discount code
    numberOfCards: { type: Number, required: true },
    currency: { type: String, required: true, default: "INR" },
    razorpay_payment_id: { type: String, required: true },
    razorpay_order_id: { type: String, required: true },
    razorpay_signature: { type: String, required: true },
    card_types : {
        lite:{type:Number ,default: 0} ,
        elevate:{type:Number ,default: 0},
        supreme:{type:Number ,default: 0} ,
    }, //this will contain types of card user buys
    shippingAddress: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        pinCode: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            default: ""
        },
    },
    // order id will be created here
    orderId: { type: String, required: true, unique: true, default: uuidv4 },
    orderTrackingNumber: { type: String, default: "" },
    orderStatus: { type: Number, default: 0 }, //0: order placed ,1:ready for dispatch ,2:out for delivery ,3 :delivered ,4:cancelled 
    // status history is for saving details of when orderStatus was updated
    statusHistory: [
        {
            status: { type: Number, default: 0 }, //0: order placed ,1:ready for dispatch ,2:out for delivery ,3 :delivered ,4:cancelled 
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.models.Shipping || mongoose.model('Shipping', ShippingSchema);