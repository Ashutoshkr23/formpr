import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const CardTypeSchema = new mongoose.Schema({
    // unique uuid
    cardTypeUuid: { type: String, default: uuidv4, unique: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    cardName: { type: String, required: true }

});

export default mongoose.models.CardType || mongoose.model('CardType', CardTypeSchema);