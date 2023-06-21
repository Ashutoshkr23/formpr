import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const DiscountSchema = new mongoose.Schema({
    // unique uuid
    discountUuid: { type: String, default: uuidv4, unique: true },
    discountCode:{type:String,required :true ,unique:true},
    discountType: { type: Number, required: true }, // 1 is amount based , 2 is percentage based
    amount: { type: Number, default:0 },
    percentage: { type: Number, default:0 },
    minimumAmount:{type:Number,default: 0}, //if discount is applicable on purchases made above min amount
    maximumAmount:{type:Number,default:0}   //if its percentage based and then too there is maximum limit of discount

});

export default mongoose.models.DiscountSchema || mongoose.model('DiscountSchema', DiscountSchema);