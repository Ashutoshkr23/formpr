import React from "react";
import Image from "next/image";
import { signOut } from "next-auth/react";

const CartNav = () => {
  function handleSignOut() {
    signOut();
  }
  return (
    <div className="md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto ">
      <div className="hidden md:block">
        <div className=" mx-auto   my-auto h-20 flex  justify-between items-center">
          <div>
            <Image
              src={"/assets/images/landing/loop.svg"}
              alt="loop"
              width={74}
              height={32}
            />
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-sm leading-[17px]">Manage cards</p>
            </div>
            <div>
              <p className="text-sm leading-[17px]">Order history</p>
            </div>
          </div>
          <div className="flex gap-10 items-center">
            <div>
              <Image
                src={"/assets/images/cart-images/CartImage.png"}
                alt="loop"
                width={30}
                height={30}
              />
            </div>
            <button
              className=" h-10 w-[165px] text-[16px] font-bold text-white bg-black rounded-[10px]"
              onClick={handleSignOut}
            >
              LOG OUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartNav;
