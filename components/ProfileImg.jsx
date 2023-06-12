import Image from "next/image";
import React from "react";

const ProfileImg = ({ profileimg }) => {
  return (
    <div className="">
      <div className="flex justify-center h-[100px] w-[100px] ">
        <Image
          className="rounded-[50px]"
          src={profileimg}
          width={100}
          height={100}
          alt="Profile Image"
        />
      </div>
    </div>
  );
};

export default ProfileImg;
