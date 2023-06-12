import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";

const CardDescription = ({
  cardTypeSelected,
  heading,
  price,
  desc,
  color,
  setColor,
  index,
  quantity,
}) => {
  const { cartItems, minusCartFunc, plusCartFunc } = useContext(CartContext);
  const [State, setState] = useState(1);
  return (
    <div>
      <div className="flex justify-center lg:px-0 lg:py-0 pt-5 lg:pt-0 ">
        <div className="max-w-[353px] lg:max-w-[300px] xl:max-w-[380px] flex px-4 pb-4 lg:pb-0  pt-7 lg:pl-3 xl:pl-7 bg-white h-full  lg:h-[556px] drop-shadow-white rounded-[10px]">
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
            <div className="pt-6">
              <div className="flex items-center  space-x-5">
                {(index === 0 || index === 1) && (
                  <div>
                    <p className="text-xs leading-[186%]">Available in </p>
                  </div>
                )}
                {index == 2 && (
                  <div>
                    <p className="text-xs leading-[186%]">
                      Available in all colours
                    </p>
                  </div>
                )}
                <div>
                  <div>
                    {index == 0 && (
                      <div className="flex space-x-2 justify-center items-center ">
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full cursor-pointer ${color === 'Yellow' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Yellow")}
                        ><div className="w-full h-full rounded-full bg-[#FFF490]"></div></div>
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full cursor-pointer ${color === 'Green' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Green")}
                        ><div className="w-full h-full rounded-full bg-[#96FFAD]"></div></div>
                        <div
                          className={`w-4 h-4  shadow-inner  rounded-full cursor-pointer ${color === 'Blue' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Blue")}
                        ><div className="w-full h-full rounded-full bg-blue-300"></div></div>
                        <div
                          className={`w-4 h-4  shadow-inner rounded-full cursor-pointer ${color === 'Red' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Red")}
                        ><div className="w-full h-full rounded-full bg-red-400"></div></div>
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full cursor-pointer ${color === 'Grey' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Grey")}
                        ><div className="w-full h-full rounded-full bg-[#ECECEC]"></div></div>
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full border-gray-500 cursor-pointer ${color === 'Black' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Black")}
                        ><div className="w-full h-full rounded-full bg-black"></div>
                        </div>
                      </div>
                    )}
                    {index == 1 && (
                      <div className="flex space-x-2 justify-center items-center">
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full cursor-pointer ${color === 'Yellow' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Yellow")}
                        ><div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFEC43] via-[#F66F6F] to-[#66D3E1]"></div></div>
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full cursor-pointer ${color === 'Green' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Green")}
                        ><div className="w-full h-full rounded-full  bg-gradient-radial from-[#91CA6B] to-[#ECECEC]"></div></div>
                        <div
                          className={`w-4 h-4  shadow-inner  rounded-full cursor-pointer ${color === 'Blue' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Blue")}
                        ><div className="w-full h-full rounded-full bg-gradient-radial from-[#66D3E1]  to-[#ECECEC]"></div></div>
                        <div
                          className={`w-4 h-4  shadow-inner rounded-full cursor-pointer ${color === 'Red' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Red")}
                        ><div className="w-full h-full rounded-full bg-gradient-radial from-[#F66F6F]  to-[#ECECEC]"></div></div>
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full cursor-pointer ${color === 'Grey' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Grey")}
                        ><div className="w-full h-full rounded-full bg-gradient-to-br from-[#ECECEC] via-[#ECECEC]"></div></div>
                        <div
                          className={`w-4 h-4 shadow-inner  rounded-full border-gray-500 cursor-pointer ${color === 'Black' ? 'scale-125 border border-black p-px' : ''
                            } `}
                          onClick={() => setColor("Black")}
                        ><div className="w-full h-full rounded-full bg-gradient-to-br from-[#000000] via-[#F37232]"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex pt-5 space-x-10">
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
                      <span className="text-md">{quantity}</span>
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
              <div className="flex pt-8 space-x-3 ">
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
                  <p className="text-xs leading-[186%]">COMPATIBILITY</p>
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
              {State == 2 && (
                <div className="max-w-[330px]">
                  <div className="pt-2">
                    <p className="text-xs leading-[150%]">
                      With Loop Cards, you can easily tap and connect with all
                      iPhones and most Android devices. For Android receivers,
                      simply ensure that NFC is enabled in their device
                      settings.
                    </p>
                  </div>
                  <div className="pt-4">
                    <p className="text-xs leading-[150%]">
                      The best part is, you can effortlessly share your profile
                      with others without the need for them to have a specific
                      app. Sharing your information has never been simpler.
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
