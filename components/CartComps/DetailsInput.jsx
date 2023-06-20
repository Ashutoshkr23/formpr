import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SketchPicker } from "react-color";
import { motion, useMotionValue, useTransform } from "framer-motion";

function DetailsInput({
  card,
  index,
  checkFormValid,
  color,
  setColor,
  colorLite,
  setColorLite,
  colorElevate,
  setColorElevate,
  setCardBg,
  cardBg,
  setCardDesign,
  cardDesign,
  setLoopColor,
  checkColor,
  setCheckColor,
  checkLiteColor,
  setCheckLiteColor,
}) {
  // console.log(card, "Card")

  const [selectedDiv, setSelectedDiv] = useState(null);
  const [selectedColorLite, setSelectedColorLite] = useState(colorLite);
  const [selectedColorElevate, setSelectedColorElevate] =
    useState(colorElevate);
  setCheckColor(selectedColorElevate);
  setCheckLiteColor(selectedColorLite);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const {
    cartItems,
    minusCartFunc,
    plusCartFunc,
    userProfile,
    handleApplyToAll,
    handleName,
    handleRemoveCardArr,
    totalQuantity,
    handleDesignUuid,
    handleColorUuid,
  } = useContext(CartContext);
  const [design, setDesign] = useState(1);
  const [font, setFont] = useState("white");
  const [isFlipped, setIsFlipped] = useState(false);
  setCardDesign(design);
  setLoopColor(font);

  const divStyle = {
    border: "1px solid transparent",
    padding: "4px",
    cursor: "pointer",
  };

  const selectedDivStyle = {
    ...divStyle,
    borderColor: "#000000",
  };

  const handleDivClick = (index) => {
    // console.log(selectedDiv);
    setSelectedDiv(index === selectedDiv ? null : index);
  };

  // const [companyName, setCompanyName] = useState('');

  const handleCompanyNameChange = (event) => {
    handleName(event.target.name, card.key, event.target.value);
  };

  const handleFullNameChange = (event) => {
    handleName(event.target.name, card.key, event.target.value);
  };

  // const [logo, setLogo] = useState('');

  const handleLogoChange = (event) => {
    // console.log(event.target);
    handleName(event.target.name, card.key, event.target.value);
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleAwsUpload = async (image) => {
    // console.log("runned 3");

    const formData = new FormData();
    formData.append("companyLogo", image);
    formData.append("puuid", userProfile.puuid);

    const uploadImage = await axios.post("/api/uploadImageAws", formData);
    // console.log("runned 4");
    // console.log(uploadImage, "uploadImageAws");
    if (uploadImage.status == 200 && !uploadImage.data.error) {
      const awsLink = uploadImage.data.result;
      handleName("companyLogo", card.key, awsLink, image.name);
      toast.success("Logo Uploaded Successfully !");
    }
  };

  const handleFileChange = (event) => {
    // console.log("runned 1");
    const file = event.target.files[0];
    const fileSizeInMB = file?.size / (1024 * 1024);
    // console.log("fileSizeInMB: " + fileSizeInMB);
    if (fileSizeInMB > 5) {
      setErrorMessage("File size exceeds the limit of 5MB.");
    } else {
      setErrorMessage("");
      // console.log("runned 2");

      handleAwsUpload(file);
      // handleName(event.target.name, card.key, file);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const [showPicker, setShowPicker] = useState(false);
  const [cardColor, setCardColor] = useState("#000000");
  setCardBg(cardColor);

  useEffect(() => {
    if (cardColor !== card.hexCode) {
      handleColorUuid(card.key, cardColor, 1);
    }
  }, [cardColor]);

  // console.log(cartItems[2],"cartItems[2]")
  const handleChangeComplete = (color) => {
    setCardColor(color.hex);
  };

  const colorPickerRef = useRef();

  const handleParentClick = (event) => {
    if (
      showPicker &&
      (!colorPickerRef.current ||
        !colorPickerRef.current.contains(event.target))
    ) {
      setShowPicker(false);
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // console.log(x);
  // console.log(y);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dragging) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();
        const newX = e.clientX - containerRect.left - imageRect.width / 2;
        const newY = e.clientY - containerRect.top - imageRect.height / 2;
        setPosition({ x: newX, y: newY });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    if (imageRef.current) {
      imageRef.current.addEventListener("mousemove", handleMouseMove);
      imageRef.current.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("mousemove", handleMouseMove);
        imageRef.current.removeEventListener("mouseup", handleMouseUp);
      }
    };
  }, [dragging]);

  const handleMouseDown = () => {
    setDragging(true);
  };
  const handleIncreaseSize = () => {
    setScale((prevScale) => prevScale + 0.1);
  };

  const handleDecreaseSize = () => {
    setScale((prevScale) => prevScale - 0.1);
  };
  return (
    <div className="sm:px-8 relative md:px-8  lg:px-4 xl:px-0 max-w-[1208px] lg:mx-auto mx-[10px] my-6  ">
      {card.cardTypeUuid == "7031e440-bc0b-4b39-8b8e-2afe3360d744" ? (
        <div
          className=" mt-4 lg:pl-7 pl-4 pr-4 h-full lg:h-[373px] bg-white rounded-xl drop-shadow-white flex flex-col lg:flex-row items-center justify-between "
          onClick={handleParentClick}
        >
          {/* supreme */}
          <div
            className="absolute cursor-pointer left-0 -top-3 rounded-md flex justify-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] hover:text-black  items-center bg-black text-[10px] font-bold text-white h-6 w-20"
            onClick={() => handleRemoveCardArr(card.key)}
          >
            REMOVE <span className="text-base font-medium pl-2">X</span>
          </div>

          <div className="flex lg:flex-row flex-col-reverse gap-[42px] flex-grow ">
            <div className=" flex flex-col gap-1 lg:gap-4 ">
              <p className="text-sm">Abstract Design</p>
              {/* <div className=" flex flex-row lg:flex-col gap-1.5 lg:gap-4 ">
                <div className="flex gap-2 ">
                  <img
                    className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px]
                   ${design === 1 ? `border-2 border-black` : ""}`}
                    src={
                      "/assets/images/storeImages/Supreme/Abstract/Design1.png"
                    }
                    alt="icon"
                    onClick={() => setDesign(1)}
                  />
                  <img
                    className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px] ${
                      design === 2 ? `border-2 border-black` : ""
                    }`}
                    src={
                      "/assets/images/storeImages/Supreme/Abstract/Design2.png"
                    }
                    alt="icon"
                    onClick={() => setDesign(2)}
                  />
                </div>
                <div className="flex  gap-2">
                  <img
                    className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px] ${
                      design === 3 ? `border-2 border-black` : ""
                    }`}
                    src={
                      "/assets/images/storeImages/Supreme/Abstract/Design3.png"
                    }
                    alt="icon"
                    onClick={() => setDesign(3)}
                  />
                  <img
                    className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px] ${
                      design === 4 ? `border-2 border-black` : ""
                    }`}
                    src={
                      "/assets/images/storeImages/Supreme/Abstract/Design4.png"
                    }
                    alt="icon"
                    onClick={() => setDesign(4)}
                  />
                </div>
                <div className="flex  gap-2">
                  <img
                    className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px] ${
                      design === 5 ? `border-2 border-black` : ""
                    }`}
                    src={
                      "/assets/images/storeImages/Supreme/Abstract/Design5.png"
                    }
                    alt="icon"
                    onClick={() => setDesign(5)}
                  />
                  <img
                    className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px] ${
                      design === 6 ? `border-2 border-black` : ""
                    }`}
                    src={
                      "/assets/images/storeImages/Supreme/Abstract/Design6.png"
                    }
                    alt="icon"
                    onClick={() => setDesign(6)}
                  />
                </div>
              </div> */}

              <div className="flex flex-row  w-[150px]  gap-1.5 lg:gap-4 flex-wrap">
                {cartItems &&
                  cartItems.length &&
                  cartItems[2].designs.map((abstract) => {
                    return (
                      <img
                        className={` cursor-pointer h-[38px] w-[38px] lg:h-[55px] lg:w-[55px]
                     ${
                       card.designUuid == abstract.designUuid
                         ? `border-2 border-black`
                         : ""
                     }`}
                        src={`/assets/images/abstracts/${abstract.designUuid}.png`}
                        alt="icon"
                        onClick={() =>
                          handleDesignUuid(card.key, abstract.designUuid)
                        }
                      />
                    );
                  })}
              </div>
            </div>
            <div className="flex mt-8 lg:mt-0">
              <div className="flex flex-col gap-6  lg:mt-0  ">
                <div
                  className={`card ${isFlipped ? "flipped" : ""}`}
                  onClick={handleFlip}
                >
                  <div className="lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]">
                    <div
                      className={` card-inner lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]`}
                    >
                      <div className="card-front">
                        <div
                          className={` drop-shadow-white rounded-2xl relative lg:w-[400px] lg:h-[250px] w-full h-[172px]`}
                          style={{
                            backgroundColor: cardColor,
                          }}
                        >
                          <Image
                            className="absolute top-5 right-8 z-10"
                            src={`/assets/images/storeImages/Supreme/loop${font}.png`}
                            height={18}
                            width={43}
                            alt="icon"
                          />
                          <Image
                            className="absolute bottom-6 right-6"
                            src={"/assets/images/storeImages/Supreme/Qr.png"}
                            height={43}
                            width={43}
                            alt="icon"
                          />
                          {card.designUuid !==
                            "1bb3aa1e-410f-441c-a290-827bccc7f777" && (
                            <div>
                              <div className="hidden lg:block">
                                <Image
                                  className="absolute top-0 left-0"
                                  src={`/assets/images/abstracts/card/${card.designUuid}.png`}
                                  height={250}
                                  width={400}
                                  alt="icon"
                                />
                              </div>
                              <div className="lg:hidden">
                                <Image
                                  className="absolute top-0 left-0"
                                  src={`/assets/images/abstracts/card/${card.designUuid}.png`}
                                  height={172}
                                  width={300}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          )}
                          <div className="absolute bottom-8 left-6">
                            <p
                              className={`lg:text-[20px] text:sm  font-semibold text-${font}`}
                            >
                              {card.fullName ? card.fullName : "John Doe"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* back card */}

                      <div
                        className={`card-back flex justify-center items-center drop-shadow-white rounded-2xl relative lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]`}
                        style={{
                          backgroundColor: cardColor,
                        }}
                      >
                        <Image
                          src={"/assets/images/nfcIcon.png"}
                          className="absolute top-4 right-4 "
                          alt="nfc"
                          height={25}
                          width={25}
                        />

                        {card.companyLogo && card.companyLogo.length ? (
                          <div
                            className=" w-auto max-w-[300px] h-[100px] lg:h-[120px] object-cover relative"
                            ref={containerRef}
                          >
                            <div className="absolute inset-0"></div>
                            <img
                              src={card.companyLogo}
                              className="object-fill h-[100px] lg:h-[120px] max-w-[300px] w-auto"
                              style={{
                                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                              }}
                              ref={imageRef}
                              onMouseDown={handleMouseDown}
                            />
                          </div>
                        ) : (
                          <div className="absolute lg:left-16 flex justify-center items-center left-[50px] bottom-[40px] lg:bottom-16 h-[90px] w-[200px] lg:w-[260px] lg:h-[130px] bg-slate-200 rounded-md mt-1">
                            <h3>upload Company Logo</h3>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between ">
                  <div className="flex items-center ">
                    <button
                      className=" rounded-full"
                      onClick={handleIncreaseSize}
                    >
                      +
                    </button>
                    <button onClick={handleDecreaseSize}>-</button>
                    <p className="sm:text-sm text-xs">color:</p>
                    <div className="ml-1 text-center w-[80px] lg:w-[130px] h-8 bg-gradient-to-b from-white to-gray-400 shadow-inner border-2 rounded-lg border-black">
                      <p> {showPicker ? cardColor : cardColor}</p>
                    </div>
                    <Image
                      className="ml-1 cursor-pointer"
                      src={`/assets/images/storeImages/Supreme/eyeDroper.png`}
                      height={31}
                      width={31}
                      alt="icon"
                      onClick={() => setShowPicker(!showPicker)}
                    />

                    {showPicker && (
                      <div
                        className="absolute bottom-0 left-0 "
                        ref={colorPickerRef}
                      >
                        <SketchPicker
                          color={cardColor}
                          onChangeComplete={handleChangeComplete}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1.5 items-center">
                    <p className="sm:text-sm text-xs pl-1 lg:pl-0 ">
                      font color:
                    </p>
                    <div
                      className={`rounded-full bg-[#ECECEC] cursor-pointer w-3 h-3 lg:w-5 lg:h-5  ${
                        font === "white"
                          ? "scale-110 border-2 border-black "
                          : ""
                      }
                    `}
                      onClick={() => {
                        setFont("white");
                        handleColorUuid(card.key, "#FFFFFF", 2);
                      }}
                    ></div>
                    <div
                      className={`rounded-full ml-1 cursor-pointer bg-[#000000] w-3 h-3 lg:w-5 lg:h-5 ${
                        font === "black"
                          ? "scale-110 border-2 border-yellow-500 "
                          : ""
                      }`}
                      onClick={() => {
                        setFont("black");
                        handleColorUuid(card.key, "#000000", 2);
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <Image
                  src={"/assets/images/cart-images/flipImage.png"}
                  className=" cursor-pointer hidden lg:block"
                  alt="flip"
                  height={36}
                  width={36}
                  onClick={handleFlip}
                />
              </div>
            </div>
          </div>
          <div className="w-[325px] sm:w-[350px] xl:w-[390px]">
            <div className="flex mt-6 lg:mt-0 gap-5  items-center">
              <h2 className="text-[20px]">{card.cardTypeName}</h2>
              <p className="lg:hidden text-[20px] text-[#F66F6F]">
                ₹ {card.amount}
              </p>
            </div>
            <div className="flex mt-8">
              <input
                className={`border outline-none ${
                  checkFormValid &&
                  card?.companyName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                } w-[220px] h-10 rounded-xl pl-4`}
                type="text"
                name="companyName"
                value={card.companyName}
                onChange={handleCompanyNameChange}
                placeholder="Company Name"
              />
              {index == 0 && totalQuantity > 1 && (
                <button
                  className="bg-black h-10 w-[98px] lg:w-[130px] flex justify-center items-center text-white rounded-lg ml-2 text-xs lg:text-sm font-bold"
                  onClick={() => {
                    handleApplyToAll(0, card.companyName);
                    toast.success("Applied to all successfully");
                  }}
                >
                  APPLY TO ALL
                </button>
              )}
            </div>
            {checkFormValid && card?.companyName?.length == 0 && (
              <div className="">
                <p className="text-xs text-red-500 font-bold py-1 px-2">
                  Required *
                </p>
              </div>
            )}
            <div>
              <div className="flex mt-8">
                {card.fileName ? ( // Display the file name if it exists
                  <label>
                    <p
                      className="py-2  flex cursor-pointer justify-between border w-[220px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-3 text-xs overflow-hidden"
                      onClick={handleLabelClick}
                    >
                      <p>
                        {card.fileName && card.fileName.length > 20
                          ? `${card.fileName.substring(0, 20)}...`
                          : card.fileName}
                      </p>{" "}
                      <span>
                        {" "}
                        <Image
                          src={"/assets/images/uploadLogo.png"}
                          height={20}
                          width={20}
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                      </span>
                    </p>
                  </label>
                ) : (
                  <label
                    htmlFor="fileInput"
                    className={`px-4 cursor-pointer py-2 flex justify-between border text-xs lg:text-sm   ${
                      checkFormValid &&
                      card?.fileName?.length == 0 &&
                      "border-2 border-red-400 "
                    }  w-[220px] h-10 rounded-xl font-semibold pt-2 px-0 sm:px-4 `}
                    onClick={handleLabelClick}
                  >
                    Upload Logo
                    <Image
                      src={"/assets/images/uploadLogo.png"}
                      height={24}
                      width={24}
                      alt="icon"
                      style={{ objectFit: "contain" }}
                    />
                  </label>
                )}
                <input
                  id="companyLogo"
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  name="companyLogo"
                  style={{ display: "none" }}
                />
                {index === 0 && totalQuantity > 1 && (
                  <button
                    className="bg-black h-10 w-[98px] lg:w-[130px] flex justify-center items-center text-white rounded-lg ml-2 text-xs lg:text-sm font-bold"
                    onClick={() => {
                      toast.success("Applied to all successfully");
                      handleApplyToAll(1, card.companyLogo, card.fileName);
                    }}
                  >
                    APPLY TO ALL
                  </button>
                )}
              </div>
              {checkFormValid && card?.fileName?.length == 0 && (
                <div className="">
                  <p className="text-xs text-red-500 font-bold py-1 px-2">
                    Please Upload Company logo *
                  </p>
                </div>
              )}
            </div>
            <div>
              <input
                className={`border outline-none mt-8 ${
                  checkFormValid &&
                  card?.fullName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                } w-[220px]  mb-4 lg:mb-0 h-10 rounded-xl pl-4`}
                type="text"
                value={card.fullName}
                name="fullName"
                onChange={handleFullNameChange}
                placeholder="Full Name"
              />
            </div>
            {checkFormValid && card?.fullName?.length == 0 && (
              <div className="">
                <p className="text-xs text-red-500 font-bold py-1 px-2">
                  Required *
                </p>
              </div>
            )}
            <div className="mt-6 hidden lg:block">
              <h3 className="text-[20px] text-[#F66F6F] font-bold">
                ₹ {card.amount}
              </h3>
            </div>
          </div>
        </div>
      ) : (
        <div className=" mt-4 pl-7 pr-4 h-full lg:h-[373px] bg-white rounded-xl drop-shadow-white flex flex-col lg:flex-row items-center justify-between">
          <div
            className="absolute cursor-pointer left-0 -top-3 rounded-md flex justify-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] hover:text-black  items-center bg-black text-[10px] font-bold text-white h-6 w-20"
            onClick={() => handleRemoveCardArr(card.key)}
          >
            REMOVE <span className="text-base font-medium pl-2">X</span>
          </div>

          <div className="flex flex-col items-center flex-grow ">
            {card.cardTypeName === "Lite" && (
              <div className="flex mt-8 lg:mt-0  ">
                <div
                  className={`card ${
                    isFlipped ? "flipped" : ""
                  } h-[172px] lg:h-[250px] lg:w-[400px] w-[300px]`}
                  onClick={handleFlip}
                >
                  <div className="card-inner lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]">
                    <div className="card-front lg:w-[400px] lg:h-[250px] w-[300px] h-[172px] drop-shadow-white rounded-2xl relative  ">
                      <img
                        src={`/assets/images/cards/Front/${selectedColorLite}.png`}
                        className="lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]"
                      />
                      {card.companyLogo && card.companyLogo.length ? (
                        <div className="absolute flex  right-6 bottom-6  lg:right-8 lg:bottom-8  w-10 h-10 lg:h-[60px]  lg:w-[60px] object-cover">
                          <img
                            src={card.companyLogo}
                            className=" object-fill w-full h-10 lg:h-[60px] lg:w-[60px]  "
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {selectedColorLite ===
                        "7d223de6-dc2d-4caa-b111-63d5a4e219fa" ||
                      selectedColorLite ===
                        "44d97f3f-1393-48a3-95e2-2d4866a3a589" ||
                      selectedColorLite ===
                        "d886fa29-1622-4a08-ade2-f58fca1237d9" ? (
                        <div className="absolute text-white  lg:bottom-12 lg:left-8 bottom-7 left-5">
                          {card.fullName ? card.fullName : "John Doe"}
                        </div>
                      ) : (
                        <div className="absolute text-black lg:bottom-12 lg:left-8 bottom-7 left-5">
                          {card.fullName ? card.fullName : "John Doe"}
                        </div>
                      )}
                    </div>
                    <div className="card-back lg:w-[400px] lg:h-[250px] w-[300px] h-[172px] drop-shadow-white rounded-2xl relative  ">
                      <img
                        src={`/assets/images/cards/Back/${selectedColorLite}.png`}
                        className="lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]"
                      />
                    </div>
                  </div>
                </div>
                <div className=" ml-4" onClick={handleFlip}>
                  <Image
                    src={"/assets/images/cart-images/flipImage.png"}
                    className="hidden lg:block "
                    alt="flip"
                    height={36}
                    width={36}
                  />
                </div>
              </div>
            )}
            {card.cardTypeName === "Elevate" && (
              <div className="flex mt-8 lg:mt-0">
                <div
                  className={`card ${
                    isFlipped ? "flipped" : ""
                  } lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]`}
                  onClick={handleFlip}
                >
                  <div className="card-inner lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]">
                    <div className="card-front lg:w-[400px] lg:h-[250px] w-[300px] h-[172px] drop-shadow-white rounded-2xl relative  ">
                      <img
                        src={`/assets/images/cards/Front/${selectedColorElevate}.png`}
                        className="lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]"
                      />
                      {card.companyLogo && card.companyLogo.length ? (
                        <div className="absolute flex  right-6 bottom-6  lg:right-8 lg:bottom-8  w-10 h-10 lg:h-[60px]  lg:w-[60px] object-cover">
                          <img
                            src={card.companyLogo}
                            className=" object-fill w-full h-10 lg:h-[60px] lg:w-[60px]  "
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {selectedColorElevate ===
                        "c5ca6b8b-1ac7-4d49-9a53-70526dfc2fd7" ||
                      selectedColorElevate ===
                        "d73f6121-6dc5-4170-8b3b-40a02835ddd1" ||
                      selectedColorElevate ===
                        "de47eb30-ec56-4d98-8069-50bcac1cfcc7" ||
                      selectedColorElevate ===
                        "f07f8b1f-3947-4121-a0eb-a60230f7a14b" ||
                      selectedColorElevate ===
                        "fbc8a97b-178e-4582-afaf-be755b69ca2b" ||
                      selectedColorElevate ===
                        "ef574738-8969-4e8a-a17e-51b8bc6e2eae" ? (
                        <div className="absolute text-white  lg:bottom-12 lg:left-8 bottom-7 left-5">
                          {card.fullName ? card.fullName : "John Doe"}
                        </div>
                      ) : (
                        <div className="absolute text-black lg:bottom-12 lg:left-8 bottom-7 left-5">
                          {card.fullName ? card.fullName : "John Doe"}
                        </div>
                      )}
                    </div>
                    <div className="card-back lg:w-[400px] lg:h-[250px] w-[300px] h-[172px] drop-shadow-white rounded-2xl relative  ">
                      <img
                        src={`/assets/images/cards/Back/${selectedColorElevate}.png`}
                        className="lg:w-[400px] lg:h-[250px] w-[300px] h-[172px]"
                      />
                    </div>
                  </div>
                </div>
                <div className=" ml-4" onClick={handleFlip}>
                  <Image
                    src={"/assets/images/cart-images/flipImage.png"}
                    className="hidden lg:block "
                    alt="flip"
                    height={36}
                    width={36}
                  />
                </div>
              </div>
            )}

            <div className="flex mt-6  gap-4">
              <p className="text-xs">colors</p>
              <div className={`flex space-x-2 justify-start items-center`}>
                {card.cardTypeName === "Lite" ? (
                  <>
                    {cartItems[0]?.designs?.map((item) => {
                      return (
                        <div
                          key={item.designUuid}
                          className={`w-4 h-4 shadow-inner   rounded-full cursor-pointer ${
                            card.designUuid === item.designUuid
                              ? "scale-125 border border-black p-px"
                              : ""
                          } `}
                          onClick={() => {
                            setSelectedColorLite(item.designUuid);
                            handleDesignUuid(card.key, item.designUuid);
                          }}
                        >
                          <div
                            className={`w-full h-full rounded-full bg-[${item.hexCode}]`}
                          ></div>
                        </div>
                      );
                    })}
                  </>
                ) : card.cardTypeName === "Elevate" ? (
                  <div className=" flex flex-wrap  gap-x-4 gap-y-2 w-[75%]">
                    {cartItems[1]?.designs?.map((item) => {
                      return (
                        <div
                          key={item.designUuid}
                          className={`w-4 h-4 shadow-inner gap-y-8  rounded-full cursor-pointer ${
                            card.designUuid === item.designUuid
                              ? "scale-125 border border-black p-px"
                              : ""
                          } `}
                          onClick={() => {
                            setSelectedColorElevate(item.designUuid);
                            handleDesignUuid(card.key, item.designUuid);
                          }}
                        >
                          <Image
                            src={`/assets/images/radio_buttons/elevate/${item.designUuid}.png`}
                            alt="radio button"
                            height={25}
                            width={25}
                            quality={100}
                            className="rounded-full"
                          />
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="w-[325px] sm:w-[350px] xl:w-[390px]">
            <div className="flex mt-6 lg:mt-0 gap-5  items-center">
              <h2 className="text-[20px] ">{card.cardTypeName}</h2>
              <p className="lg:hidden text-[20px] text-[#F66F6F]">
                ₹ {card.amount}
              </p>
            </div>
            <div className="flex mt-6">
              <input
                className={`border outline-none ${
                  checkFormValid &&
                  card?.companyName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                } w-[220px] h-10 rounded-xl pl-4`}
                type="text"
                name="companyName"
                value={card.companyName}
                onChange={handleCompanyNameChange}
                placeholder="Company Name"
              />
              {index == 0 && totalQuantity > 1 && (
                <button
                  className="bg-black h-10 w-[98px] lg:w-[130px] flex justify-center items-center text-white rounded-lg ml-4 text-xs font-bold"
                  onClick={() => {
                    handleApplyToAll(0, card.companyName);
                    toast.success("Applied to all successfully");
                  }}
                >
                  APPLY TO ALL
                </button>
              )}
            </div>
            {checkFormValid && card?.companyName?.length == 0 && (
              <div className="">
                <p className="text-xs text-red-500 font-bold py-1 px-2">
                  Required *
                </p>
              </div>
            )}
            <div>
              <div className="flex mt-8">
                {card.fileName ? ( // Display the file name if it exists
                  <label>
                    {" "}
                    <p
                      className="py-2 flex cursor-pointer justify-between border w-[220px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-2 text-xs overflow-hidden"
                      onClick={handleLabelClick}
                    >
                      <p>{card.fileName} </p>{" "}
                      <span>
                        {" "}
                        <Image
                          src={"/assets/images/uploadLogo.png"}
                          height={20}
                          width={20}
                          alt="icon"
                          style={{ objectFit: "contain" }}
                        />
                      </span>
                    </p>
                  </label>
                ) : (
                  <label
                    htmlFor="fileInput"
                    className={`cursor-pointer py-2 flex justify-between border ${
                      checkFormValid &&
                      card?.fileName?.length == 0 &&
                      "border-2 border-red-400 "
                    }  w-[220px] h-10 rounded-xl font-semibold pt-2 px-4 `}
                    onClick={handleLabelClick}
                  >
                    Upload Logo
                    <Image
                      src={"/assets/images/uploadLogo.png"}
                      height={40}
                      width={40}
                      alt="icon"
                      style={{ objectFit: "contain" }}
                    />
                  </label>
                )}
                <input
                  id="companyLogo"
                  type="file"
                  accept=".png, .jpeg, .jpg"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  name="companyLogo"
                  style={{ display: "none" }}
                />
                {index === 0 && totalQuantity > 1 && (
                  <button
                    className="bg-black h-10 w-[98px] lg:w-[130px] flex justify-center items-center text-white rounded-lg ml-4 text-xs font-bold"
                    onClick={() => {
                      toast.success("Applied to all successfully");
                      handleApplyToAll(1, card.companyLogo, card.fileName);
                    }}
                  >
                    APPLY TO ALL
                  </button>
                )}
              </div>
              {checkFormValid && card?.fileName?.length == 0 && (
                <div className="">
                  <p className="text-xs text-red-500 font-bold py-1 px-2">
                    Please Upload Company logo *
                  </p>
                </div>
              )}
            </div>
            <div className="mt-8">
              <input
                className={`border outline-none ${
                  checkFormValid &&
                  card?.fullName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                } w-[220px] lg:mb-0 mb-[30px] h-10  rounded-xl pl-4`}
                type="text"
                value={card.fullName}
                name="fullName"
                onChange={handleFullNameChange}
                placeholder="Full Name"
              />
            </div>
            {checkFormValid && card?.fullName?.length == 0 && (
              <div className="">
                <p className="text-xs text-red-500 font-bold py-1 px-2">
                  Required *
                </p>
              </div>
            )}
            <div className="mt-6 hidden lg:block">
              <h3 className="text-[20px] text-[#F66F6F] font-bold">
                ₹ {card.amount}
              </h3>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
}

export default DetailsInput;
