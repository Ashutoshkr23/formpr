import React, { useContext, useEffect, useState } from "react";
import DesignComp from "./DesignComp";
import DetailsComp from "./DetailsComp";
import CheckoutComp from "./CheckoutComp";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { useRouter } from "next/router";

const CartComponent = () => {
  const {
    userProfile,
    cartItems,
    setFinalDataFunc,
    cardsArray,
    stepState,
    setStepState,
    totalQuantity,
    totalAmount,
    address,
    defaultCart,
    setCartItems,
  } = useContext(CartContext);
  const [cardTypeSelected, setCardTypeSelected] = useState(cartItems[0]);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);
  // when step2 next button is clicked we will check form is filled properly or not
  const [checkFormValid, setFormValid] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [color, setColor] = useState("7dae8f7f-bcc9-4ef9-bc1e-a2196a9c628a");

  const router = useRouter();
  // console.log(cartItems, "cart")
  // type 0 :Lite ,1 :Elevate ,2:Supreme ,3 :black
  const handleCardSelection = (type) => {
    setCardTypeSelected(cartItems[type]);
    setSelectedTypeIndex(type);
  };

  useEffect(() => {
    if (!cardsArray.length) {
      setStepState(1);
    }
  }, [cardsArray, stepState]);

  useEffect(() => {
    if (cartItems.length > 0) {
      cartItems.map((item, index) => {
        if (item.quantity == 1) {
          setCardTypeSelected(cartItems[index]);

          setSelectedTypeIndex(index);
          return;
        }
      });
    }
  }, []);

  console.log(color);
  const checkValidation = () => {
    let error = false;
    cardsArray.map((card) => {
      if (!card.fullName.length) {
        error = true;
      }
      if (!card.fileName) {
        error = true;
      }
      if (!card.companyName) {
        error = true;
      }
    });
    return error;
  };

  const handleNext = async () => {
    const isError = await checkValidation();
    // console.log(isError, "isError");
    if (stepState == 2) {
      setFormValid(true);
      setFinalDataFunc(cardsArray);
    }

    if (stepState == 2 && isError) {
      toast.error("Please fill details properly !");
    } else {
      setStepState(stepState + 1);
    }
  };

  const stepThreeOnclick = async () => {
    const isError = await checkValidation();
    if (isError) {
      toast.error("Please Complete Step 2  !");
    } else {
      setStepState(3);
    }
  };

  const saveDataToServer = async (razorData) => {
    // Make API call to save the data to the server
    let postData = {
      cardsArray: cardsArray,
      cartItems: cartItems,
      puuid: userProfile.puuid,
      razorpay_payment_id: razorData.razorpay_payment_id,
      razorpay_signature: razorData.razorpay_signature,
      razorpay_order_id: razorData.razorpay_order_id,
      address: address,
    };
    localStorage.setItem("addressData", JSON.stringify(address));
    // console.log(postData, "postData");
    const response = await axios.post("/api/savePurchaseOrder", postData);
    console.log(response, "response");

    if (response.status == 200) {
      setCartItems(defaultCart);
      setIsModalVisible(true);
    }
  };

  // main submit function
  const handleSubmitFunction = async () => {
    const res = await initializeRazorpay();
    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    // Make API call to the serverless API
    const { data } = await axios.post("/api/razorpay", {
      cartItems: cartItems,
    });
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
  };

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

  const closeModal = () => {
    setIsModalVisible(false);
  };

  // console.log(cardsArray, "cardsArray")
  return (
    <div className=" ">
      {/* <h3 className='text-5xl font-bold leading-10 text-[#000]'>Customise</h3> */}
      <div className="mt-10">
        <div className="max-w-[1208px] mx-auto flex lg:justify-between justify-center items-center px-4 xl:px-0">
          <div className="bg-white rounded-xl w-full h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
            <div
              className={`rounded-lg text-[#686A6C] font-bold w-1/3 ${
                stepState == 1 && "border-2 border-slate-700 text-black"
              } flex justify-center items-center `}
              onClick={() => setStepState(1)}
            >
              <p className="text-center text-[12px] md:text-sm">
                STEP 1 : CARD TYPE & QTY.
              </p>
            </div>
            <div
              className={`rounded-lg text-[#686A6C] font-bold  w-1/3 ${
                stepState == 2 && "border-2 border-slate-700 text-black"
              } flex justify-center items-center `}
              onClick={() => setStepState(2)}
            >
              <p className="text-center text-[12px] md:text-sm">
                STEP 2 : DETAILS
              </p>
            </div>
            <div
              className={` rounded-lg text-[#686A6C] font-bold w-1/3 ${
                stepState == 3 && "border-2 border-slate-700 text-black"
              } flex justify-center items-center `}
              onClick={() => stepThreeOnclick()}
            >
              <p className="text-center text-[12px] md:text-sm">
                STEP 3: CHECKOUT
              </p>
            </div>
          </div>
          <div className="hidden lg:block pl-5">
            {stepState == 2 ? (
              <div className="lg:w-[350px] xl:w-[390px] flex space-x-2">
                <button
                  className="cursor-pointer tracking-wide outline-none w-full h-10 text-center  bg-white shadow border rounded-lg border-black font-semibold"
                  onClick={() => setStepState(1)}
                >
                  PREVIOUS
                </button>
                <button
                  className="cursor-pointer tracking-wide outline-none  w-full h-10 bg-black shadow rounded-lg  text-center text-white font-semibold"
                  onClick={() => handleNext()}
                >
                  NEXT (₹ {totalAmount})
                </button>
              </div>
            ) : stepState == 3 ? (
              <button
                disabled={totalQuantity == 0 ? true : false}
                className="lg:w-[350px] xl:w-[390px] shadow-xl h-[40px] bg-white text-black border font-semibold tracking-wide rounded-[10px] disabled:cursor-not-allowed "
                onClick={() => handleNext()}
              >
                PREVIOUS
              </button>
            ) : (
              <button
                disabled={totalQuantity == 0 ? true : false}
                className="lg:w-[350px] xl:w-[390px] tracking-wide shadow-xl h-[40px] bg-black text-white rounded-[10px] disabled:cursor-not-allowed "
                onClick={() => handleNext()}
              >
                NEXT
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full pt-10">
        {/* step 1 */}
        {stepState == 1 ? (
          <DesignComp
            color={color}
            setColor={setColor}
            cardTypeSelected={cardTypeSelected}
            handleCardSelection={handleCardSelection}
            totalAmount={totalAmount}
            totalQuantity={totalQuantity}
            selectedTypeIndex={selectedTypeIndex}
          />
        ) : stepState == 2 ? (
          <DetailsComp
            color={color}
            cardsArray={cardsArray}
            checkFormValid={checkFormValid}
          />
        ) : (
          <CheckoutComp
            cardsArray={cardsArray}
            handleSubmitFunction={handleSubmitFunction}
          />
        )}
      </div>
      {isModalVisible && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen  text-center  sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              // onClick={closeModal}
            >
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div
              className="inline-block min-h-[450px] align-bottom bg-gradient-to-br from-[#67D4E1] to-[#8DF6B8] rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="h-full w-full flex flex-col justify-center items-center">
                <Image
                  src={"/assets/images/rightImage.png"}
                  height={200}
                  width={200}
                  alt="right icon"
                  className=""
                />
                <p className="text-3xl font-bold text-center mt-6">
                  Payment Completed
                </p>
                <p className=" text-sm font-medium text-center text-[#626262] mt-6">
                  Thank you for your purchase!
                </p>
                <button
                  className="text-xs bg-black shadow border rounded-lg border-black text-white font-medium mt-6 px-6 py-2"
                  onClick={() => {
                    closeModal();
                    router.push("/manageCards");
                  }}
                >
                  Go to Manage Cards and create your profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="lg:hidden flex justify-center  ">
        {stepState == 2 ? (
          <div className="w-[350px] flex  space-x-2">
            <button
              className="cursor-pointer tracking-wide outline-none w-full h-10 text-center  bg-white shadow border rounded-lg border-black font-semibold"
              onClick={() => setStepState(1)}
            >
              PREVIOUS
            </button>
            <button
              className="cursor-pointer tracking-wide outline-none  w-full h-10 bg-black shadow rounded-lg  text-center text-white font-semibold"
              onClick={() => handleNext()}
            >
              NEXT (₹ {totalAmount})
            </button>
          </div>
        ) : stepState == 3 ? (
          <button
            disabled={totalQuantity == 0 ? true : false}
            className="w-[350px] justify-center shadow-xl h-[40px] bg-white text-black border font-semibold tracking-wide rounded-[10px] disabled:cursor-not-allowed "
            onClick={() => handleNext()}
          >
            PREVIOUS
          </button>
        ) : (
          <div className="flex justify-center items-center pt-6">
            <button
              disabled={totalQuantity == 0 ? true : false}
              className="w-[353px]    tracking-wide shadow-xl h-[40px] bg-black text-white rounded-[10px] disabled:cursor-not-allowed "
              onClick={() => handleNext()}
            >
              NEXT
            </button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartComponent;
