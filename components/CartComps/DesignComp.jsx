import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import CardDescription from "./CardDescription";

const DesignComp = ({
  cardTypeSelected,
  handleCardSelection,
  totalAmount,
  totalQuantity,
  selectedTypeIndex,
}) => {
  const { cartItems, minusCartFunc, plusCartFunc } = useContext(CartContext);
  const [State, setState] = useState(1);
  const [value, setValue] = useState("Front");
  const [type, setType] = useState("Lite");
  const [color, setColor] = useState("Blue");

  const handleClick = () => {
    setValue(value === "Front" ? "Back" : "Front");
  };

  return (
    <div className="lg:mx-4 max-w-[1208px] xl:mx-auto ">
      <div className="flex flex-col lg:flex-row lg:justify-between ">
        <div className="flex gap-10  xl:gap-20 lg:justify-between justify-center h-full ">
          <div className="flex items-center gap-10  xl:gap-20 mt-10 flex-col-reverse justify-center lg:flex-row ">
            <div className="">
              <div className="flex flex-row lg:flex-col  justify-between gap-6 ">
                <div>
                  <div className=" pr-2 mb-2 bg-white h-12 w-[190px] pl-7   rounded-[10px] drop-shadow-lg">
                    <div
                      className={`flex items-center justify-between    cursor-pointer  h-full  ${
                        selectedTypeIndex == 0 ? " " : ""
                      } `}
                      onClick={() => {
                        handleCardSelection(0);
                        setType("Lite");
                      }}
                    >
                      <p
                        className={` leading-7 pt-2 text-[#686A6C] text-center ${
                          selectedTypeIndex == 0
                            ? "text-sm font-bold text-black "
                            : "text-sm"
                        }`}
                      >
                        Loop Lite
                      </p>

                      {cartItems[0].quantity > 0 && (
                        <span className="text-md font-semibold h-8 w-8 text-center pt-1    bg-gradient-to-b from-[#f3f4f6] to-[#d1d5db]  rounded-full ">
                          {cartItems[0].quantity}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pr-2 mb-2 bg-white h-12 w-[190px] pl-7  rounded-[10px] drop-shadow-lg">
                    <div
                      className={`flex items-center justify-between space-x-4  cursor-pointer pb-2  h-full ${
                        selectedTypeIndex == 1 ? "  " : ""
                      } `}
                      onClick={() => {
                        handleCardSelection(1);
                        setType("Elevate");
                      }}
                    >
                      <p
                        className={` leading-7 pt-3 text-[#686A6C] text-center ${
                          selectedTypeIndex == 1
                            ? "text-sm font-bold text-black "
                            : "text-sm"
                        }`}
                      >
                        Loop Elevate
                      </p>
                      {cartItems[1].quantity > 0 && (
                        <span className="text-md font-semibold h-8 w-8  text-center pt-1 mt-1 bg-gradient-to-b from-[#f3f4f6] to-[#d1d5db] drop-shadow-2xl  rounded-full ">
                          {cartItems[1].quantity}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="pr-2 bg-white h-12 w-[190px] pl-7  rounded-[10px] drop-shadow-lg">
                    <div
                      className={`flex cursor-pointer justify-between pb-2   h-full ${
                        selectedTypeIndex == 2 ? " " : ""
                      } `}
                      onClick={() => {
                        handleCardSelection(2);
                      }}
                    >
                      <p
                        className={`text-[#686A6C]  pt-3 leading-7 text-center ${
                          selectedTypeIndex == 2
                            ? "text-sm font-bold text-black"
                            : "text-sm"
                        }`}
                      >
                        Loop Supreme
                      </p>
                      {cartItems[2].quantity > 0 && (
                        <span className=" text-md font-semibold h-8 w-8  text-center pt-1 mt-2   bg-gradient-to-b from-[#f3f4f6] to-[#d1d5db] drop-shadow-2xl  rounded-full ">
                          {cartItems[2].quantity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="">
                    <div className="flex cursor-pointer justify-between pb-3 lg:pb-1 pl-2 pr-4 ">
                      <p className="text-sm  font-bold ">Total Quantity :</p>
                      <span className="text-sm font-bold ">
                        {totalQuantity}
                      </span>
                    </div>
                    <hr className="w-[156px]" />
                  </div>
                  <div className="pt-2  pl-2 lg:pt-1">
                    <p className="text-xs  font-semibold text-[#F66F6F] ">
                      *Maximum 10
                    </p>
                  </div>
                  <div className="pt-11 lg:pt-4 text-center">
                    <button className="h-9 w-[145px] lg:h-[41px] lg:w-[164px]  rounded-[10px]  bg-black text-white text-[10px] lg:text-xs font-bold">
                      FOR BULK ORDERS CONTACT US
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-5">
                <div>
                  <Image
                    src={`/assets/images/storeImages/${type}/${value}/${color}.png`}
                    className=""
                    alt="flip"
                    height={258}
                    width={400}
                  />
                </div>
                <div className="cursor-pointer" onClick={handleClick}>
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
            {/* foe mobile */}
            <div className="md:hidden">
              <div className="flex space-x-5">
                <div className="">
                  <Image
                    src={`/assets/images/storeImages/${type}/${value}/${color}.png`}
                    className=""
                    alt="flip"
                    height={172}
                    width={300}
                  />
                </div>
                <div className="cursor-pointer" onClick={handleClick}>
                  <Image
                    src={"/assets/images/cart-images/flipImage.png"}
                    className=""
                    alt="flip"
                    height={25}
                    width={25}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* pricing section */}
        {selectedTypeIndex == 0 && (
          <CardDescription
            index={selectedTypeIndex}
            color={color}
            setColor={setColor}
            cardTypeSelected={cardTypeSelected}
            heading={"Loop Lite"}
            price={"899"}
            quantity={cartItems[0].quantity}
            desc={
              "Sleek and vibrant, our Loop Lite cards offer a range of solid color options with contrasting Loop logo that adds a bold touch of distinction."
            }
          />
        )}
        {selectedTypeIndex == 1 && (
          <CardDescription
            index={selectedTypeIndex}
            color={color}
            setColor={setColor}
            cardTypeSelected={cardTypeSelected}
            heading={"Loop Elevate"}
            price={"999"}
            quantity={cartItems[1].quantity}
            desc={
              "Elevate your style with Loop Elevate cards. Featuring a selection of solid colors and gradient options, our cards are designed with a Loop logo that seamlessly blends in, exuding sophistication."
            }
          />
        )}
        {selectedTypeIndex == 2 && (
          <CardDescription
            index={selectedTypeIndex}
            cardTypeSelected={cardTypeSelected}
            heading={"Loop Supreme"}
            price={"1499"}
            quantity={cartItems[2].quantity}
            desc={
              "Unleash your creativity with Loop Supreme cards. Offering unlimited color options, these cards boast a bold and eye-catching version of your logo on the back, making a statement that's impossible to ignore."
            }
          />
        )}
      </div>
    </div>
  );
};

export default DesignComp;
