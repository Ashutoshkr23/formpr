import { connectToDatabase } from '../../lib/mongoose';
import Contact from '../../models/contact';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      await connectToDatabase();
      const { cardUuid, uuid } = req.query;
      
      if (cardUuid) {
        const contact = await Contact.findOne({ cardUuid });
        if (contact) {
          return res.status(200).json({ contact });
        }
        return res.status(404).json({ message: 'Contact not found' });
      } else if (uuid) {
        const contact = await Contact.findOne({ uuid });
        if (contact) {
          return res.status(200).json({ contact });
        }
        return res.status(404).json({ message: 'Contact not found' });
      } else {
        return res.status(400).json({ message: 'Invalid query parameters' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Unable to retrieve contact', error });
    }
  }
  

  if (req.method === 'POST') {
    try {
      await connectToDatabase();

      const { firstName, lastName, mobileNumber, companyNumber, email,designation, companyLogo, deck , website,
        whatsapp, linkedIn,
        Instagram,
        facebook,
        bio,template,uuid, cardUuid } = req.body;

      const contact = new Contact({
        firstName,
        lastName,
        mobileNumber,
        companyNumber,
        email,
        designation,
        companyLogo,
        deck,
        website,
        whatsapp,
        linkedIn,
        Instagram,
        facebook,
        bio,
        template,
        uuid ,
        cardUuid,
      });

      await contact.save();

      return res.status(201).json({ message: 'Contact created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Unable to create contact', error });
    }
  }

  if (req.method === 'PUT') {
    try {
      await connectToDatabase();
      const { uuid, field, value } = req.query;
      const contact = await Contact.findOneAndUpdate(
        { uuid },
        { [field]: value },
        { new: true }
      );
      if (contact) {
        return res.status(200).json({ contact });
      }
      return res.status(404).json({ message: 'Contact not found' });
    } catch (error) {
      return res.status(500).json({ message: 'Unable to update contact', error });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

