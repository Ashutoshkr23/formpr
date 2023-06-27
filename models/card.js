import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const CardSchema = new mongoose.Schema({
    // c uuid is card Id
    cuuid: {
        type: String,
        default: uuidv4,
        unique: true
    },
    puuid: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
        required: true
    }, // card type will be id which will be coming from cardType.js object id
    cardAmount: {
        type: Number
    },
    // cardName is name displayed on card
    cardName: {
        type: String
    },
    companyLogo: {
        type: String
    },
    companyName: {
        type: String
    },
    designUuid: {
        type: String,
        default: ""
    }, // design uuid if its lite or elevate
    hexCode: {
        type: String,
        default: ""
    }, //hex color code of card if card is supreme
    fontCode: {
        type: String,
        default: "#000000"
    }, //font coded of card if card is supreme
    abstract: {
        abstractUsed: {
            type: Boolean,
            default: false
        },
        abstractHexCode: {
            type: String,
            default: "#FFFFFF"
        },
        abstractUuid: {
            type: String
        }
    },
    status: {
        type: Number,
        default: 0
    }, // status 0 means created and 1 means updated
    // above fields get filled while creating card and below fields will be updated
    // later details
    company: {
        type: String
    },
    name: {
        type: String
    },
    role: {
        type: String
    },
    companylink: {
        type: String
    },
    bio: {
        type: String
    },
    adress: {
        type: String
    },
    mobileNumber: {
        type: String
    },
    selectedTemplate: {
        type: String
    },
    // aws url will be stored in pfp
    profileImg: {
        type: String
    },
    cover: {
        type: String
    },

    //Social
    whatsappNumber: {
        type: String
    },
    mail: {
        type: String
    },
    linkedin: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    youtube: {
        type: String
    },
    facebook: {
        type: String
    },
    behance: {
        type: String
    },
    reddit: {
        type: String
    },
    shareContacts: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.models.Card || mongoose.model('Card', CardSchema);