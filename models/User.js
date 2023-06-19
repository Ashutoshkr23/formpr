import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    image: { type: String },
}, {
    timestamps: true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);