import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  companyNumber: { type: String, required: true },
  email: { type: String, required: true },
  companyLogo: { type: String, required: true },
  deck: { type: String, required: true },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
