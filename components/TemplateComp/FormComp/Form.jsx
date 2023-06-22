import Template from "../Template";
import React, { useState, useEffect, useContext } from "react";
import themes from "../Themes";
import ChooseTemplates from "./ChooseTemplates";
import Details from "./Details";
import Socials from "./Socials";
import axios from "axios";
import Cover from "./Cover";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import ProfileCompleted from "./ProfileCompleted";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, LoopMaven } from "@/components";

function Form({ cuuid }) {
  const [contactData, setContactData] = useState(null);
  const [name, setName] = useState("");
  const { userProfile } = useContext(CartContext);
  const [showProfileComplete, setShowProfileComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedtemplate, setSelectedTemplate] = useState("0");
  const [cover, setCover] = useState(themes[0].gradient1);
  const [profileImg, setProfileImg] = useState("");
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [inputValues, setInputValues] = useState({
    whatsapp: "",
    mail: "",
    linkedin: "",
    instagram: "",
    facebook: "",
    youtube: "",
    twitter: "",
    behance: "",
    reddit: "",
  });

  useEffect(() => {
    async function fetchCardData(cuuid) {
      try {
        const res = await fetch(`/api/handleFormData?cuuid=${cuuid}`);
        const data = await res.json();
        if (res.ok) {
          return data.card;
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.error("Error fetching card data:", error);
        throw error;
      }
    }
    fetchCardData(cuuid)
      .then((cardData) => {
        // Access the fetched card data here
        console.log(cardData);
        setContactData(cardData);
        setName(cardData.name);
        setProfileImg(cardData.profileImg);
        setCover(cardData.cover);
        setSelectedTemplate(cardData.selectedTemplate);
        setBio(cardData.bio);
        setRole(cardData.role);
        setCompany(cardData.company);
        setCompanyLink(cardData.companylink);
        setAddress(cardData.adress);
        setPhoneNumber(cardData.mobileNumber);

        setInputValues({
          whatsapp: cardData.whatsappNumber || "",
          mail: cardData.mail || "",
          linkedin: cardData.linkedin || "",
          instagram: cardData.instagram || "",
          facebook: cardData.facebook || "",
          youtube: cardData.youtube || "",
          twitter: cardData.twitter || "",
          behance: cardData.behance || "",
          reddit: cardData.reddit || "",
        });
      })
      .catch((error) => {
        // Handle any errors that occurred during fetching
        console.error(error);
      });
  }, [cuuid]);

  console.log(contactData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const [visibleInputs, setVisibleInputs] = useState([
    "whatsapp",
    "mail",
    "linkedin",
  ]);

  // Function to update the visible inputs
  const handleToggleInput = (inputName) => {
    if (visibleInputs.includes(inputName)) {
      setVisibleInputs(visibleInputs.filter((name) => name !== inputName));
    } else {
      if (visibleInputs.length < 6) {
        setVisibleInputs([...visibleInputs, inputName]);
      }
    }
  };

  useEffect(() => {
    if (selectedtemplate === "0") {
      setCover(themes[0].gradient1);
    } else if (selectedtemplate === "1") {
      setCover(themes[1].gradient1);
    } else if (selectedtemplate === "2") {
      setCover(themes[2].gradient1);
    } else if (selectedtemplate === "3") {
      setCover(themes[3].gradient1);
    } else {
      setCover(themes[0].gradient1); // Set a default value if needed
    }
  }, [selectedtemplate]);

  const handleSaveClick = () => {
    // console.log(name, role, companyLink, bio, address, phoneNumber, selectedtemplate);
  };

  const handleCompanyChange = (value) => {
    setCompany(value);
  };

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleRoleChange = (value) => {
    setRole(value);
  };

  const handleCompanyLinkChange = (value) => {
    setCompanyLink(value);
  };

  const handleBioChange = (value) => {
    setBio(value);
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  useEffect(() => {
    const calculateProgress = () => {
      let progress = 0;
      const emptyFields = [];

      // Check selectedtemplate, cover, profileImg, and bio
      if (selectedtemplate) progress += 10;
      else emptyFields.push("selectedtemplate");
      if (cover) progress += 10;
      else emptyFields.push("cover");
      if (profileImg) progress += 10;
      else emptyFields.push("profileImg");
      if (bio) progress += 10;
      else emptyFields.push("bio");

      // Check name, role, company, companyLink, address, and phoneNumber
      if (name) progress += 5;
      else emptyFields.push("name");
      if (role) progress += 5;
      else emptyFields.push("role");
      if (company) progress += 5;
      else emptyFields.push("company");
      if (companyLink) progress += 5;
      else emptyFields.push("companyLink");
      if (address) progress += 5;
      else emptyFields.push("address");
      if (phoneNumber) progress += 5;
      else emptyFields.push("phoneNumber");
      if (inputValues.mail) progress += 30;
      else emptyFields.push("mail");

      return { progress, emptyFields };
    };

    const { progress, emptyFields } = calculateProgress();
    setProgress(progress);

    if (emptyFields.length > 0) {
      // Display toast message or perform other actions
      const message = `Please fill in the following details: ${emptyFields.join(
        ", "
      )}`;
      setErrorMessage(message);
      // Display the message using a toast library or any other method
      console.log(message);
    }
  }, [
    selectedtemplate,
    cover,
    profileImg,
    bio,
    name,
    role,
    company,
    companyLink,
    address,
    phoneNumber,
    inputValues,
  ]);

  const handleClick = async () => {
    if (progress !== 100) {
      toast.error(errorMessage); // Display error toast message
      return;
    }
    try {
      const data = {
        company: company,
        name: name,
        role: role,
        companylink: companyLink,
        bio: bio,
        address: address,
        mobileNumber: phoneNumber,
        adress: address,
        selectedTemplate: selectedtemplate,
        profileImg: profileImg,
        cover: cover,
        whatsappNumber: inputValues.whatsapp,
        mail: inputValues.mail,
        linkedin: inputValues.linkedin,
        instagram: inputValues.instagram,
        twitter: inputValues.twitter,
        youtube: inputValues.youtube,
        facebook: inputValues.facebook,
        behance: inputValues.behance,
        reddit: inputValues.reddit,
        puuid: userProfile.puuid,
        cuuid: cuuid,
      };
      // console.log(data)

      const response = await axios.post("/api/handleFormData", data);
      if (response.status === 200 && response.data.error === false) {
        setShowProfileComplete(true); // Update the visibility state variable
      }

      // console.log(response.data);
      // Handle response
      // ...
    } catch (error) {
      console.error(error);
    }
  };

  const innerDivStyle = {
    height: "100%",
    width: `${progress}%`,
    background: "linear-gradient(to right, #96FFAD, #66D3E1)",
  };
  return (
    <div className="  ">
      {showProfileComplete && <ProfileCompleted />}
      <div className="max-w-[1208px] px-2 sm:px-8 md:px-8 lg:px-4 xl:px-0 mx-auto relative">
        <ToastContainer />
        <div
          className={`pt-10  ${
            showProfileComplete
              ? "bg-opacity-75 backdrop-filter backdrop-blur-sm"
              : ""
          }`}
        >
          <div className="max-w-[1208px] mb-7 mx-auto flex lg:justify-between justify-center items-center ">
            <div className="bg-white rounded-xl w-full h-[40px] flex  lg:justify-between   cursor-pointer shadow-xl ring-offset-1  ring-offset-transparent ring-[#001926]">
              <div
                className={`rounded-lg  font-bold px-2 lg:px-10 flex gap-4 lg:gap-9 flex-grow border-2 border-slate-700 text-black  justify-center items-center `}
              >
                <p className="text-center w-52 sm:w-64  text-xs md:text-sm">
                  DETAILS AND DESIGN
                </p>
                <div className="h-2 w-full bg-[#DFDFDF]">
                  <div style={innerDivStyle}></div>
                </div>
                <p> {progress}% </p>
              </div>
            </div>
            <div className="hidden lg:block pl-5">
              <button
                className="lg:w-[350px] xl:w-[390px] shadow-xl h-[40px] bg-black text-white rounded-[10px]"
                onClick={handleClick}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col-reverse items-center lg:items-start lg:flex-row gap-5">
          <div className="flex flex-grow flex-col ">
            <ChooseTemplates
              selectedTemplate={selectedtemplate}
              setSelectedTemplate={setSelectedTemplate}
            />
            <Cover cover={cover} setCover={setCover} />
            <Details
              name={name}
              role={role}
              company={company}
              address={address}
              bio={bio}
              phoneNumber={phoneNumber}
              contactData={contactData}
              profileImg={profileImg}
              companyLink={companyLink}
              setProfileImg={setProfileImg}
              onCompanyChange={handleCompanyChange}
              onNameChange={handleNameChange}
              onRoleChange={handleRoleChange}
              onCompanyLinkChange={handleCompanyLinkChange}
              onBioChange={handleBioChange}
              onAddressChange={handleAddressChange}
              onPhoneNumberChange={handlePhoneNumberChange}
            />
            <Socials
              inputValues={inputValues}
              handleInputChange={handleInputChange}
              visibleInputs={visibleInputs}
              setVisibleInputs={setVisibleInputs}
              onToggleInput={handleToggleInput}
            />
          </div>
          <div className="w-80 lg:sticky lg:top-10 sm:w-[350px]  xl:w-[390px]">
            <div className=" sm:h-[820px] mb-5">
              {selectedtemplate && (
                <Template
                  gradient1={cover}
                  gradient2={themes[selectedtemplate].gradient2}
                  text1={themes[selectedtemplate].text1}
                  text2={themes[selectedtemplate].text2}
                  text3={themes[selectedtemplate].text3}
                  btn={themes[selectedtemplate].btn}
                  btntext={themes[selectedtemplate].btntext}
                  type={themes[selectedtemplate].type}
                  loop={themes[selectedtemplate].loop}
                  border={themes[selectedtemplate].border}
                  inputValues={inputValues}
                  visibleInputs={visibleInputs}
                  profileImg={
                    profileImg || "/assets/images/templateimg/andrew.png"
                  }
                  company={company}
                  bio={bio}
                  website={companyLink}
                  mobile={phoneNumber}
                  fname={name}
                  designation={role}
                  companyLink={companyLink}
                />
              )}
            </div>
          </div>
        </div>
        <div className="lg:hidden  sm:pl-5 mb-10">
          <button
            className="w-full shadow-xl h-[40px] bg-black text-white rounded-[10px]"
            onClick={handleClick}
          >
            SAVE
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
