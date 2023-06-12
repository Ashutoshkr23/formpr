import React from "react";
import Image from "next/image";

const BioTemp = ({ bio, border, company, website, mobile, text1, text2 }) => {
  return (
    <div className={`${border} rounded-[10px]  p-5 mt-3`}>
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
          <Image src={"/log.png"} alt="log" width={27} height={22} />
          <p className="text-[10px] ml-1.5 tracking-[-0.5px] ">
            <input
              className={`bg-transparent ${text2} text-[#7D9695] `}
              type="text"
              placeholder="company Name"
              value={company}
              readOnly={true}
              //   onChange={handleChange}
            />
          </p>
        </div>
        <div className="flex ml-[40px] ">
          <Image src={"/phone.png"} alt="phone" width={22} height={22} />
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
        <div className="flex">
          <Image src={"/website.png"} alt="website" width={22} height={22} />
          <p className="text-[10px] ml-1.5 tracking-[-0.5px]">
            <input
              className={`bg-transparent ${text2} text-[#7D9695] `}
              type="text"
              placeholder=" www.alphamintlabs.com"
              value={website}
              readOnly={true}
              //   onChange={handleChange}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioTemp;
