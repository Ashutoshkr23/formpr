import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const UserDataSchema = new mongoose.Schema({
    puuid: { type: String, default: uuidv4, unique: true }, //puuid is person uuid
    // email, name nand avatar will be coming from google signin
    email: { type: String, unique: true },
    name: { type: String },
    avatar: { type: String },
    // bydefault total cards will be 0 and will be updated every time user buys
    totalCards: { type: Number, default: 0 },
    erc20WalletId: { type: String, required: true },
    privateKey: { type: String, required: true },


}, {
    timestamps: true
});

export default mongoose.models.UserData || mongoose.model('UserData', UserDataSchema);