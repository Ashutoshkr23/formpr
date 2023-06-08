import React, { useContext, useEffect, useState } from "react";
import DesignComp from "./DesignComp";
import DetailsComp from "./DetailsComp";
import CheckoutComp from "./CheckoutComp";
import { CartContext } from "@/context/CartContext";

const CartComponent = () => {
  const [stepState, setStepState] = useState(1);
  const { cartItems } = useContext(CartContext);
  const [cardTypeSelected, setCardTypeSelected] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  // type 0 :Lite ,1 :Elevate ,2:Supreme ,3 :black
  const handleCardSelection = (type) => {
    setCardTypeSelected(cartItems[type]);
    setSelectedTypeIndex(type);
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      if (!cardTypeSelected) {
        setCardTypeSelected(cartItems[0]);
      }
      let totalQuantity = 0;
      let totalAmount = 0;
      // Loop over the array and add up the quantity field of each object
      for (var i = 0; i < cartItems.length; i++) {
        totalQuantity += cartItems[i].quantity;
        totalAmount += cartItems[i].amount * cartItems[i].quantity;
      }
      setTotalAmount(totalAmount);
      setTotalQuantity(parseInt(totalQuantity));
      setCardTypeSelected(cartItems[selectedTypeIndex]);
    }
  }, [cartItems]);

  if (!cartItems.length > 0) {
    return <>Loading...</>;
  }
  return (
    <div className=" ">
      {/* <h3 className='text-5xl font-bold leading-10 text-[#000]'>Customise</h3> */}
      <div className="mt-10">
        <div className="max-w-[1208px] mx-auto flex lg:justify-between justify-center items-center px-4 xl:px-0">
          <div className="bg-white rounded-xl lg:w-3/5 h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
            <div
              className={`rounded-lg w-1/3 ${
                stepState == 1 && "border-2 border-slate-700"
              } flex justify-center items-center font-bold`}
              onClick={() => setStepState(1)}
            >
              <p className="text-center text-[12px] md:text-base">
                Step 1 : card type & qty.
              </p>
            </div>
            <div
              className={`rounded-lg w-1/3 ${
                stepState == 2 && "border-2 border-slate-700"
              } flex justify-center items-center font-bold`}
              onClick={() => setStepState(2)}
            >
              <p className="text-center text-[12px] md:text-base">
                Step 2 : details
              </p>
            </div>
            <div
              className={` rounded-lg w-1/3 ${
                stepState == 3 && "border-2 border-slate-700"
              } flex justify-center items-center font-bold`}
              onClick={() => setStepState(3)}
            >
              <p className="text-center text-[12px] md:text-base">
                Step 3 : Checkout
              </p>
            </div>
          </div>
          <div className="hidden lg:block pl-2">
            <button className="lg:w-[300px] xl:w-[385px] shadow-xl h-[40px] bg-black text-white rounded-[10px]">
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
          <DetailsComp />
        ) : (
          <CheckoutComp />
        )}
      </div>
      <div className="flex justify-center pt-10 lg:hidden pl-2">
        <button className="w-[350px] shadow-xl h-[55px] bg-black text-white rounded-[10px]">
          NEXT
        </button>
      </div>
    </div>
  );
};

export default CartComponent;
