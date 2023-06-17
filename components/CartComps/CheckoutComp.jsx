import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import ShippingComp from "./ShippingComp";
import { toast } from "react-toastify";

const CheckoutComp = ({ cardsArray, handleSubmitFunction, color }) => {
  const {
    handleRemoveCardArr,
    totalQuantity,
    totalAmount,
    address,
    setAddress,
  } = useContext(CartContext);

  const [shippingState, setShippingState] = useState(false);
  const [submitPressed, setSubmitPressed] = useState(false);
  // const [address, setAddress] = useState({
  //   email: "",
  //   phoneNumber: "",
  //   firstName: "",
  //   lastName: "",
  //   address: "",
  //   pinCode: "",
  //   city: "",
  //   state: ""
  // })

  const checkShippingValidation = () => {
    let error = false;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!address.email.length || !emailRegex.test(address.email)) {
      toast.error("Please enter a valid email address");
      error = true;
    }
    if (
      !address.phoneNumber.length ||
      !address.firstName.length ||
      !address.lastName.length ||
      !address.address.length ||
      address.pinCode.length !== 6 ||
      !address.city.length ||
      !address.state.length
    ) {
      error = true;
      toast.error("Please fill shipping details properly !");
    }
    return error;
  };

  const handleClick = async () => {
    if (shippingState) {
      setSubmitPressed(true);
      const error = await checkShippingValidation();
      if (!error) {
        handleSubmitFunction();
      }
    } else {
      setShippingState(true);
    }
  };

  // console.log(cardsArray);
  return (
    <div className="max-w-[1208px] mx-auto flex lg:justify-between justify-center px-4 xl:px-0">
      {!shippingState ? (
        <div className=" lg:w-8/12  flex  flex-wrap space-x-2  lg:justify-between   ">
          <div className="container mx-auto mb-5  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cardsArray.length &&
                cardsArray.map((data) => {
                  return (
                    <div
                      key={data.key}
                      className="relative grid grid-cols-2 gap-5 bg-white rounded-xl cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926] p-4 h-[250px]"
                    >
                      <div>
                        <Image
                          src={`/assets/images/cards/Front/${color}.png`}
                          height={250}
                          width={300}
                          alt="demo"
                          quality={100}
                        />
                      </div>
                      <div className="absolute top-[-12px] right-0 rounded-md flex  items-center justify-end w-[100px] px-1 pt-0.5 bg-black">
                        <p
                          className="text-xs font-bold leading-tight text-center text-white cursor-pointer"
                          onClick={() => handleRemoveCardArr(data.key)}
                        >
                          REMOVE
                        </p>
                        <p className="text-base font-medium leading-7 text-center text-white pl-2">
                          X
                        </p>
                      </div>
                      <div className="px-1 py-2">
                        <p className="text-sm font-bold leading-7">
                          {data.cardTypeName}
                        </p>
                        <p className="text-sm font-bold leading-7 text-red-400 mt-1">
                          ₹ 899
                        </p>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs font-medium leading-snug">
                            Color :{" "}
                            <span className="w-4 h-4 bg-green-300 shadow-inner rounded-full px-2 ml-1"></span>
                          </span>
                          <span className="text-xs font-medium leading-snug">
                            Qty : 1{" "}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div>
                          <Image
                            src={`/assets/images/cards/Back/${color}.png`}
                            height={250}
                            width={300}
                            alt="demo"
                            quality={100}
                          />
                        </div>
                      </div>
                      <div className="flex ">
                        <div>
                          <p className="text-xs mb-3 font-medium">
                            Full Name <br />
                            <span className="font-semibold text-sm">
                              {data.fullName}
                            </span>
                          </p>
                          <p className="text-xs font-medium">
                            Company Name <br />
                            <span className="font-semibold text-sm">
                              {data.companyName}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <>
          <ShippingComp
            address={address}
            setAddress={setAddress}
            submitPressed={submitPressed}
          />
        </>
      )}
      <div className="hidden lg:block  pl-2">
        <div className="w-full   xl:w-[385px] shadow-xl min-h-[510px] bg-white rounded-xl py-8">
          <p className="text-2xl font-bold text-center">Order Summary</p>
          <div className="px-10 mt-16 space-y-2">
            <div className="flex justify-between items-center">
              <span className=" text-sm font-bold">Total Items</span>
              <span className=" text-sm font-bold text-right">
                {totalQuantity}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <p className=" text-sm font-bold">Subtotal </p>

              <p className=" text-sm font-bold leading-10 text-right">
                ₹ {totalAmount}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm font-bold leading-relaxed">Shipping</p>
              <p className="text-sm font-bold leading-relaxed text-right">
                Free
              </p>
            </div>
          </div>
          <div className="mx-5 mt-16">
            <div className="flex items-center justify-between w-full h-10 px-5 border rounded-lg border-black">
              <p className="text-base font-bold text-center">Total</p>
              <p className="w-40 text-base font-bold leading-10 text-right">
                ₹ {totalAmount}
              </p>
            </div>
          </div>
          <div className="mx-5 my-6">
            <button
              className="w-full h-10 px-5 bg-black border rounded-lg border-black cursor-pointer text-base font-bold text-center text-white "
              onClick={handleClick}
            >
              {shippingState ? "CHECKOUT" : "GO TO SHIPPING"}
            </button>
          </div>
          <p className="mx-5 text-sm font-medium text-red-400">
            *You can edit your contact details after checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComp;
