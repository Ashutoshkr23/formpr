import React from "react";
import Image from "next/image";
import Link from "next/link";

const BioTemp = ({ bio, border, company, website, mobile, text1, text2 }) => {
  return (
    <div className={`${border} rounded-[10px]  pt-2 pb-2 `}>
      <div className={`text-[12px] ${text2} text-[#7D9695] `}>Bio</div>
      <div className="pt-[11px] text-[12px]">
        <textarea
          className={`bg-transparent w-full resize-none ${text1}`}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis eleifend arcu in fringilla. "
          value={bio}
          readOnly={true}
          //   onChange={handleChange}
        />
      </div>
      <div className="pt-[30px] grid grid-cols-2 gap-y-4">
        <div className="flex">
          <Image
            src={"/assets/images/display/log.png"}
            alt="log"
            width={27}
            height={22}
          />

          <p className="text-[8px] ml-[2px] tracking-[-0.5px] text-[#7D9695]  ">
            {company}
            {/* <input
              className={`bg-transparent ${text2} text-[#7D9695] w-[120px]  `}
              type="text"
              placeholder="company Name"
              value={company}
              readOnly={true}
              //   onChange={handleChange}
            /> */}
          </p>
        </div>
        <div className="flex ml-[50px] ">
          <Image
            src={"/assets/images/display/phone.png"}
            alt="phone"
            width={22}
            height={22}
          />
          <p className="text-[10px] ml-[1px] tracking-[-0.5px]">
            <input
              className={`bg-transparent ${text2} text-[#7D9695] `}
              type="text"
              placeholder="+919833XXXXXX"
              value={mobile}
              readOnly={true}
              //   onChange={handleChange}
            />
          </p>
        </div>
        <div className="flex pt-1">
          <Image
            src={"/assets/images/display/website.png"}
            alt="website"
            width={22}
            height={22}
          />
          <Link href={`${website}`}>
            <p className="text-[10px] ml-1.5 tracking-[-0.5px]">
              <input
                className={`bg-transparent ${text2} text-[#7D9695] cursor-pointer w-[200px] `}
                type="text"
                placeholder=" www.alphamintlabs.com"
                value={website}
                readOnly={true}
                //   onChange={handleChange}
              />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioTemp;
