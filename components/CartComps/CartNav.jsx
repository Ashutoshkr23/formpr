import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const CartNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [date, setDate] = useState();
  const router = useRouter();

  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleSignOut() {
    signOut();
  }
  return (
    <div className="md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto ">
      <div className="hidden lg:block">
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
      <div className="lg:hidden ">
        <nav className="bg-dark pl-2 pr-6 sm:px-4 py-2.5  w-full z-50 top-0 left-0">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
              <Image
                src={"/assets/images/landing/loops.png"}
                alt="loop"
                width={50}
                height={22}
              />
            </a>
            <div className="flex ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="mobileNavbar inline-flex relative z-[100] items-center "
              >
                <div className="fixed  h-3.5 w-5">
                  <div
                    className={` h-0.5 bg-black w-5 origin-top-left ease-in duration-200 rounded-md ${
                      isOpen ? "rotate-45 translate-x-px" : "rotate-0"
                    }`}
                  />
                  <div
                    className={` h-0.5 w-5 bg-black ease-in duration-200 rounded-md mt-1 ${
                      isOpen ? "hidden" : "block"
                    }`}
                  />
                  <div
                    className={` h-0.5 w-5 bg-black ease-in duration-200  rounded-md mt-1  ${
                      isOpen ? "-rotate-45 -translate-x-0.5 " : "rotate-0 "
                    }`}
                  />
                </div>
              </button>
              {isOpen && (
                <AnimatePresence>
                  <motion.div
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    viewport={{ once: false }}
                    className="fixed ease-in duration-800  w-full h-screen top-0 right-0   shadow-lg bg-white text-black z-50"
                  >
                    <div className=" w-full h-full bg-white">
                      <div className="flex flex-col h-full  content-between">
                        <div className="flex flex-col mx-auto mt-20 text-center font-oswald tracking-light w-10/12 z-20">
                          <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="nav-link-container  py-2  border-b-2 border-white "
                          >
                            <a href="#" className="nav-link ">
                              Manage cards
                            </a>
                          </div>
                          <div
                            onClick={() => setIsOpen(!isOpen)}
                            className="nav-link-container py-4  border-b-2 border-white"
                          >
                            <a href="#" className="nav-link ">
                              Order history
                            </a>
                          </div>

                          <div>
                            <button
                              onClick={handleSignOut}
                              className="w-[140px] h-10 bg-black text-white text-sm mr-4 my-auto font-bold rounded-[10px] text-center"
                            >
                              LOG OUT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CartNav;