import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";

const CardDescription = ({
  cardTypeSelected,
  handleCardSelection,
  heading,
  price,
  desc,
}) => {
  const { cartItems, minusCartFunc, plusCartFunc } = useContext(CartContext);
  const [State, setState] = useState(1);
  return (
    <div>
      <div className="flex justify-center lg:px-0 lg:py-0 pt-5 lg:pt-0 ">
        <div className="max-w-[353px] lg:max-w-[300px] xl:max-w-[380px] flex pl-4 pb-4 lg:pb-0  pt-7 lg:pl-3 xl:pl-7 bg-white h-full  lg:h-[680px] drop-shadow-white rounded-[10px]">
          <div className=" ">
            <div>
              <h4 className="text-xl md:text-3xl font-bold leading-[186%]">
                {heading}
              </h4>
            </div>
            <div className="pt-3">
              <p className="text-[16px] md:text-xl text-[#F66F6F]">₹ {price}</p>
            </div>
            <div className="pt-3 text-xs md:text-sm leading-[186%]">
              <p>{desc}</p>
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
            <div className="hidden lg:block">
              <div className="flex pt-12 space-x-3 ">
                <div
                  className={`${
                    State == 1 && "border-b-2 border-black font-bold"
                  } cursor-pointer`}
                  onClick={() => setState(1)}
                >
                  <p className="text-xs leading-[186%]">SPECIFICATIONS</p>
                </div>
                <div
                  className={`${
                    State == 2 && "border-b-2 border-black font-bold"
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
                      6. Tap to share social handles, work portfolio, and
                      contact details on any device
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDescription;
