import Item from "./Item";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/context/CartContext";
import Link from "next/link";
import axios from "axios";
import { useSession } from "next-auth/react";


export default function CartComp(props) {
    // const { items, totalAmount, totalItems, quantity } = props
    const { cartItems, userProfile, clearCart } = useContext(CartContext);
    const [totalAmount, setTotalAmount] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)
    const { data: session } = useSession()

    const [isAnimate, setIsAnimate] = useState(false);

    const handleClick = () => {
        if (!isAnimate) {
            setIsAnimate(true);
            setTimeout(() => {
                setIsAnimate(false);
            }, 10000);
        }
    };

    useEffect(() => {
        if (cartItems.length > 0) {
            let totalQuantity = 0;
            let totalAmount = 0;
            // Loop over the array and add up the quantity field of each object
            for (var i = 0; i < cartItems.length; i++) {
                totalQuantity += cartItems[i].quantity;
                totalAmount += cartItems[i].amount * cartItems[i].quantity;
            }
            setTotalAmount(totalAmount)
            setTotalQuantity(parseInt(totalQuantity))


        }
    }, [cartItems])


    const saveDataToServer = async (razorData) => {
        // Make API call to save the data to the server
        let postData = {
            cartItems: cartItems,
            puuid: userProfile.puuid,
            razorpay_payment_id: razorData.razorpay_payment_id,
            razorpay_signature: razorData.razorpay_signature,
            razorpay_order_id: razorData.razorpay_order_id,

        }
        const response = await axios.post("/api/savePurchaseOrder", postData);



    };

    const submitFunc = async () => {
        const res = await initializeRazorpay();
        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }
        // Make API call to the serverless API
        const { data } = await axios.post("/api/razorpay", { cartItems: cartItems });
        var options = {
            key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
            name: "Alphamit Labs",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thank you for your test donation",
            handler: function (response) {
                // Validate payment at server - using webhooks is a better idea.
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                // Save the data to the server if payment is successful

                saveDataToServer(response);
                // window.location.href = '/ContactForm';

            },
            prefill: {
                name: session?.user?.name,
                email: session?.email,
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }


    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };
    return (
        <div>
            <div className="cart-body ">
                <header>
                    <Link href={"/dashboard"}>
                        <div className="continue-shopping">
                            <img src="/assets/images/cart-images/arrow.png" className="arrow-icon" alt="arrow" />
                            {/* <Image src="/assets/images/cart-images/arrow.png" alt="arrow" className="arrow-icon" width={50} height={50} /> */}

                            <h3>continue shopping {totalQuantity}</h3>
                        </div>

                        <div className="cart-icon">
                            <img src="./assets/images/cart-images/cart.png" alt="cart" />
                            <p>{totalQuantity}</p>
                        </div>
                    </Link>

                </header>

                <section className="main-cart-section">
                    <h1>shopping Cart</h1>
                    <p className="total-items">
                        you have <span className="total-items-count">{totalQuantity} </span> items
                        in shopping cart
                    </p>

                    <div className="cart-items">

                        {/* <div className="cart-items-container">
                            {!cartItems?.length ? <>
                                Loading...
                            </> : <>
                                {totalQuantity > 0 ? <Scrollbars className="cart-items-container">
                                    {cartItems.map((item) => {
                                        if (item.quantity > 0) {
                                            return <div key={item._id}><Item data={item} /></div>;

                                        }
                                        return

                                    })}
                                </Scrollbars> : <div className="h-full w-full flex justify-center items-center">
                                    <p className="text-xl"> Cart is Empty</p>
                                </div>}
                            </>}

                        </div> */}
                        <div className="cart-items-container">
                            {!cartItems?.length ? <>
                                Loading...
                            </> : <>
                                <Scrollbars className="cart-items-container">
                                    {cartItems.map((item) => {

                                        return <div key={item._id}><Item data={item} /></div>;



                                    })}
                                </Scrollbars>
                            </>}

                        </div>
                    </div>

                    <div className="card-total">
                        <h3>
                            Cart Total : <span>₹{totalAmount}</span>
                        </h3>
                        <button onClick={() => submitFunc()}>checkout</button>
                        <button className={`order ${isAnimate ? 'animate' : ''}`} onClick={handleClick}>
                            <span className="default">Complete Order</span>
                            <span className="success">
                                Order Placed
                                <svg viewBox="0 0 12 10">
                                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                                </svg>
                            </span>
                            <div className="box"></div>
                            <div className="truck">
                                <div className="back"></div>
                                <div className="front">
                                    <div className="window"></div>
                                </div>
                                <div className="light top"></div>
                                <div className="light bottom"></div>
                            </div>
                            <div className="lines"></div>
                        </button>
                        <button className="clear-cart" onClick={() => clearCart()} >
                            Clear Cart
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}