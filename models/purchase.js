import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const PurchaseSchema = new mongoose.Schema({

  // puuid and cuuid will be personId and Card id respectively
  puuid: { type: String },
  cuuid: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  razorpay_payment_id: { type: String, required: true },
  razorpay_order_id: { type: String, required: true },
  razorpay_signature: { type: String, required: true },
  // order id will be created here
  orderId: { type: String, required: true, unique: true, default: uuidv4 },
  orderTrackingNumber: { type: String, default: "" },
  cardType: { type: mongoose.Schema.Types.ObjectId },
  // conact url wii be path of card which will be /cardId
  contactUrl: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema);