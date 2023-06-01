import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const CardSchema = new mongoose.Schema({
    // c uuid is card Id
    cuuid: { type: String, default: uuidv4, unique: true },
    puuid: { type: String, required: true },
    cardType: { type: mongoose.Schema.Types.ObjectId, required: true }, // card type will be id which will be coming from cardType.js object id
    cardAmount: { type: Number },

    fullName: { type: String },
    cardName: { type: String },
    mobileNumber: { type: String },
    // aws url will be stored in pfp
    profilePicture: { type: String },
    companyName: { type: String },
    companyNumber: { type: String },
    companyLogo: { type: String },
    email: { type: String },
    designation: { type: String },
    bio: { type: String },
    websiteUrl: { type: String },
    instagramUrl: { type: String },
    whatsappUrl: { type: String },
    linkedinUrl: { type: String },
    facebookUrl: { type: String },
    contactUrl: { type: String, required: true },
    deckUrl: { type: String },
    themeId: { type: String },  // theme id will be coming from theme.js uuid


});

export default mongoose.models.Card || mongoose.model('Card', CardSchema);