import Image from "next/image";
import React from "react";

const ProfileImg = ({ profileImg }) => {
  return (
    <div className="">
      <div className="flex justify-center h-[100px] w-[100px] ">
        <img
          className="rounded-[50px] w-[100px] h-[100px]"
          src={profileImg}
          alt="Profile Image"
        />
      </div>
    </div>
  );
};

export default ProfileImg;
