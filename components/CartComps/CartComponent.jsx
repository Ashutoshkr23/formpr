import React, { useContext, useEffect, useState } from "react";
import DesignComp from "./DesignComp";
import DetailsComp from "./DetailsComp";
import CheckoutComp from "./CheckoutComp";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartComponent = () => {

  const { userProfile, cartItems, setFinalDataFunc, cardsArray, stepState, setStepState } = useContext(CartContext);
  const [cardTypeSelected, setCardTypeSelected] = useState(cartItems[0]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  // when step2 next button is clicked we will check form is filled properly or not
  const [checkFormValid, setFormValid] = useState(false);


  // console.log(cartItems, "cart")
  // type 0 :Lite ,1 :Elevate ,2:Supreme ,3 :black
  const handleCardSelection = (type) => {
    setCardTypeSelected(cartItems[type]);
    setSelectedTypeIndex(type);
  };

  useEffect(() => {
    if (!cardsArray.length) {
      setStepState(1)
    }
  }, [cardsArray, stepState])


  useEffect(() => {
    if (cartItems.length > 0) {
      cartItems.map((item, index) => {
        if (item.quantity == 1) {
          setCardTypeSelected(cartItems[index]);

          setSelectedTypeIndex(index);
          return
        }
      })
    }
  }, []);

  // console.log(cardTypeSelected, "Card type selected")

  useEffect(() => {
    if (cartItems.length > 0) {
      // if (!cardTypeSelected) {
      //   console.log("runned 2")
      //   setCardTypeSelected(cartItems[0]);
      // }

      let totalQuantity = 0;
      let totalAmount = 0;
      // Loop over the array and add up the quantity field of each object
      for (var i = 0; i < cartItems.length; i++) {
        totalQuantity += cartItems[i].quantity;
        totalAmount += cartItems[i].amount * cartItems[i].quantity;
      }
      setTotalAmount(totalAmount);
      setTotalQuantity(parseInt(totalQuantity));
      // setCardTypeSelected(cartItems[selectedTypeIndex]);

    }
  }, [cartItems]);

  const checkValidation = () => {
    let error = false
    cardsArray.map(card => {
      if (!card.fullName.length) {
        error = true;

      }
      if (!card.fileName) {
        error = true
      }
      if (!card.companyName) {
        error = true
      }
    })
    return error
  }

  const handleNext = async () => {
    const isError = await checkValidation()
    console.log(isError, "isError")
    if (stepState == 2) {
      setFormValid(true)
      setFinalDataFunc(cardsArray)
    }

    if (stepState == 2 && isError) {

      toast.error("Please fill details properly !")
    } else {
      setStepState(stepState + 1)

    }
  }


  const stepThreeOnclick = async () => {
    const isError = await checkValidation()
    if (stepState == 1 && isError) {
      toast.error("Please Complete Step 2  !")
    } else {
      setStepState(3)
    }
  }

  const saveDataToServer = async (razorData) => {
    // Make API call to save the data to the server
    let postData = {
      cardsArray: cardsArray,
      cartItems: cartItems,
      puuid: userProfile.puuid,
      razorpay_payment_id: razorData.razorpay_payment_id,
      razorpay_signature: razorData.razorpay_signature,
      razorpay_order_id: razorData.razorpay_order_id,

    }
    console.log(postData, "postData");
    const response = await axios.post("/api/savePurchaseOrder", postData);
    console.log(response, "response")


  };

  // main submit function
  const handleSubmitFunction = async () => {
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
        name: userProfile?.name,
        email: userProfile?.email,
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  // this function is to initialize razorpay
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

  if (!cartItems.length > 0) {
    return <>Loading...</>;
  }

  // console.log(cardsArray, "cardsArray")
  return (
    <div className=" ">
      {/* <h3 className='text-5xl font-bold leading-10 text-[#000]'>Customise</h3> */}
      <div className="mt-10">
        <div className="max-w-[1208px] mx-auto flex lg:justify-between justify-center items-center px-4 xl:px-0">
          <div className="bg-white rounded-xl w-full h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
            <div
              className={`rounded-lg text-[#686A6C] font-bold w-1/3 ${stepState == 1 && "border-2 border-slate-700 text-black"
                } flex justify-center items-center `}
              onClick={() => setStepState(1)}
            >
              <p className="text-center text-[12px] md:text-sm">
                STEP 1 : CARD TYPE & QTY.
              </p>
            </div>
            <div
              className={`rounded-lg text-[#686A6C] font-bold  w-1/3 ${stepState == 2 && "border-2 border-slate-700 text-black"
                } flex justify-center items-center `}
              onClick={() => setStepState(2)}
            >
              <p className="text-center text-[12px] md:text-sm">
                STEP 2 : DETAILS
              </p>
            </div>
            <div
              className={` rounded-lg text-[#686A6C] font-bold w-1/3 ${stepState == 3 && "border-2 border-slate-700 text-black"
                } flex justify-center items-center `}
              onClick={() => stepThreeOnclick()}
            >
              <p className="text-center text-[12px] md:text-sm">
                STEP 3: CHECKOUT
              </p>
            </div>
          </div>
          <div className="hidden lg:block pl-5">
            <button disabled={totalQuantity == 0 ? true : false} className="lg:w-[350px] xl:w-[390px] shadow-xl h-[40px] bg-black text-white rounded-[10px] disabled:cursor-not-allowed " onClick={() => handleNext()} >
              NEXT
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-10">
        {/* step 1 */}
        {stepState == 1 ? (
          <DesignComp
            cardTypeSelected={cardTypeSelected}
            handleCardSelection={handleCardSelection}
            totalAmount={totalAmount}
            totalQuantity={totalQuantity}
            selectedTypeIndex={selectedTypeIndex}
          />
        ) : stepState == 2 ? (
          <DetailsComp
            cardsArray={cardsArray}
            checkFormValid={checkFormValid}
          />
        ) : (
          <CheckoutComp cardsArray={cardsArray} handleSubmitFunction={handleSubmitFunction} />
        )}
      </div>
      <div className="flex justify-center pt-10 lg:hidden pl-2">
        <button className="w-[350px] shadow-xl h-[55px] bg-black text-white rounded-[10px]">
          NEXT
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartComponent;
