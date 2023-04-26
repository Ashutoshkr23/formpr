import { connectToDatabase } from '../../lib/mongoose';
import Userprofile from '@/models/userprofile';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { email,uuid } = req.body;

      const userprofile = new Userprofile({
        email,uuid
      });

      await userprofile.save();

      return res.status(201).json({ message: 'User profile created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Unable to create user profile', error });
    }
  }
}

  
