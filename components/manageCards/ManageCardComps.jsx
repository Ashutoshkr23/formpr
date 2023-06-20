import React, { useContext } from 'react'
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';


const ManageCardComps = () => {
    const { cartItems, userProfile, allCards } = useContext(CartContext);
    console.log(allCards)
    return (
      <div className="w-full h-full px-36 py-4">
        <h3 className="text-4xl font-bold  text-black mt-8">Manage Cards</h3>

        {userProfile?.totalCards > 0 ? (
          <div className="grid grid-cols-2 gap-12 mt-10">
            {allCards.map((card) => (
              <Link href={`/createCard/${card.cuuid}`} key={card.cuuid}>
                <div
                  className="w-[566px] relative h-44 rounded-[10px] px-4 bg-white flex justify-evenly"
                  style={{ boxShadow: "0px 10px 15px 0 rgba(0,25,38,0.25)" }}
                >
                  <div className="flex justify-center items-center h-full">
                    <Image
                      src={"/assets/images/johnDoe.png"}
                      height={110}
                      width={180}
                      alt="card"
                    />
                  </div>
                  <div className=" flex flex-col py-2 px-4">
                    <p className="text-base font-bold text-center text-black mt-6">
                      {card.cardType =="3fa766b5-9f66-4a38-8471-23026a59d84d" ? "Loop Lite" :card.cardType =="801baf78-ce33-446f-b132-618f92ccfc5f" ?"Loop Elevate":"Loop Supreme"  }
                    </p>
                    <div className="mt-8 flex flex-row items-center">
                      <p className="w-[52px] text-xs font-medium text-left text-black ">
                        Color :
                      </p>
                      {card.cardType =="7031e440-bc0b-4b39-8b8e-2afe3360d744" && card.hexCode ? 
                      <div className={`w-5 h-5 rounded-[45px] bg-[${card.hexCode}]`}></div> :
                      <div className="w-5 h-5 rounded-[45px] bg-[#66d3e1]"></div>
                      }
                    </div>
                  </div>
                  <div className=" flex flex-col py-2 px-4">
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
                  </div>

                  {!card?.status ? (
                    <div className="w-[203px] h-10 rounded-[10px] border border-black flex justify-center items-center space-x-2 bg-black text-white absolute bottom-[-18px]">
                      <p className="text-sm font-bold text-center  text-white">
                        EDIT DETAILS
                      </p>
                      <Image
                        src={"/assets/images/editIcon.png"}
                        height={20}
                        width={20}
                        alt="edit icon"
                        style={{ objectFit: "contain",marginBottom:"3px" }}
                      />
                    </div>
                  ) : (
                    <div className="w-[203px] h-10 rounded-[10px] border border-black flex justify-center items-center space-x-2 bg-white absolute bottom-[-18px]">
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
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <h5>Buy card</h5>
        )}
      </div>
    );
}

export default ManageCardComps