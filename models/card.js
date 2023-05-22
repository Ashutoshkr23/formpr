import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const CardSchema = new mongoose.Schema({
    // c uuid is card Id
    cuuid: { type: String, default: uuidv4, unique: true },
    puuid: { type: String, required: true },
    // theme id will be coming from theme.js uuid
    themeId: { type: String },
    // card type will be id which will be coming from cardType.js object id
    cardType: { type: mongoose.Schema.Types.ObjectId },
    firstName: { type: String },
    lastName: { type: String },
    bio: { type: String },
    companyName: { type: String },
    phone: { type: String },
    // aws url will be stored in pfp
    profilePicture: { type: String },
    email: { type: String },
    designation: { type: String },
    instagramUrl: { type: String },
    whatsappUrl: { type: String },
    linkedinUrl: { type: String },
    facebookUrl: { type: String },
    contactUrl: { type: String },
    deckUrl: { type: String },
    name: { type: String },
    avatar: { type: String },

});

export default mongoose.models.Card || mongoose.model('Card', CardSchema);