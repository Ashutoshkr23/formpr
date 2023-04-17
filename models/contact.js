import mongoose from 'mongoose';
import { number } from 'yup';

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: Number, required: true },
  companyNumber: { type: Number, required: true },
  email: { type: String, required: true },
  companyLogo: { type: String, required: true },
  deck: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
