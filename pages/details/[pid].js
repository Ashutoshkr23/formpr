import { useRouter } from 'next/router';
import Contact from '../../models/contact';
import { connectToDatabase } from '../../lib/mongoose';

const Details = ({ contact }) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Mobile Number: {contact.mobileNumber}</p>
      <p>Company Number: {contact.companyNumber}</p>
      <p>Email: {contact.email}</p>
      <p>Company Logo: {contact.companyLogo}</p>
      <p>Deck: {contact.deck}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
    const { pid } = params;
  // console.log({pid})
    // Connect to MongoDB
    await connectToDatabase();
  
    // Fetch the contact with the given uuid
    const contact = await Contact.findOne({ uuid: pid }, { _id: 0 }).lean();
  
    // Return the contact as props
    return {
      props: {
        contact,
      },
    };
  }

export default Details;
