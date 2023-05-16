import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


const UserprofileSchema = new mongoose.Schema({
    uuid: { type: String, default: uuidv4 },
  
    email: { type: String, },
    account:{
      type:String,
    }
   
  });
  
  export default mongoose.models.Userprofile || mongoose.model('Userprofile', UserprofileSchema);