import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import ShippingComp from "./ShippingComp";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const CheckoutComp = ({
  cardsArray,
  handleSubmitFunction,
  color,
  colorLite,
  colorElevate,
  cardTypeSelected,
  cardBg,
  cardDesign,
  loopColor,
  checkColor,
  setCheckColor,
  checkLiteColor,
  rupayLoader,
}) => {
  // console.log(`colorlite=${colorLite}`);
  // console.log(`colorelevate=${colorElevate}`);
  // console.log({ cardBg });
  const {
    handleRemoveCardArr,
    totalQuantity,
    totalAmount,
    address,
    setAddress,
    handleDiscount,
    discountCode,
    setDiscountCode,
    finalPrice,
  } = useContext(CartContext);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
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

  const checkFontArray = (uuid) => {
    let tempArr = [
      "c5ca6b8b-1ac7-4d49-9a53-70526dfc2fd7",
      "d73f6121-6dc5-4170-8b3b-40a02835ddd1",
      "de47eb30-ec56-4d98-8069-50bcac1cfcc7",
      "f07f8b1f-3947-4121-a0eb-a60230f7a14b",
      "fbc8a97b-178e-4582-afaf-be755b69ca2b",
      "d886fa29-1622-4a08-ade2-f58fca1237d9",
      "44d97f3f-1393-48a3-95e2-2d4866a3a589",
      "7d223de6-dc2d-4caa-b111-63d5a4e219fa",
      "ef574738-8969-4e8a-a17e-51b8bc6e2eae",
    ];
    if (tempArr.includes(uuid)) {
      return true;
    } else {
      return false;
    }
  };

  const checkLiteOrElevate = (uuid) => {
    let tempArr = [
      "3fa766b5-9f66-4a38-8471-23026a59d84d",
      "801baf78-ce33-446f-b132-618f92ccfc5f",
    ];
    if (tempArr.includes(uuid)) {
      return true;
    } else {
      return false;
    }
  };

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

  useEffect(() => {
    if (totalQuantity && discountCode) {
      handleDiscount();
    }
  }, [totalQuantity]);

  // console.log(cardsArray);
  return (
    <div className="max-w-[1208px] mx-auto flex lg:flex-row flex-col lg:justify-between justify-center px-4 xl:px-0 pb-10">
      {!shippingState ? (
        <div className=" lg:w-8/12  flex  flex-wrap space-x-2  lg:justify-between   ">
          <div className="container mx-auto mb-5  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-4">
              {cardsArray.length &&
                cardsArray.map((data) => {
                  return (
                    <div
                      key={data.key}
                      className="relative grid grid-cols-2 max-[320px]:grid-cols-1 max-[320px]:text-left  gap-5 bg-white rounded-xl cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926] p-4 min-h-[250px] h-full"
                    >
                      {checkLiteOrElevate(data.cardTypeUuid) && (
                        <div className={`card w-[165px] h-[100px]`}>
                          <div className="card-inner h-[100px] w-[165px]">
                            <div className=" card-front h-[100px] w-[165px] drop-shadow-white rounded-2xl relative  ">
                              <img
                                src={`/assets/images/cards/Front/${data.designUuid}.png`}
                                className=" h-[100px] w-[165px]"
                              />
                              {data.companyLogo && data.companyLogo.length ? (
                                <div className="absolute flex items-center right-2 bottom-3  lg:h-auto  lg:w-auto max-h-[45px] max-w-[45px]  object-contain">
                                  <img
                                    src={data.companyLogo}
                                    className=" object-contain w-[30px] h-[25px]"
                                  />
                                </div>
                              ) : (
                                ""
                              )}
                              {checkFontArray(data.designUuid) ? (
                                <div className="absolute text-[10px] text-white lg:bottom-5 lg:left-4 bottom-4 left-5">
                                  {data.fullName ? data.fullName : "John Doe"}
                                </div>
                              ) : (
                                <div className="absolute text-[10px] text-black font-semibold lg:bottom-5 lg:left-4 bottom-4 left-5">
                                  {data.fullName ? data.fullName : "John Doe"}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {data.cardTypeName === "Supreme" && (
                        <div
                          className={`relative h-[100px] w-[165px] rounded-xl`}
                          style={{
                            backgroundColor: cardBg,
                          }}
                        >
                          <Image
                            className="absolute top-0 left-0 "
                            src={`/assets/images/storeImages/Supreme/Abstract/Des${cardDesign}.png`}
                            height={100}
                            width={165}
                            alt="icon"
                          />

                          <Image
                            className="absolute bottom-3 right-3"
                            src={"/assets/images/storeImages/Supreme/Qr.png"}
                            height={15}
                            width={15}
                            alt="icon"
                          />
                          <Image
                            className="absolute top-3 right-3 z-10"
                            src={`/assets/images/storeImages/Supreme/loop${loopColor}.png`}
                            height={15}
                            width={25}
                            alt="icon"
                          />
                          <div className="absolute bottom-3 left-4">
                            <p
                              className={`lg:text-[8px] text:sm  font-semibold text-${loopColor}`}
                            >
                              {data.fullName ? data.fullName : "John Doe"}
                            </p>
                          </div>
                        </div>
                      )}
                      <div
                        className="absolute top-[-12px] right-0 rounded-md flex  items-center justify-end w-[100px] px-1 pt-0.5 bg-black"
                        onClick={() => handleRemoveCardArr(data.key)}
                      >
                        <p className="text-xs font-bold leading-tight text-center text-white cursor-pointer">
                          REMOVE
                        </p>
                        <p className="text-base font-medium leading-7 text-center text-white pl-2 pr-2">
                          X
                        </p>
                      </div>
                      <div className="px-1 py-2 pl-6">
                        <p className="text-sm font-bold leading-7">
                          {data.cardTypeName}
                        </p>
                        <p className="text-sm font-bold leading-7 text-red-400 mt-1">
                          ₹ {data.amount}
                        </p>
                        {/* <div className="flex justify-between mt-1">
                          <span className="text-xs font-medium leading-snug">
                            Color :{" "}
                            <span className="w-4 h-4 bg-green-300 shadow-inner rounded-full px-2 ml-1"></span>
                          </span>
                          <span className="text-xs font-medium leading-snug">
                            Qty : 1{" "}
                          </span>
                        </div> */}
                      </div>
                      <div>
                        {checkLiteOrElevate(data.cardTypeUuid) && (
                          <div className="h-[100px] w-[165px]">
                            <Image
                              src={`/assets/images/cards/Back/${data.designUuid}.png`}
                              height={105}
                              width={170}
                              alt="demo"
                              quality={100}
                            />
                          </div>
                        )}

                        {data.cardTypeName === "Supreme" && (
                          <div>
                            {" "}
                            <div
                              className="h-[100px] w-[165px] rounded-[10px] relative"
                              style={{
                                backgroundColor: cardBg,
                              }}
                            >
                              {data.companyLogo && data.companyLogo.length ? (
                                <div className="absolute flex   left-7 bottom-4 justify-center items-center h-[70px] w-[110px] object-cover">
                                  <img
                                    src={data.companyLogo}
                                    className=" object-fill w-[50px] h-[50px] "
                                  />
                                </div>
                              ) : (
                                <div className="absolute lg:left-16 flex justify-center items-center left-[50px] bottom-[40px] lg:bottom-16 h-[90px] w-[200px] lg:w-[260px] lg:h-[130px] bg-slate-200 rounded-md mt-1">
                                  <h3>upload Company Logo</h3>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex ">
                        <div className="pl-6">
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
      <div className="  pl-2 pr-0 lg:pr-4 xl:pr-0">
        <div className="w-full lg:w-[330px]  xl:w-[385px] shadow-xl min-h-[510px] bg-white rounded-xl py-8">
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
          <div className="mx-5 mt-14">
            <div className="flex md:flex-row flex-col items-center justify-between w-full my-5 md:space-x-2 space-y-4 md:space-y-0">
              <input
                className="h-10 w-full px-4 border outline-none rounded-[10px] placeholder:text-black"
                name="discount"
                type="text"
                placeholder="Discount code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button
                className={`h-10 rounded-[10px] bg-black border border-black w-full text-white ${
                  isHovered
                    ? "bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] text-black"
                    : "bg-black text-white"
                }`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={() => handleDiscount()}
              >
                APPLY
              </button>
            </div>

            <div className="flex items-center justify-between w-full h-10 px-5 border rounded-lg border-black">
              <p className="text-base font-bold text-center">Total</p>
              <p className="w-40 text-base  font-bold leading-10 text-right">
                ₹ {finalPrice.toFixed(2)}
              </p>
            </div>
          </div>
          <div className="mx-5 my-6">
            <button
              className={`w-full h-10 px-5 bg-black border rounded-lg border-black cursor-pointer text-base font-bold text-center text-white `}
              onClick={handleClick}
            >
              {rupayLoader ? (
                <BeatLoader color="#FFFFFF" size={12} />
              ) : shippingState ? (
                `CHECKOUT  (₹ ${finalPrice.toFixed(2)})`
              ) : (
                "GO TO SHIPPING"
              )}
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
