import { connectToDatabase } from '../../lib/mongoose';
import Contact from '../../models/contact'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  await connectToDatabase();

  const { firstName, lastName, mobileNumber, companyNumber, email, companyLogo, deck } = req.body;

  const contact = new Contact({
    firstName,
    lastName,
    mobileNumber,
    companyNumber,
    email,
    companyLogo,
    deck,
  });

  try {
    await contact.save();
    return res.status(201).json({ message: 'Contact created successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create contact', error });
  }
}
