import React, { createContext, useEffect, useState } from 'react';
import { useSession } from "next-auth/react"
import axios from 'axios';
import { toast } from 'react-toastify';


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
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [address, setAddress] = useState({
        email: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        address: "",
        pinCode: "",
        city: "",
        state: ""
    })

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
        

        const storedData = localStorage.getItem('cartData');
        if (storedData) {
            setCartItems(JSON.parse(storedData))
        }
        const storedAddData = localStorage.getItem('addressData');
        if (storedAddData) {
            setAddress(JSON.parse(storedAddData))
        }

        if (!cartItems.length && !storedData) {
            fetchCartType()
        }


        if (!userProfile.length && session?.user != null) {
            fetchUserProfile()
        }


    }, [session])

    // console.log(cartItems, "Car")
    console.log(cardsArray,"Cards",defaultCart)


    useEffect(() => {

        // const localCardData = localStorage.getItem('cardsArray');
        // console.log(localCardData, "local", JSON.parse(localCardData))
        // if (localCardData && localCardData?.length && !cardsArray.length) {
        //     // console.log("runned 1")
        //     setCardsArray(JSON.parse(localCardData))
        // }

        if (cartItems.length > 0 && stepState == 1) {
            let totalQuantity = 0;
            let totalAmount = 0
            let cards = []
            // Loop over the array and add up the quantity field of each object
            for (var i = 0; i < cartItems.length; i++) {
                totalQuantity += cartItems[i].quantity;
                totalAmount += cartItems[i].amount * cartItems[i].quantity;
            }
            setTotalQuantity(totalQuantity)
            setTotalAmount(totalAmount)

            cartItems.map((item, index) => {
                if (item.quantity > 0) {
                    for (var j = 0; j < item.quantity; j++) {
                        const min = 100000; // Minimum value (inclusive)
                        const max = 999999; // Maximum value (inclusive)
                        let designId = "";
                        let hexCode = "";
                        let fontCode = "";
                        if(item.cardTypeUuid == "3fa766b5-9f66-4a38-8471-23026a59d84d"){
                            // lite card
                            designId = "7dae8f7f-bcc9-4ef9-bc1e-a2196a9c628a"
                        }else if(item.cardTypeUuid == "801baf78-ce33-446f-b132-618f92ccfc5f"){  
                            // elevate card
                            designId = "c591107d-b134-4cbf-9667-2da6fb07b339"

                        }else{
                            // supreme card
                            designId = "9d69ecbc-fd72-4732-b3c0-a344045f402e";
                            fontCode = "#FFFFFF";
                            hexCode = "#000000";
                        }

                        let temp = {
                            amount: item.amount,
                            cardTypeName: item.cardName,
                            cardTypeUuid: item.cardTypeUuid,
                            key: Math.floor(Math.random() * (max - min + 1)) + min,
                            fullName: "",
                            companyName: "",
                            companyLogo: "",
                            fileName: "",
                            designUuid : designId,
                            fontCode:fontCode,
                            hexCode:hexCode,

                        }
                        // console.log(temp, "temp")
                        cards.push(temp)

                    }
                }
            })
            // console.log("runned 2", cards)
            setCardsArray(cards)
            // localStorage.setItem('cardsArray', JSON.stringify(cards));



        }

        if (!cartItems.length) {
            if (defaultCart.length) {
                setCartItems(defaultCart)

            }else{
                fetchCartType()
            }
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
        console.log("runned plus cart")
        if (id) {
            if (totalQuantity < 10) {


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
            } else {
                toast.error("Maximum 10 cards limit reached !")
            }
        }

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
    const handleApplyToAll = (type, value, fileName) => {
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
                    companyLogo: value,
                    fileName: fileName,
                }
                tempArr.push(temp)
            }
            setCardsArray(tempArr)
            // localStorage.setItem('cardsArray', JSON.stringify(tempArr));
        }
    }

    // type 0 : companyName,1:full name 
    const handleName = (name, key, value, fileName) => {
        // console.log(name, key, value, "type, key, value")

        const newCardArr = cardsArray.map((item) => {
            if (item.key == key) {
                let newItem = { ...item }
                newItem[name] = value
                if (name == "companyLogo") {
                    newItem["fileName"] = fileName
                }

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
        toast.success("Successfully removed")
        // localStorage.setItem('cardsArray', JSON.stringify(array));

    }

     const handleDesignUuid = (key,designId)=>{
        if(key && designId){
            const newCardArr = cardsArray.map((item) => {
                if (item.key == key) {
                    let newItem = { ...item }
                    newItem["designUuid"] = designId
                    return newItem
                }
                return item
            })
            setCardsArray(newCardArr)
        }
    }

    const handleColorUuid = (key,colorCode,type)=>{
        // type 1 color code & type 2 font code
        
        if(key && colorCode){
            const newCardArr = cardsArray.map((item) => {
                if (item.key == key) {
                    let newItem = { ...item }
                    if(type==1){
                    newItem["hexCode"] = colorCode

                    }else{
                        newItem["fontCode"] = colorCode
                    }
                    return newItem
                }
                return item
            })
            setCardsArray(newCardArr)
        }
    }

    // Create the cart context value
    const cartContextValue = {
        cartItems,
        userProfile,
        allCards,
        finalData,
        cardsArray,
        stepState,
        totalQuantity,
        totalAmount,
        address,
        clearCart,
        plusCartFunc,
        minusCartFunc,
        handleItemCount,
        handleClearCard,
        setFinalDataFunc,
        handleApplyToAll,
        handleName,
        handleRemoveCardArr,
        setStepState,
        setAddress,
        handleDesignUuid,
        handleColorUuid,
        setAllCards,
    };

    // Provide the cart context to its children components
    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};
