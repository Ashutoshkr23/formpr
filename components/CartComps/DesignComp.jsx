import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";

const DesignComp = ({
  cardTypeSelected,
  handleCardSelection,
  totalAmount,
  totalQuantity,
  selectedTypeIndex,
}) => {
  const { cartItems, minusCartFunc, plusCartFunc } = useContext(CartContext);
  const [State, setState] = useState(1);

  return (
    <div className="lg:mx-4 max-w-[1208px] xl:mx-auto mt-10">
      <div className="flex justify-between ">
        <div className="flex gap-10  xl:gap-20 justify-between ">
          <div className="">
            <div className="flex flex-col space-y-4">
              <div className=" pr-1">
                <div className={`flex items-center justify-between  cursor-pointer  h-full  ${selectedTypeIndex == 0 ? " " : ""} `}
                  onClick={() => {
                    handleCardSelection(0);
                  }}>
                  <p
                    className={`text-base font-bold leading-7 text-center ${selectedTypeIndex == 0 ? "" : ""
                      }`}
                  >
                    Loop Lite
                  </p>

                  {cartItems[0].quantity > 0 && (
                    <span className="text-md font-semibold h-8 w-8 text-center pt-1 z-50  bg-[#F6F6F6] rounded-full ">
                      {cartItems[0].quantity}
                    </span>
                  )}
                </div>
                <hr className="w-[156px]" />
              </div>

              <div className="pr-1">
                <div
                  className={`flex items-center justify-between space-x-4  cursor-pointer  h-full ${selectedTypeIndex == 1 ? "  " : ""
                    } `}
                  onClick={() => {
                    handleCardSelection(1);
                  }}
                >
                  <p
                    className={`text-base leading-7 text-center ${selectedTypeIndex == 1 ? "" : ""
                      }`}
                  >
                    Loop Elevate
                  </p>
                  {cartItems[1].quantity > 0 && (
                    <span className="text-md font-semibold h-8 w-8  text-center pt-1 z-50  bg-[#F6F6F6] drop-shadow-2xl  rounded-full ">
                      {cartItems[1].quantity}
                    </span>
                  )}
                </div>
                <hr className="w-[156px]" />
              </div>
              <div className="pr-1">
                <div
                  className={`flex cursor-pointer justify-between  h-full ${selectedTypeIndex == 2 ? "  " : ""
                    } `}
                  onClick={() => {
                    handleCardSelection(2);
                  }}
                >
                  <p
                    className={`text-base  leading-7 text-center ${selectedTypeIndex == 2 ? "" : ""
                      }`}
                  >
                    Loop Supreme
                  </p>
                  {cartItems[2].quantity > 0 && (
                    <span className="text-md font-semibold h-8 w-8 top-[-10px] right-[-10px] text-center pt-1 z-50  bg-slate-100 drop-shadow-2xl shadow-2xl rounded-full ">
                      {cartItems[2].quantity}
                    </span>
                  )}
                </div>
                <hr className="w-[156px]" />
              </div>

              <div className="">
                <div className="flex cursor-pointer justify-between pb-4 pr-4 ">
                  <p className="text-sm  font-bold ">
                    Total Quantity :</p>
                  <span className="text-sm font-bold ">
                      {totalQuantity}
                  </span>
                  
                </div>
                <hr className="w-[156px]" />
              </div>
              <div className="pt-[14px]">
                <p className="text-sm  font-semibold text-[#F66F6F] ">
                  *Maximum 10
                </p>
              </div>
              <div className="pt-4 text-center">
                <button className="h-[41px] w-[164px] px-4 rounded-[10px]  bg-black text-white text-xs font-bold">
                  FOR BULK ORDERS CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <div style={{ width: 400, height: 250 }}>
              <div
                className="bg-[#66D3E1] rounded-2xl relative w-full"
                style={{ width: 400, height: 250 }}
              >
                <Image
                  src={"/assets/images/nfcIcon.png"}
                  className="absolute top-2 right-3"
                  alt="nfc"
                  height={25}
                  width={25}
                />

                <Image
                  src={"/assets/images/loopIcon.svg"}
                  className="absolute top-12 left-14"
                  alt="loop"
                  height={300}
                  width={370}
                />
              </div>
            </div>
            <div className="">
              <Image
                src={"/assets/images/cart-images/flipImage.png"}
                className=""
                alt="flip"
                height={36}
                width={36}
              />
            </div>
          </div>
        </div>
        {/* pricing section */}
        <div className="lg:max-w-[300px] xl:max-w-[380px] flex pt-7 lg:pl-3 xl:pl-7 bg-white h-[680px] drop-shadow-white rounded-[10px]">
          <div className=" ">
            <div>
              <h4 className="text-3xl font-bold leading-[186%]">Loop Lite</h4>
            </div>
            <div className="pt-3">
              <p className="text-xl text-[#F66F6F]">₹ 899</p>
            </div>
            <div className="pt-3 text-sm leading-[186%]">
              <p>
                Sleek and vibrant, our Loop Lite cards offer a range of solid
                colour options with contrasting Loop logo that adds a bold touch
                of distinction.
              </p>
            </div>
            <div className="pt-10">
              <div className="flex items-center space-x-5">
                <div>
                  <p className="text-xs leading-[186%]">Available in </p>
                </div>
                <div>
                  <div className="flex space-x-2 justify-center items-center ">
                    <div className="w-4 h-4 bg-yellow-200 shadow-inner  rounded-full cursor-pointer" />
                    <div className="w-4 h-4 bg-green-200 shadow-inner  rounded-full cursor-pointer" />
                    <div className="w-4 h-4 bg-blue-300 shadow-inner  rounded-full cursor-pointer" />
                    <div className="w-4 h-4 bg-red-400 shadow-inner border border-spacing-4 rounded-full cursor-pointer" />
                    <div className="w-4 h-4 bg-gray-200 shadow-inner  rounded-full cursor-pointer" />
                    <div className="w-4 h-4 bg-slate-300 shadow-inner  rounded-full cursor-pointer" />
                    <div className="w-4 h-4 bg-black shadow-inner  rounded-full border-gray-500 cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="flex pt-8 space-x-10">
                <div>
                  <p className="text-xs leading-[186%] ">Quantity </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <div className="w-[5.5rem] h-6 bg-white rounded-xl flex justify-between">
                      <span
                        className="bg-[#cfcfcf] rounded-full h-6 w-6 text-center cursor-pointer"
                        onClick={() => minusCartFunc(cardTypeSelected?._id)}
                      >
                        -
                      </span>
                      <span className="text-md">
                        {cardTypeSelected?.quantity}
                      </span>
                      <span
                        className="bg-[#cfcfcf] rounded-full h-6 w-6 text-center cursor-pointer"
                        onClick={() => plusCartFunc(cardTypeSelected?._id)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex pt-12 space-x-3 ">
              <div
                className={`${State == 1 && "border-b-2 border-black font-bold"
                  } cursor-pointer`}
                onClick={() => setState(1)}
              >
                <p className="text-xs leading-[186%]">SPECIFICATIONS</p>
              </div>
              <div
                className={`${State == 2 && "border-b-2 border-black font-bold"
                  } cursor-pointer`}
                onClick={() => setState(2)}
              >
                <p className="text-xs leading-[186%]">Compatibility</p>
              </div>
            </div>
            {State == 1 && (
              <div className="pt-5">
                <div>
                  <p className="text-xs leading-[186%]">1. Hard PVC Cards</p>
                </div>
                <div>
                  <p className="text-xs leading-[186%]">2. NFC Enabled</p>
                </div>
                <div>
                  <p className="text-xs leading-[186%]">
                    3. Standard Debit / Credit Card Size
                  </p>
                </div>
                <div>
                  <p className="text-xs leading-[186%]">
                    4. Sleek and Modern Design
                  </p>
                </div>
                <div>
                  <p className="text-xs leading-[186%]">
                    5. Fully customizable{" "}
                  </p>
                </div>
                <div className="max-w-[295px]">
                  <p className="text-xs leading-[186%]">
                    6. Tap to share social handles, work portfolio, and contact
                    details on any device
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignComp;
