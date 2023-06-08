import React, { useContext, useEffect, useState } from 'react'
import DetailsInput from './DetailsInput'
import { CartContext } from '@/context/CartContext'

const DetailsComp = () => {
    const { cartItems } = useContext(CartContext)
    console.log(cartItems, "Ca")

    const [allCompanyName, seAllCompanyName] = useState(null)
    const [allCompLogo, setAllCompLogo] = useState(null)
    const [cardsArray, setCardsArray] = useState(null)

    useEffect(() => {
        if (cartItems.length > 0) {
            let totalQuantity = 0;
            let cards = []
            // Loop over the array and add up the quantity field of each object
            for (var i = 0; i < cartItems.length; i++) {
                totalQuantity += cartItems[i].quantity;
            }

            cartItems.map((item, index) => {
                if (item.quantity > 0) {
                    for (var j = 0; j < item.quantity; j++) {
                        const min = 100000; // Minimum value (inclusive)
                        const max = 999999; // Maximum value (inclusive)

                        let temp = {
                            amount: item.amount,
                            cardTypeName: item.cardName,
                            cardTypeUuid: item.cardTypeUuid,
                            key: Math.floor(Math.random() * (max - min + 1)) + min,
                            fullName: "",
                            companyName: "",
                            companyLogo: "",

                        }
                        cards.push(temp)

                    }
                }
            })
            console.log(cards, "Cards")
            setCardsArray(cards)



        }
    }, [cartItems])
    console.log(cardsArray, "array")

    return (
        <div>
            {cardsArray && cardsArray.length > 0 && <>
                {cardsArray.map((card) => {
                    return (
                        <div key={card.key}>
                            <DetailsInput {...card} />

                        </div>
                    )

                })}
            </>}
        </div>
    )
}

export default DetailsComp