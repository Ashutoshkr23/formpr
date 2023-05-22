import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const UserprofileSchema = new mongoose.Schema({
  puuid: { type: String, default: uuidv4, unique: true }, //puuid is person uuid
  // email, name nand avatar will be coming from google signin
  email: { type: String, },
  name: { type: String },
  avatar: { type: String },
  // bydefault total cards will be 0 and will be updated every time user buys
  totalCards: { type: Number, default: 0 },

});

export default mongoose.models.Userprofile || mongoose.model('Userprofile', UserprofileSchema);