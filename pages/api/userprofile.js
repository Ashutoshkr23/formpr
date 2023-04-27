import { connectToDatabase } from '../../lib/mongoose';
import Userprofile from '@/models/userprofile';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
 

  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { email } = req.body;
      const userprofile = await Userprofile.findOne({ email });
      if (userprofile) {
        return res.status(200).json({ message: 'User profile already exists', userprofile: userprofile });
      } else {
        const uuid = uuidv4(); // generate UUID
        const newUserprofile = new Userprofile({
          email,
          uuid
        });
        await newUserprofile.save();
        return res.status(201).json({ message: 'User profile created successfully', userprofile: newUserprofile });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Problem in creating user profile', error });
    }
  }

  return res.status(400).json({ message: 'Invalid request method' });
}

  
