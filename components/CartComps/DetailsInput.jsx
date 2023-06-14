import React, { useContext, useRef, useState } from "react";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SketchPicker } from "react-color";
import { CompactPicker } from "react-color";

function DetailsInput({ card, index, checkFormValid }) {
  // console.log(card, "Card")
  const [selectedDiv, setSelectedDiv] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);
  const { userProfile, handleApplyToAll, handleName, handleRemoveCardArr } =
    useContext(CartContext);
  const [design, setDesign] = useState(1);
  const [font, setFont] = useState("white");

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
    console.log(selectedDiv);
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
    console.log(event.target);
    handleName(event.target.name, card.key, event.target.value);
  };

  const handleLabelClick = () => {
    fileInputRef.current.click();
  };

  const handleAwsUpload = async (image) => {
    console.log("runned 3")

    const formData = new FormData();
    formData.append("companyLogo", image);
    formData.append("puuid", userProfile.puuid);

    const uploadImage = await axios.post("/api/uploadImageAws", formData);
    console.log("runned 4")
    console.log(uploadImage, "uploadImageAws");
    if (uploadImage.status == 200 && !uploadImage.data.error) {
      const awsLink = uploadImage.data.result;
      handleName("companyLogo", card.key, awsLink, image.name);
      toast.success("Logo Uploaded Successfully !");
    }
  };

  const handleFileChange = (event) => {
    console.log("runned 1")
    const file = event.target.files[0];
    const fileSizeInMB = file?.size / (1024 * 1024);
    console.log("fileSizeInMB: " + fileSizeInMB)
    if (fileSizeInMB > 5) {
      setErrorMessage("File size exceeds the limit of 5MB.");
    } else {
      setErrorMessage("");
      console.log("runned 2")

      handleAwsUpload(file);
      // handleName(event.target.name, card.key, file);
    }
  };

  const [color, setColor] = useState("#000000"); // Set initial color

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex);
  };
  return (
    <div className="sm:px-8 relative md:px-8  lg:px-4 xl:px-0 max-w-[1208px] mx-auto my-6">
      {card.cardTypeUuid == "7031e440-bc0b-4b39-8b8e-2afe3360d744" ?
        <div className="mt-4 px-4 h-[373px] bg-white rounded-xl drop-shadow-white flex items-center justify-between">
          {/* supreme */}
          <div
            className="absolute cursor-pointer left-0 -top-3 rounded-md flex justify-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] hover:text-black  items-center bg-black text-[10px] font-bold text-white h-6 w-20"
            onClick={() => handleRemoveCardArr(card.key)}
          >
            REMOVE <span className="text-base font-medium pl-2">X</span>
          </div>

          <div className="flex  gap-[42px] ">
            <div className=" flex flex-col gap-4">
              <p className="text-sm">Abstract Design</p>
              <div className="flex gap-2">
                <Image
                  className={``}
                  src={"/assets/images/storeImages/Supreme/Abstract/Design1.png"}
                  height={55}
                  width={55}
                  alt="icon"
                  onClick={() => setDesign(1)}
                />
                <Image
                  src={"/assets/images/storeImages/Supreme/Abstract/Design2.png"}
                  height={55}
                  width={55}
                  alt="icon"
                  onClick={() => setDesign(2)}
                />
              </div>
              <div className="flex  gap-2">
                <Image
                  src={"/assets/images/storeImages/Supreme/Abstract/Design3.png"}
                  height={55}
                  width={55}
                  alt="icon"
                  onClick={() => setDesign(3)}
                />
                <Image
                  src={"/assets/images/storeImages/Supreme/Abstract/Design4.png"}
                  height={55}
                  width={55}
                  alt="icon"
                  onClick={() => setDesign(4)}
                />
              </div>
              <div className="flex  gap-2">
                <Image
                  src={"/assets/images/storeImages/Supreme/Abstract/Design5.png"}
                  height={55}
                  width={55}
                  alt="icon"
                  onClick={() => setDesign(5)}
                />
                <Image
                  src={"/assets/images/storeImages/Supreme/Abstract/Design6.png"}
                  height={55}
                  width={55}
                  alt="icon"
                  onClick={() => setDesign(6)}
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-6">
                <div
                  className="bg-black drop-shadow-white rounded-2xl relative w-full "
                  style={{ width: 400, height: 250 }}
                >
                  <Image
                    className="absolute top-5 right-8 z-10"
                    src={"/assets/images/storeImages/Supreme/loop.png"}
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
                  <Image
                    className="absolute top-0 left-0"
                    src={`/assets/images/storeImages/Supreme/Abstract/Des${design}.png`}
                    height={250}
                    width={400}
                    alt="icon"
                  />
                </div>
                <div className="flex justify-between ">
                  <div>color:</div>
                  <div className="flex gap-1 items-center">
                    <p>font color:</p>
                    <div
                      className={`rounded-full bg-[#ECECEC] w-5 h-5 ${font === "white" ? "scale-110 border-2 border-black " : ""
                        }
                    `}
                      onClick={() => setFont("white")}
                    ></div>
                    <div
                      className={`rounded-full bg-[#000000] w-5 h-5 ${font === "black"
                        ? "scale-110 border-2 border-yellow-500 "
                        : ""
                        }`}
                      onClick={() => setFont("black")}
                    ></div>
                  </div>
                </div>
              </div>
              <div className=" ml-4">
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
          <div className="w-[350px] xl:w-[390px]">
            <h2>{card.cardTypeName}</h2>
            <div className="flex mt-8">
              <input
                className={`border outline-none ${checkFormValid &&
                  card?.companyName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                  } w-[180px] xl:w-[220px] h-10 rounded-xl pl-4`}
                type="text"
                name="companyName"
                value={card.companyName}
                onChange={handleCompanyNameChange}
                placeholder="Company Name"
              />
              {index == 0 && (
                <button
                  className="bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4 text-xs font-bold"
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
              <div className="flex mt-4">
                {card.fileName ? ( // Display the file name if it exists
                  <p className="py-2 flex justify-between border w-[180px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-4 text-xs overflow-hidden">
                    {card.fileName}
                  </p>
                ) : (
                  <label
                    htmlFor="fileInput"
                    className={`cursor-pointer py-2 flex justify-between border ${checkFormValid &&
                      card?.fileName?.length == 0 &&
                      "border-2 border-red-400 "
                      }  w-[180px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-4 `}
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
                {index === 0 && (
                  <button
                    className="bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4 text-xs font-bold"
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
                className={`border outline-none mt-4 ${checkFormValid &&
                  card?.fullName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                  } w-[180px] xl:w-[220px] h-10 rounded-xl pl-4`}
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
          </div>
        </div> :
        <div className=" h-[373px] bg-white rounded-xl drop-shadow-white flex items-center justify-between">
          <div
            className="absolute cursor-pointer left-0 -top-3 rounded-md flex justify-center hover:bg-gradient-to-br from-[#66D3E1] to-[#96FFAD] hover:text-black  items-center bg-black text-[10px] font-bold text-white h-6 w-20"
            onClick={() => handleRemoveCardArr(card.key)}
          >
            REMOVE <span className="text-base font-medium pl-2">X</span>
          </div>

          <div className="flex flex-col items-center flex-grow ">
            <div className="flex">
              <div style={{ width: 400, height: 250 }}>
                <div
                  className="bg-[#66D3E1] drop-shadow-white rounded-2xl relative w-full "
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
              <div className=" ml-4">
                <Image
                  src={"/assets/images/cart-images/flipImage.png"}
                  className=""
                  alt="flip"
                  height={36}
                  width={36}
                />
              </div>
            </div>
            <div className="flex mt-6  gap-4">
              <p className="text-xs">colors</p>
              <div id="container" className="flex space-x-2">
                <div
                  className={`rounded-full bg-[#FFF490] w-5 h-5`}
                  style={selectedDiv === 0 ? selectedDivStyle : divStyle}
                  onClick={() => handleDivClick(0)}
                ></div>
                <div
                  className="rounded-full bg-[#96FFAD] w-5 h-5"
                  style={selectedDiv === 1 ? selectedDivStyle : divStyle}
                  onClick={() => handleDivClick(1)}
                ></div>
                <div
                  className="rounded-full bg-[#66D3E1] w-5 h-5"
                  style={selectedDiv === 2 ? selectedDivStyle : divStyle}
                  onClick={() => handleDivClick(2)}
                ></div>
                <div
                  className="rounded-full bg-[#F66F6F] w-5 h-5"
                  style={selectedDiv === 3 ? selectedDivStyle : divStyle}
                  onClick={() => handleDivClick(3)}
                ></div>
                <div
                  className="rounded-full bg-[#ECECEC] w-5 h-5"
                  style={selectedDiv === 4 ? selectedDivStyle : divStyle}
                  onClick={() => handleDivClick(4)}
                ></div>
                <div
                  className="rounded-full bg-[#323232] w-5 h-5"
                  style={selectedDiv === 5 ? selectedDivStyle : divStyle}
                  onClick={() => handleDivClick(5)}
                ></div>
              </div>
            </div>
          </div>
          <div className="w-[350px] xl:w-[390px]">
            <h2>{card.cardTypeName}</h2>
            <div className="flex mt-8">
              <input
                className={`border outline-none ${checkFormValid &&
                  card?.companyName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                  } w-[180px] xl:w-[220px] h-10 rounded-xl pl-4`}
                type="text"
                name="companyName"
                value={card.companyName}
                onChange={handleCompanyNameChange}
                placeholder="Company Name"
              />
              {index == 0 && (
                <button
                  className="bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4 text-xs font-bold"
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
              <div className="flex mt-4">
                {card.fileName ? ( // Display the file name if it exists
                  <p className="py-2 flex justify-between border w-[180px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-4 text-xs overflow-hidden">
                    {card.fileName}
                  </p>
                ) : (
                  <label
                    htmlFor="fileInput"
                    className={`cursor-pointer py-2 flex justify-between border ${checkFormValid &&
                      card?.fileName?.length == 0 &&
                      "border-2 border-red-400 "
                      }  w-[180px] xl:w-[220px] h-10 rounded-xl font-semibold pt-2 px-4 `}
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
                {index === 0 && (
                  <button
                    className="bg-black h-10 w-[130px] flex justify-center items-center text-white rounded-lg ml-4 text-xs font-bold"
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
                className={`border outline-none mt-4 ${checkFormValid &&
                  card?.fullName?.length == 0 &&
                  "border-2 border-red-400 placeholder:text-red-400 placeholder:text-sm"
                  } w-[180px] xl:w-[220px] h-10 rounded-xl pl-4`}
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
          </div>
        </div>
      }




      <ToastContainer />
    </div>
  );
}

export default DetailsInput;
