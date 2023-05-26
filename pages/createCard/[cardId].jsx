import ContactForm from '@/components/ContactForm/ContactForm';
import { CartContext } from '@/context/CartContext';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

export default function Page() {
    const router = useRouter();
    const { userProfile } = useContext(CartContext)
    const [cardValid, setCardValid] = useState(true)
    const [loading, setLoading] = useState(true)

    const puuid = userProfile.puuid
    const cuuid = router.query.cardId
    // Create  a function here to check cuuid is valid or not
    // return <p>Post: {router.query.cardId}</p>;
    useEffect(() => {
        const checkCardValid = async () => {
            const check = await axios.get(`/api/manageCards?cuuid=${cuuid}&puuid=${puuid}`)
            // console.log(check, "checkss")
            if (!check.data.error) {
                setLoading(false)
                if (check.data.valid === false) {
                    alert("Invalid card")
                }
                setCardValid(check.data.valid)
            } else {
                setLoading(false)
                alert("Something went wrong")
            }
        }

        if (cuuid && puuid) {
            checkCardValid()
        }
    }, [cuuid, userProfile])
    // console.log(cardValid, "cardValid")
    if (loading) {
        return <h5>Loading...</h5>
    }
    return <div>
        {cuuid && cardValid ?
            <ContactForm cuuid={cuuid} /> : !cardValid ? <h5>Invalid Card</h5> : <h5>Something went wrong ! No Card id found</h5>}
    </div>

}