import { connectToDatabase } from "../../lib/mongoose";
import Contact from "../../models/contact";

export default function ContactDetails({ contact }) {
  return (
    <div>
      <h1>first Name : {contact.firstName} </h1>
      <h1>last Name : {contact.lastName}</h1>
      <p>Mobile Number: {contact.mobileNumber}</p>
      <p>Company Number: {contact.companyNumber}</p>
      <p>Email: {contact.email}</p>
      <p>Company Logo: {contact.companyLogo}</p>
      <p>Deck: {contact.deck}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
    await connectToDatabase();
  
    const contact = await Contact.findOne({ uuid: params.slug }).lean();
    
    if (!contact) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        contact: {
          ...contact,
          _id: contact._id.toString(), // convert ObjectId to string
        },
      },
    };
  }