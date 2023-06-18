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
  color,
  setColor,
  colorLite,
  setColorLite,
  colorElevate,
  setColorElevate,
}) => {
  const { cartItems, minusCartFunc, plusCartFunc } = useContext(CartContext);
  const [State, setState] = useState(1);
  const [value, setValue] = useState("Front");
  const [type, setType] = useState("Lite");
  //const [color, setColor] = useState("7dae8f7f-bcc9-4ef9-bc1e-a2196a9c628a");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setValue(value === "Front" ? "Back" : "Front");
  };

  // console.log(selectedTypeIndex, "selectedTypeIndex")
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (selectedTypeIndex == 0) {
      setType("Lite");
    } else if (selectedTypeIndex == 1) {
      setType("Elevate");
    } else {
      setType("Supreme");
    }
  }, [selectedTypeIndex]);

  useEffect(() => {
    if (type == "Lite") {
      setColor("7dae8f7f-bcc9-4ef9-bc1e-a2196a9c628a");
    } else if (type == "Elevate") {
      setColor("c591107d-b134-4cbf-9667-2da6fb07b339");
    } else {
      setColor("supreme");
    }
  }, [type]);

  return (
    <div className="lg:mx-4 max-w-[1208px] xl:mx-auto ">
      <div className="flex flex-col lg:flex-row lg:justify-between ">
        <div className="flex gap-10  xl:gap-20 lg:justify-between justify-center h-full ">
          <div className="flex items-center gap-10  xl:gap-20 mt-10 flex-col-reverse justify-center lg:flex-row ">
            <div className="">
              <div className="flex flex-row lg:flex-col  justify-between gap-6 ">
                <div>
                  <div className=" pr-2 mb-3 lg:mb-2 bg-white h-9 lg:h-12 max-w-[170px] lg:w-[190px] pl-4   rounded-[10px] drop-shadow-lg">
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
                        className={` leading-7 pt-2 text-[#686A6C] text-center text-xs lg:text-sm ${
                          selectedTypeIndex == 0 ? " font-bold text-black " : ""
                        }`}
                      >
                        Loop Lite
                      </p>

                      {cartItems[0].quantity > 0 && (
                        <span className="text-md font-semibold h-6 w-6 lg:h-9 lg:w-9 text-center lg:pt-1    bg-gradient-to-b from-[#f3f4f6] to-[#d1d5db]  rounded-full ">
                          {cartItems[0].quantity}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pr-2 mb-3 lg:mb-2 bg-white h-9 lg:h-12 max-w-[170px] lg:w-[190px] pl-4  rounded-[10px] drop-shadow-lg">
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
                        className={` leading-7 pt-3 text-[#686A6C] text-center text-xs lg:text-sm ${
                          selectedTypeIndex == 1 ? " font-bold text-black " : ""
                        }`}
                      >
                        Loop Elevate
                      </p>
                      {cartItems[1].quantity > 0 && (
                        <span className="text-md font-semibold h-6 w-6 lg:h-9 lg:w-9  text-center lg:pt-1 mt-1 bg-gradient-to-b from-[#f3f4f6] to-[#d1d5db] drop-shadow-2xl  rounded-full ">
                          {cartItems[1].quantity}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="pr-2 bg-white h-9 lg:h-12 max-w-[170px] lg:w-[190px] pl-4  rounded-[10px] drop-shadow-lg">
                    <div
                      className={`flex cursor-pointer items-center justify-between pb-2   h-full ${
                        selectedTypeIndex == 2 ? " " : ""
                      } `}
                      onClick={() => {
                        handleCardSelection(2);
                      }}
                    >
                      <p
                        className={`text-[#686A6C] text-xs lg:text-sm  pt-3 leading-7 text-center ${
                          selectedTypeIndex == 2 ? " font-bold text-black" : ""
                        }`}
                      >
                        Loop Supreme
                      </p>
                      {cartItems[2].quantity > 0 && (
                        <span className=" text-md font-semibold h-6 w-6 lg:h-9 lg:w-9  text-center lg:pt-1 mt-2   bg-gradient-to-b from-[#f3f4f6] to-[#d1d5db] drop-shadow-2xl  rounded-full ">
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
                  <button className="h-9 mt-10 lg:mt-4 w-[145px] lg:h-[41px] lg:w-[164px]  rounded-[10px]  bg-black text-white text-[10px] lg:text-xs font-bold">
                    FOR BULK ORDERS CONTACT US
                  </button>
                </div>
              </div>
            </div>
            {selectedTypeIndex == 0 && (
              <div>
                <div className="hidden md:block">
                  <div className="flex space-x-5">
                    <div
                      className={`card ${isFlipped ? "flipped" : ""}`}
                      onClick={handleFlip}
                    >
                      <div className="w-[400px] h-[258px]">
                        <div className={` card-inner w-[400px] h-[258px]`}>
                          <div className="card-front">
                            <div className={`relative`}>
                              <Image
                                src={`/assets/images/cards/Front/${colorLite}.png`}
                                className={` `}
                                alt="flip"
                                height={258}
                                width={400}
                              />
                              {colorLite ===
                                "7d223de6-dc2d-4caa-b111-63d5a4e219fa" ||
                              colorLite ===
                                "44d97f3f-1393-48a3-95e2-2d4866a3a589" ||
                              colorLite ===
                                "d886fa29-1622-4a08-ade2-f58fca1237d9" ? (
                                <div className="absolute text-white  bottom-12 left-8">
                                  <p>John Doe</p>
                                </div>
                              ) : (
                                <div className="absolute text-black bottom-12 left-8">
                                  <p>John Doe</p>
                                </div>
                              )}
                            </div>
                          </div>

                          <div
                            className={`card-back h-[258px] w-[400px] relative `}
                          >
                            <Image
                              src={`/assets/images/cards/Back/${colorLite}.png`}
                              className={``}
                              alt="flip"
                              height={258}
                              width={400}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block cursor-pointer"
                      onClick={handleFlip}
                    >
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
                <div className="md:hidden">
                  <div className="flex space-x-3">
                    <div
                      className={`card ${isFlipped ? "flipped" : ""}`}
                      onClick={handleFlip}
                    >
                      <div className="w-[300px] h-[175px]">
                        <div className={` card-inner w-[300px] h-[172px]`}>
                          <div className="card-front">
                            <div className="relative">
                              <Image
                                src={`/assets/images/cards/Front/${colorLite}.png`}
                                className=""
                                alt="flip"
                                height={172}
                                width={300}
                              />
                              {colorLite ===
                                "7d223de6-dc2d-4caa-b111-63d5a4e219fa" ||
                              colorLite ===
                                "44d97f3f-1393-48a3-95e2-2d4866a3a589" ||
                              colorLite ===
                                "d886fa29-1622-4a08-ade2-f58fca1237d9" ? (
                                <div className="absolute text-white  bottom-8 left-6">
                                  <p>John Doe</p>
                                </div>
                              ) : (
                                <div className="absolute text-black bottom-8 left-6">
                                  <p>John Doe</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div
                            className={`card-back h-[172px] w-[300px] relative `}
                          >
                            <Image
                              src={`/assets/images/cards/Back/${colorLite}.png`}
                              className=""
                              alt="flip"
                              height={172}
                              width={300}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block cursor-pointer"
                      onClick={handleFlip}
                    >
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
            )}
            {selectedTypeIndex == 1 && (
              <div>
                <div className="hidden md:block">
                  <div className="flex space-x-5">
                    <div
                      className={`card ${isFlipped ? "flipped" : ""}`}
                      onClick={handleFlip}
                    >
                      <div className="w-[400px] h-[258px]">
                        <div className={` card-inner w-[400px] h-[258px]`}>
                          <div className="card-front">
                            <div className={`relative`}>
                              <Image
                                src={`/assets/images/cards/Front/${colorElevate}.png`}
                                className={` `}
                                alt="flip"
                                height={258}
                                width={400}
                              />
                              {colorElevate ===
                                "c5ca6b8b-1ac7-4d49-9a53-70526dfc2fd7" ||
                              colorElevate ===
                                "d73f6121-6dc5-4170-8b3b-40a02835ddd1" ||
                              colorElevate ===
                                "de47eb30-ec56-4d98-8069-50bcac1cfcc7" ||
                              colorElevate ===
                                "f07f8b1f-3947-4121-a0eb-a60230f7a14b" ||
                              colorElevate ===
                                "fbc8a97b-178e-4582-afaf-be755b69ca2b" ||
                              colorElevate ===
                                "ef574738-8969-4e8a-a17e-51b8bc6e2eae" ? (
                                <div className="absolute text-white  bottom-12 left-8">
                                  <p>John Doe</p>
                                </div>
                              ) : (
                                <div className="absolute text-black bottom-12 left-8">
                                  <p>John Doe</p>
                                </div>
                              )}
                            </div>
                          </div>

                          <div
                            className={`card-back h-[258px] w-[400px] relative `}
                          >
                            <Image
                              src={`/assets/images/cards/Back/${colorElevate}.png`}
                              className={``}
                              alt="flip"
                              height={258}
                              width={400}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block cursor-pointer"
                      onClick={handleFlip}
                    >
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
                <div className="md:hidden">
                  <div className="flex space-x-3">
                    <div
                      className={`card ${isFlipped ? "flipped" : ""}`}
                      onClick={handleFlip}
                    >
                      <div className="w-[300px] h-[175px]">
                        <div className={` card-inner w-[300px] h-[172px]`}>
                          <div className="card-front">
                            <div className="relative">
                              <Image
                                src={`/assets/images/cards/Front/${colorElevate}.png`}
                                className=""
                                alt="flip"
                                height={172}
                                width={300}
                              />
                              {colorElevate ===
                                "c5ca6b8b-1ac7-4d49-9a53-70526dfc2fd7" ||
                              colorElevate ===
                                "d73f6121-6dc5-4170-8b3b-40a02835ddd1" ||
                              colorElevate ===
                                "de47eb30-ec56-4d98-8069-50bcac1cfcc7" ||
                              colorElevate ===
                                "f07f8b1f-3947-4121-a0eb-a60230f7a14b" ||
                              colorElevate ===
                                "fbc8a97b-178e-4582-afaf-be755b69ca2b" ||
                              colorElevate ===
                                "ef574738-8969-4e8a-a17e-51b8bc6e2eae" ? (
                                <div className="absolute text-white  bottom-8 left-6">
                                  <p>John Doe</p>
                                </div>
                              ) : (
                                <div className="absolute text-black bottom-8 left-6">
                                  <p>John Doe</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div
                            className={`card-back h-[172px] w-[300px] relative `}
                          >
                            <Image
                              src={`/assets/images/cards/Back/${colorElevate}.png`}
                              className=""
                              alt="flip"
                              height={172}
                              width={300}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block cursor-pointer"
                      onClick={handleFlip}
                    >
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
            )}
            {selectedTypeIndex !== 0 && selectedTypeIndex !== 1 && (
              <div>
                <div className="hidden md:block">
                  <div className="flex space-x-5">
                    <div
                      className={`card ${isFlipped ? "flipped" : ""}`}
                      onClick={handleFlip}
                    >
                      <div className="w-[400px] h-[258px]">
                        <div className={` card-inner w-[400px] h-[258px]`}>
                          <div className="card-front">
                            <div className={``}>
                              <Image
                                src={`/assets/images/cards/Front/supreme.png`}
                                className={` `}
                                alt="flip"
                                height={258}
                                width={400}
                              />
                            </div>
                          </div>

                          <div
                            className={`card-back h-[258px] w-[400px] relative `}
                          >
                            <Image
                              src={`/assets/images/cards/Back/supreme.png`}
                              className={``}
                              alt="flip"
                              height={258}
                              width={400}
                            />
                            {/* <div className="absolute bottom-14 left-6">
                          <p>John Doe</p>
                        </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block cursor-pointer"
                      onClick={handleFlip}
                    >
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
                <div className="md:hidden">
                  <div className="flex space-x-3">
                    <div
                      className={`card ${isFlipped ? "flipped" : ""}`}
                      onClick={handleFlip}
                    >
                      <div className="w-[300px] h-[175px]">
                        <div className={` card-inner w-[300px] h-[172px]`}>
                          <div className="card-front">
                            <div className="relative">
                              <Image
                                src={`/assets/images/cards/Front/supreme.png`}
                                className=""
                                alt="flip"
                                height={172}
                                width={300}
                              />
                              {/* <div className="absolute bottom-6 left-6">
                            <p>John Doe</p>
                          </div> */}
                            </div>
                          </div>
                          <div
                            className={`card-back h-[172px] w-[300px] relative `}
                          >
                            <Image
                              src={`/assets/images/cards/Back/supreme.png`}
                              className=""
                              alt="flip"
                              height={172}
                              width={300}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hidden lg:block cursor-pointer"
                      onClick={handleFlip}
                    >
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
            )}

            {/* foe mobile */}
          </div>
        </div>
        {/* pricing section */}
        {selectedTypeIndex == 0 && (
          <CardDescription
            index={selectedTypeIndex}
            color={color}
            setColor={setColor}
            colorLite={colorLite}
            setColorLite={setColorLite}
            colorElevate={colorElevate}
            setColorElevate={setColorElevate}
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
            colorLite={colorLite}
            setColorLite={setColorLite}
            colorElevate={colorElevate}
            setColorElevate={setColorElevate}
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
