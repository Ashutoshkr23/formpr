import { connectToDatabase } from '../../lib/mongoose';
import Contact from '../../models/contact';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();
      const { uuid } = req.query;
      const contact = await Contact.findOne({ uuid });
      if (contact) {
        return res.status(200).json({ contact });
      }
      return res.status(404).json({ message: 'Contact not found' });
    } catch (error) {
      return res.status(500).json({ message: 'Unable to retrieve contact', error });
    }
  }

  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { firstName, lastName, mobileNumber, companyNumber, email, companyLogo, deck ,uuid } = req.body;

      const contact = new Contact({
        firstName,
        lastName,
        mobileNumber,
        companyNumber,
        email,
        companyLogo,
        deck,
        uuid ,
      });

      await contact.save();

      return res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Unable to create contact', error });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

