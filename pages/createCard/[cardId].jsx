import ContactForm from '@/components/ContactForm/ContactForm';
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();
    // Create  a function here to check cuuid is valid or not
    // return <p>Post: {router.query.cardId}</p>;
    return <div>
        {router.query.cardId ?
            <ContactForm cuuid={router.query.cardId} /> : <h5>Something went wrong ! No Card id found</h5>}
    </div>

}