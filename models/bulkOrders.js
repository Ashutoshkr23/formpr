import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const BulkOrders = new mongoose.Schema({

    // order id will be created here
    orderId: { type: String, required: true, unique: true, default: uuidv4 },
    orderNumber:{type:Number,required:true,unique:true},
    email:{type:String,required:true},
    orderDate: {
        type: Date,
        default: Date.now
    },
    orderAmount: { type: Number, required: true },
    companyName:{type:String,required : true},
    // puuid and cuuid will be personId and Card id respectively
    puuid: { type: String },
    cuuid:{type:String},
    currency: { type: String, required: true, default: "INR" },    
    orderTrackingNumber: { type: String,required:true}, //this number will be common for all orders at one time
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

export default mongoose.models.BulkOrders || mongoose.model('BulkOrders', BulkOrders);