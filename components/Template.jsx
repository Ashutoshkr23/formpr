import React from "react";
import ProfileImg from "./ProfileImg";
import Image from "next/image";
import BioTemp from "./BioTemp";
import Socialpg from "./Socialpg";
import { saveAs } from "file-saver"; // Import the file-saver library

const Template = ({
  fname,
  type,
  border,
  lname,
  btntext,
  profileimg,
  designation,
  bio,
  company,
  website,
  mobile,
  gradient1,
  gradient2,
  text1,
  text2,
  text3,
  btn,
  loop,
  gmail,
  instaLink,
  watspLink,
  linkedLink,
  profile,
  faceLink,
}) => {
  const downloadVCard = () => {
    // Create a vCard string from the contact data
    const vCard = `BEGIN:VCARD
FN:${fname} ${lname}
TEL;TYPE=CELL:${mobile}
EMAIL;: ${gmail}
URL:${website}
END:VCARD`;

    // Convert the vCard string to a Blob object
    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });

    // Save the Blob as a file using the file-saver library
    saveAs(blob, "hello.vcf");
  };

  return (
    <div className="flex justify-center max-w-[375px]">
      <div
        className={`${gradient1} max-w-[375px] h-[812px] rounded-[30px] pt-[161px]  `}
      >
        <div
          className={`${gradient2} max-w-[375px] relative px-6  mx-auto h-[651px]   rounded-[20px] `}
        >
          <div className="-top-[79px] inset-0 mx-auto absolute h-[100px] w-[100px] ">
            <ProfileImg profileimg={profile} />
          </div>

          <div className="flex justify-center pt-[40px] font-semibold text-[20px] tracking-[-0.5px] ">
            <input
              className={`text-center bg-transparent ${text1} `}
              type="text"
              value={fname || lname ? `${fname} ${lname}` : "Andrew Darren"}
              placeholder={fname || lname ? undefined : "Andrew Darren"}
            //   value={inputValue}
            //   onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-[11px] font-semibold text-[16px]">
            <input
              className={`text-center bg-transparent ${text2} text-[#7D9695] `}
              type="text"
              placeholder="Design Lead"
              value={designation}
            //   onChange={handleChange}
            />
          </div>
          <div>
            <BioTemp
              bio={bio}
              border={border}
              text1={text1}
              text2={text2}
              company={company}
              mobile={mobile}
              website={website}
            />
          </div>

          <div className="">
            <Socialpg
              text1={text1}
              type={type}
              instaLink={instaLink}
              watspLink={watspLink}
              linkedLink={linkedLink}
              faceLink={faceLink}
            />
          </div>

          <div className="">
            <button
              className={`${btn} border-2  text-[20px] ${btntext} text-black bg-white  font-extrabold h-[50px] w-[304px] rounded-[14px] mt-7`}
              onClick={downloadVCard}
            >
              SAVE CONTACT
            </button>
          </div>

          <div
            className={`text-[10px] flex justify-center mt-7 pb-[29px] ${text1}`}
          >
            made with love by
            <img
              className="h-[27px] w-[27px] pl-1"
              src="/assets/images/display/loops.png"
              alt="logo"
            />
          </div>
          <div className="flex mx-auto mt-[-12px] rounded-[31px]  h-[3px] w-[133px] bg-[#A8A8A8]"></div>
        </div>
      </div>
    </div>
  );
};

export default Template;
