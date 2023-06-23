import React from "react";
import Image from "next/image";
import Link from "next/link";

const BioTemp = ({ bio, border, company, website, mobile, text1, text2 }) => {
  const handlePhoneNumberClick = () => {
    window.open(`tel:${mobile}`);
  };
  return (
    <div className={`${border} rounded-[10px]  pt-2 pb-2 px-2  sm:px-4 mx-2 `}>
      <div className={`text-[12px] ${text2} text-[#7D9695] `}>Bio</div>
      <div className="pt-2 sm:pt-4 text-[12px]">
        <textarea
          className={`bg-transparent w-full resize-none ${text1}`}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis"
          value={bio}
          readOnly={true}
          //   onChange={handleChange}
        />
      </div>
      <div className="pt-4 sm:pt-8 grid grid-cols-2 gap-y-4">
        <div className="flex items-center">
          <Image
            src={"/assets/images/display/log.png"}
            alt="log"
            width={24}
            height={20}
          />

          <p
            className={`text-[10px] ml-1.5 ${text2} tracking-[-0.5px] text-[#7D9695] `}
          >
            {company ? company : "Lorem Ipsum"}
          </p>
        </div>
        <div
          className="flex ml-6 sm:ml-[50px] items-center "
          onClick={handlePhoneNumberClick}
        >
          <Image
            src={"/assets/images/display/phone.png"}
            alt="phone"
            width={22}
            height={22}
          />
          <p className="text-[10px] ml-1.5 tracking-[-0.5px]">
            <input
              className={`bg-transparent w-16 ${text2} text-[#7D9695] `}
              type="text"
              placeholder="+919833XXXXXX"
              value={mobile}
              readOnly={true}
              //   onChange={handleChange}
            />
          </p>
        </div>
        <div className="flex w-[200px] lg:w-72 items-center">
          <div className="h-[22px] w-[24px] flex justify-center">
            <Image
              src={"/assets/images/display/website.png"}
              alt="website"
              width={22}
              height={22}
            />
          </div>
          <Link href={`${website}`}>
            <p className="ml-1.5 tracking-[-0.5px]">
              <input
                className={`bg-transparent ${text2} text-[#7D9695] cursor-pointer w-[200px] ${
                  website.length > 15 ? "text-[8px]" : "text-[10px]"
                }`}
                type="text"
                placeholder=" www.LoremIpsum.com"
                value={website.replace(/(https?:\/\/)?(www\.)?/, "")}
                readOnly={true}
              />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioTemp;
