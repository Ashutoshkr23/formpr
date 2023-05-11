import mongoose from 'mongoose';
//import { v4 as uuidv4 } from 'uuid';


const PurchaseSchema = new mongoose.Schema({
    email: { type: String, },

    uuid: { type: String,  },
  
   cardUuid:{type:String,}
   
  });
  
  export default mongoose.models.Purchase || mongoose.model('Purchase', PurchaseSchema);