import React, { useContext , useState } from 'react'
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ManageCardComps = () => {
  const { cartItems, userProfile, allCards } = useContext(CartContext);
  const [textToCopy, setTextToCopy] = useState('');



  const checkFontArray = (uuid) => {
    let tempArr = [
      "c5ca6b8b-1ac7-4d49-9a53-70526dfc2fd7",
      "d73f6121-6dc5-4170-8b3b-40a02835ddd1",
      "de47eb30-ec56-4d98-8069-50bcac1cfcc7",
      "f07f8b1f-3947-4121-a0eb-a60230f7a14b",
      "fbc8a97b-178e-4582-afaf-be755b69ca2b",
      "d886fa29-1622-4a08-ade2-f58fca1237d9",
      "44d97f3f-1393-48a3-95e2-2d4866a3a589",
      "7d223de6-dc2d-4caa-b111-63d5a4e219fa",
      "ef574738-8969-4e8a-a17e-51b8bc6e2eae"

    ]
    if (tempArr.includes(uuid)) {
      return true
    } else {
      return false
    }
  }

const handleClick = (card) => {
  navigator.clipboard.writeText("loopcard.club/details/" + (card));
  navigator.clipboard.writeText("loopcard.club/details/" + (card))
    .then(() => {
      toast.success('Text copied to clipboard!', {
        position: toast.POSITION.TOP_RIGHT
      });
    })
    .catch((error) => {
      toast.error('Failed to copy text to clipboard!', {
        position: toast.POSITION.TOP_RIGHT
      });
      console.error(error);
    });
};

  

  // console.log(allCards)
  return (
    <div className="w-full h-full px-36 py-4">
      <ToastContainer/>
      <h3 className="text-4xl font-bold  text-black mt-8 text-center xl:text-left">Manage Cards</h3>
      

      {allCards?.length > 0 ?
        (
          <div className="grid grid-cols-1  min-[1411px]:grid-cols-2 gap-12 mt-10">
            {allCards.map((card) => {
              let fontCode = card?.fontCode?.toLowerCase()
              let blackFont = false;
              if (fontCode == "#000000") {
                blackFont = true
              }

              return (
                <div  key={card.cuuid} className=' flex place-content-center min-[1411px]:block'>
                  <div
                    className="w-[566px] relative h-auto rounded-[10px] pl-4 bg-white flex justify-evenly "
                    style={{ boxShadow: "0px 10px 15px 0 rgba(0,25,38,0.25)" }}
                  >
                    <div className="flex justify-center items-center h-full">
                      {/* <Image
                      src={"/assets/images/johnDoe.png"}
                      height={110}
                      width={180}
                      alt="card"
                    /> */}
                      {card.cardType == "7031e440-bc0b-4b39-8b8e-2afe3360d744" ? (
                        <>
                          <div className="flex mt-8 lg:mt-0">
                            <div className={`card w-[180px] h-[110px]`}>
                              <div className={`card`}>
                                <div
                                  className={` card-inner`}
                                >
                                  <div className="card-front">
                                    <div
                                      className={` drop-shadow-white rounded-2xl relative lg:w-[180px] lg:h-[110px] w-full h-[172px]`}
                                      style={{
                                        backgroundColor: card.hexCode,
                                      }}
                                    >
                                      <Image
                                        className="absolute top-4 right-4 z-10"
                                        src={`/assets/images/${blackFont ? "loop-black.png" : "loop-white.png"}`}
                                        height={15}
                                        width={25}
                                        alt="icon"
                                      />
                                      <Image
                                        className="absolute bottom-3 right-4"
                                        src={
                                          "/assets/images/storeImages/Supreme/Qr.png"
                                        }
                                        height={20}
                                        width={20}
                                        alt="icon"
                                      />
                                      {card.abstract.abstractUsed && (
                                        <div>
                                          <div className="hidden lg:block">
                                            <Image
                                              className="absolute top-0 left-0"
                                              src={`/assets/images/abstracts/card/${card.abstract.abstractUuid}.png`}
                                              height={250}
                                              width={400}
                                              alt="icon"
                                            />
                                          </div>
                                          <div className="lg:hidden">
                                            <Image
                                              className="absolute top-0 left-0"
                                              src={`/assets/images/abstracts/card/${card.abstract.abstractUuid}.png`}
                                              height={172}
                                              width={300}
                                              alt="icon"
                                            />
                                          </div>
                                        </div>
                                      )}
                                      <div className="absolute bottom-3 left-3">
                                        <p
                                          className={`text-xs font-semibold ${blackFont ? "text-black" : "text-white"}`}
                                        >
                                          {card.cardName
                                            ? card.cardName
                                            : "John Doe"}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex mt-8 lg:mt-0">
                            <div className={`card w-[180px] h-[110px]`}>
                              <div className="card-inner lg:w-[180px] lg:h-[110px] w-[300px] h-[172px]">
                                <div className="card-front lg:w-[180px] lg:h-[110px] w-[300px] h-[172px] drop-shadow-white rounded-2xl relative  ">
                                  <img
                                    src={`/assets/images/cards/Front/${card.designUuid}.png`}
                                    className="w-[180px] h-[110px]"
                                  />
                                  {card.companyLogo && card.companyLogo.length ? (
                                    <div className="absolute flex items-center lg:right-3 lg:bottom-3  lg:h-auto  lg:w-auto max-h-[50px] max-w-[50px]  object-cover">
                                      <img
                                        src={card.companyLogo}
                                        className=" object-fill w-full h-full"
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {checkFontArray(card.designUuid) ? (
                                    <div className="absolute text-[10px] text-white lg:bottom-5 lg:left-4 bottom-7 left-5">
                                      {card.cardName ? card.cardName : "John Doe"}
                                    </div>
                                  ) : (
                                    <div className="absolute text-[10px] text-black font-semibold lg:bottom-5 lg:left-4 bottom-7 left-5">
                                      {card.cardName ? card.cardName : "John Doe"}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    <div className=" flex flex-col py-2 px-4">
                      <p className="text-base font-bold text-center text-black mt-6">
                        {card.cardType == "3fa766b5-9f66-4a38-8471-23026a59d84d"
                          ? "Loop Lite"
                          : card.cardType ==
                            "801baf78-ce33-446f-b132-618f92ccfc5f"
                            ? "Loop Elevate"
                            : "Loop Supreme"}
                      </p>
                      <div className="mt-8 flex flex-row items-center">
                        <p className="w-[52px] text-xs font-medium text-left text-black ">
                          Color :
                        </p>
                        {card.cardType ==
                          "7031e440-bc0b-4b39-8b8e-2afe3360d744" &&
                          card.hexCode ? (
                          <div
                            className={`w-5 h-5 rounded-[45px]`}
                            style={{ backgroundColor: card.hexCode }}
                          ></div>
                        ) : card.cardType == "801baf78-ce33-446f-b132-618f92ccfc5f" ? (

                          <Image height={23} width={23} className='rounded-full' alt="color" src={`/assets/images/radio_buttons/elevate/${card.designUuid}.png`} />
                        ) : <>
                          <Image height={23} width={23} className='rounded-full' alt="color" src={`/assets/images/radio_buttons/lite/${card.designUuid}.png`} />
                        </>}
                      </div>
                    </div>
                    <div className=" flex flex-col py-2 pl-4">
                      <p className="font-medium text-left text-black mt-5">
                        <span className="text-xs font-medium text-left text-black">
                          Full Name
                        </span>
                        <br />
                        <p className="text-xs font-medium text-left text-black mt-[2px]">
                          {card.cardName}
                        </p>
                      </p>
                      <p className="font-medium text-left text-black mt-3">
                        <span className="text-xs font-medium text-left text-black">
                          Company Name
                        </span>

                        <p className="text-xs font-medium text-left text-black ">
                          {card.companyName}
                        </p>
                      </p>
                      <div className="flex border border-dashed mt-2 border-[#7D9695] ml-5 px-2 rounded-xl">
                        <p className="w-32 text-[#7D9695] text-[10px]">
                          loopcard.club/details/{card.cuuid.substring(0, 2)}..
                        </p>
                         <div className="h-[18px] w-[18px]">
                          <Image src={"/assets/images/COPY.png"} height={18} width={18} onClick={() => {handleClick(card.cuuid);}} />
                        </div>
                      </div>

                      
                    </div>

                    {card?.status == 1 ? (
                      <Link href={`/createCard/${card.cuuid}`} className="w-[180px] h-10 rounded-[10px] border border-black flex justify-center items-center space-x-2 bg-black text-white absolute bottom-[-18px]">
                        <p className="text-sm font-bold text-center  text-white">
                          EDIT DETAILS
                        </p>
                        <Image
                          src={"/assets/images/editIcon.png"}
                          height={20}
                          width={20}
                          alt="edit icon"
                          style={{ objectFit: "contain", marginBottom: "3px" }}
                        />
                      </Link>
                    ) : (
                      <Link href={`/createCard/${card.cuuid}`} className="w-[180px] h-10 rounded-[10px] border border-black flex justify-center items-center space-x-2 bg-white absolute bottom-[-18px]">
                        <p className="text-sm font-bold text-center  text-black">
                          CREATE PROFILE
                        </p>
                        <Image
                          src={"/assets/images/plusIcon.png"}
                          height={20}
                          width={20}
                          alt="plus icon"
                          style={{ objectFit: "contain" }}
                        />
                      </Link >
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <h5 className="text-black text-center">Buy card</h5>
        )}
    </div>
  );
}

export default ManageCardComps