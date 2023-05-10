import mongoose from 'mongoose';
//import { v4 as uuidv4 } from 'uuid';


const PurchaseSchema = new mongoose.Schema({
    line_items: {
        type: Object,
    },
    productInfoName: {
        type: String,
    },
    email: {
        type: String,
    },
    quantity: {
        type: String,
    },
    productInfoPrice: {
        type: String,
    },
    email: {
        type: String,
    },
    uuid: {
        type: String,
    },
    cardUuid: {
        type: String,
    },
    paid: {
        type: Boolean,
        default: false
    }
});

export default mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema);