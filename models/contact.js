import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

// import { number } from 'yup';

const ContactSchema = new mongoose.Schema({
  uuid: { type: String, default: uuidv4 },
  cardUuid:{type:String},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  companyNumber: { type: Number, required: true },
  email: { type: String, required: true },
  companyLogo: { type: String, required: true },
  deck: { type: String, required: true },
  website:{type:String},
  whatsapp:{type:String},
  linkedIn:{type:String},
  Instagram:{type:String},
  facebook:{type:String},
  bio:{type:String},

});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
