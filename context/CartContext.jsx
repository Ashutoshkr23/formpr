import React, { createContext, useEffect, useState } from 'react';
import { useSession } from "next-auth/react"
import axios from 'axios';


// Create the cart context
export const CartContext = createContext();

// Create a CartProvider component
export const CartProvider = ({ children }) => {
    const { data: session } = useSession()

    // Define the state for the cart items
    const [cartItems, setCartItems] = useState([]);
    const [userProfile, setUserProfile] = useState([])
    const [allCards, setAllCards] = useState([])
    const [defaultCart, setDefaultCart] = useState([])

    const [finalData, setFinalData] = useState({})
    const [cardsArray, setCardsArray] = useState([])
    const [stepState, setStepState] = useState(1);

    useEffect(() => {

        const fetchUserCards = async (puuid) => {
            const response = await axios.post(`/api/manageCards`, {
                puuid: puuid
            })
            if (response.data) {
                if (!response.data.error) {
                    setAllCards(response.data.result)
                }
            }
        }

        const fetchUserProfile = async () => {
            const response = await axios.post(`/api/auth/isSignedUp`, {
                email: session.user.email,
                name: session.user.name,
                avatar: session.user.image
            })
            if (response.data) {
                if (!response.data.error) {
                    setUserProfile(response.data.result)
                    if (response.data.result?.totalCards > 0) {
                        fetchUserCards(response.data?.result?.puuid)

                    }
                }
            }
        }
        const fetchCartType = async () => {
            const requestData = await fetch(`/api/cardType`)
            const data = await requestData.json()
            const cardType = !data.error ? data.result : []

            const newArray = cardType.map((obj) => {
                let newObj = { ...obj, quantity: 0 }
                newObj.totalAmount = newObj.amount * newObj.quantity
                return newObj
            });
            setCartItems(newArray)
            setDefaultCart(newArray)
            localStorage.setItem('cartData', JSON.stringify(newArray));
        }

        const storedData = localStorage.getItem('cartData');
        if (storedData) {
            setCartItems(JSON.parse(storedData))
        }
        if (!cartItems.length && !storedData) {
            fetchCartType()
        }


        if (!userProfile.length && session?.user != null) {
            fetchUserProfile()
        }


    }, [session])


    useEffect(() => {

        // const localCardData = localStorage.getItem('cardsArray');
        // console.log(localCardData, "local", JSON.parse(localCardData))
        // if (localCardData && localCardData?.length && !cardsArray.length) {
        //     console.log("runned 1")
        //     setCardsArray(JSON.parse(localCardData))
        // }

        if (cartItems.length > 0 && stepState == 1) {
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
                        console.log(temp, "temp")
                        cards.push(temp)

                    }
                }
            })
            console.log("runned 2", cards)
            setCardsArray(cards)
            // localStorage.setItem('cardsArray', JSON.stringify(cards));



        }
    }, [cartItems])


    // console.log(cardsArray, "Cards Array", cartItems)


    // Function to add an item to the cart

    const setFinalDataFunc = (data) => {
        setFinalData({
            ...finalData,
            cardDataArr: data
        })
    }

    const plusCartFunc = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id) {
                let newItem = { ...item, quantity: parseInt(item.quantity) + 1 }
                newItem.totalAmount = parseInt(newItem.quantity) * parseInt(newItem.amount)
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)
        localStorage.setItem('cartData', JSON.stringify(newCartItems));

    }
    const minusCartFunc = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id && item.quantity > 0) {
                let newItem = { ...item, quantity: parseInt(item.quantity) - 1 }
                newItem.totalAmount = parseInt(newItem.quantity) * parseInt(newItem.amount)
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)
        localStorage.setItem('cartData', JSON.stringify(newCartItems));


    }
    const handleItemCount = (id, count) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id && count >= 0) {
                let newItem = { ...item, quantity: parseInt(count) }
                newItem.totalAmount = parseInt(newItem.quantity) * parseInt(newItem.amount)
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)
        localStorage.setItem('cartData', JSON.stringify(newCartItems));


    }

    // for clearing single type of card 
    const handleClearCard = (id) => {
        const newCartItems = cartItems.map((item) => {
            if (item._id == id) {
                let newItem = { ...item, quantity: 0, totalAmount: 0 }
                return newItem
            }
            return item
        })
        setCartItems(newCartItems)
        localStorage.setItem('cartData', JSON.stringify(newCartItems));

    }


    // Function to remove an item from the cart
    // const removeItemFromCart = (itemId) => {
    //     setCartItems(cartItems.filter((item) => item.id !== itemId));
    // };

    // Function to clear the cart
    const clearCart = () => {
        setCartItems(defaultCart)
        localStorage.setItem('cartData', JSON.stringify(defaultCart));

    };

    // new
    // type 0 : company name and type 1 : company logo
    const handleApplyToAll = (type, value) => {
        if (type == 0) {
            let tempArr = []
            for (let i = 0; i < cardsArray.length; i++) {
                let temp = {
                    ...cardsArray[i],
                    companyName: value
                }
                tempArr.push(temp)
            }
            setCardsArray(tempArr)
            // localStorage.setItem('cardsArray', JSON.stringify(tempArr));
        } else {
            let tempArr = []
            for (let i = 0; i < cardsArray.length; i++) {
                let temp = {
                    ...cardsArray[i],
                    companyLogo: value
                }
                tempArr.push(temp)
            }
            setCardsArray(tempArr)
            // localStorage.setItem('cardsArray', JSON.stringify(tempArr));
        }
    }

    // type 0 : companyName,1:full name 
    const handleName = (name, key, value) => {
        console.log(name, key, value, "type, key, value")

        const newCardArr = cardsArray.map((item) => {
            if (item.key == key) {
                let newItem = { ...item }
                newItem[name] = value

                return newItem
            }
            return item
        })
        setCardsArray(newCardArr)
        // localStorage.setItem('cardsArray', JSON.stringify(newCardArr));


    }
    const handleRemoveCardArr = (key) => {
        let array = [...cardsArray]
        let ctuuid = ""
        for (let i = 0; i < array.length; i++) {
            if (array[i].key == key) {
                ctuuid = array[i].cardTypeUuid
                array.splice(i, 1); // Remove the object at index i
                break; // Exit the loop since the object has been removed
            }
        }
        let cartType = cartItems.filter(item => item.cardTypeUuid == ctuuid)

        minusCartFunc(cartType[0]._id)
        setCardsArray(array)
        // localStorage.setItem('cardsArray', JSON.stringify(array));

    }

    // Create the cart context value
    const cartContextValue = {
        cartItems,
        userProfile,
        allCards,
        finalData,
        cardsArray,
        stepState,
        clearCart,
        plusCartFunc,
        minusCartFunc,
        handleItemCount,
        handleClearCard,
        setFinalDataFunc,
        handleApplyToAll,
        handleName,
        handleRemoveCardArr,
        setStepState
    };

    // Provide the cart context to its children components
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};
