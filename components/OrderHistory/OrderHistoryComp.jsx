import React, { useState } from "react";
import { format } from "date-fns";

const OrderHistoryComp = ({ orderHistory }) => {
  
  console.log(orderHistory,"order")
  
  function formatDate(date) {
    const formattedDate = format(date, "do MMMM, yyyy").toUpperCase();
    return formattedDate;
  }

  // const countCardTypes = ()=>{

  // }

  return (
    <div className="px-4 md:px-8 lg:px-4 xl:px-0 max-w-[1208px] mx-auto">
      <div className="mx-auto">
        <p className="text-4xl font-bold  text-black mt-20 mb-8">
          Order history
        </p>
        
        <div
          className="grid grid-cols-6 gap-4 bg-white rounded-[10px] py-2 text-center h-[40px]"
          style={{ boxShadow: "0px 10px 15px rgba(0, 25, 38, 0.25)" }}
        >
          <div className="">ORDER NUMBER</div>
          <div className="">ORDER DATE</div>
          <div className="">CARD TYPE</div>
          <div className="">QUANTITY</div>
          <div className="">TOTAL QUANTITY</div>
          <div className="">TOTAL PRICE</div>

        </div>

        <div className="mt-10">
          {orderHistory?.map((row, index) => {
            var myDate = new Date(row.createdAt);
            const formatedDate = formatDate(myDate);

            return (
              <>
                <div
                  className="grid grid-cols-6 gap-4 bg-white rounded-[10px] p-4 my-4 font-bold uppercase leading-10 text-center text-black  max-h-[104px] md:text-[12px] lg:text-[14px]"
                  style={{ boxShadow: "0px 10px 15px rgba(0, 25, 38, 0.25)" }}
                >
                  <div className="text-[12px] ">
                    {row.razorpay_order_id}
                  </div>
                  <div className=" ">
                    {formatedDate}
                  </div>
                 
                  <div className="text-center text-black text-[14px] font-bold uppercase leading-6">
                   {row?.card_types?.lite > 0 &&  <p className="my-0">Lite</p>}
                   {row?.card_types?.elevate > 0 && <p className="my-0">Elevate</p> }
                  {row?.card_types?.supreme > 0 && <p className="my-0">Supreme</p> }
                    </div>
                    <div className="text-center text-black text-[14px] font-bold uppercase leading-6">
                   {row?.card_types?.lite > 0 &&  <p className="my-0">{row?.card_types?.lite}</p>}
                   {row?.card_types?.elevate > 0 && <p className="my-0">{row?.card_types?.elevate}</p> }
                  {row?.card_types?.supreme > 0 && <p className="my-0">{row?.card_types?.supreme}</p> }
                    </div>
                  

                 

                  <div className=" ">
                    {row.numberOfCards}
                  </div>
                  <div className= "">
                    ₹ {row.finalPrice}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryComp;
