import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const PurchaseSchema = new mongoose.Schema({
  //   email: { 
  //     type: String, 
  //   },

  //   uuid: { 
  //     type: String,  
  //   },

  //  cardUuid:{
  //   type:String,
  // },

  // amount: {
  //   type: Number,
  //   required: true,
  // },
  // currency: {
  //   type: String,
  //   required: true,
  // },

  // puuid and cuuid will be personId and Card id respectively
  puuid: { type: String },
  cuuid: { type: String },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  shippingAddress: {
    recipientName: {
      type: String,
      required: true
    },
    lane1: {
      type: String,
      required: true,
    },
    lane2: {
      type: String,
      default: "",
    },
    postalCode: {
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
  cardType: { type: mongoose.Schema.Types.ObjectId },
  // conact url wii be path of card which will be /cardId
  contactUrl: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

export default mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema);