import { connectToDatabase } from '../../lib/mongoose';
import Userprofile from '@/models/userprofile';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  try {
    await connectToDatabase();

    if (req.method === 'POST') {
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
    } else if (req.method === 'GET') {
      const { email } = req.query;
      console.log('emailsss:', email);

      const userprofile = await Userprofile.findOne({ email });
      if (userprofile) {
        return res.status(200).json({ message: 'User profile found', uuid: userprofile.uuid  });
      } else {
        return res.status(404).json({ message: 'User profile not found' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid request method' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error', error });
  }
}

          



  // else if  
  // (req.method === 'GET') {
  //   try {
  //     await connectToDatabase();

  //     const { email } = req.query;
  //     const userprofile = await Userprofile.findOne({ email });

  //     if (!userprofile) {
  //       return res.status(404).json({ message: 'User profile not found' });
  //     }

  //     return res.status(200).json({ userprofile });
  //   } catch (error) {
  //     return res.status(500).json({ message: 'Problem in retrieving user profile', error });
  //   }
  // } 


