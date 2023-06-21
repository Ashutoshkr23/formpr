import Image from "next/image";
import React from "react";


const ProfileImg = ({ profileImg }) => {

    return (
        <div className="">
            <div className="flex justify-center h-[60px] w-[60px] sm:h-[100px] sm:w-[100px] ">
                <img
                    className="rounded-[50px] h-[60px] w-[60px] sm:w-[100px] sm:h-[100px]"
                    src={profileImg}
                    alt="Profile Image"
                />
            </div>
        </div>
    );
};

export default ProfileImg;