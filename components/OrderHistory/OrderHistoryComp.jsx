import React from "react";
import { format } from "date-fns";

const OrderHistoryComp = ({ orderHistory }) => {
  function formatDate(date) {
    const formattedDate = format(date, "do MMMM, yyyy").toUpperCase();
    return formattedDate;
  }

  return (
    <div>
      <div className="px-36">
        <p className="text-4xl font-bold  text-black mt-20 mb-8">
          Order history
        </p>
        <div
          className="grid grid-cols-6 gap-4 bg-white rounded-[10px] p-2"
          style={{ boxShadow: "0px 10px 15px rgba(0, 25, 38, 0.25)" }}
        >
          <div className="pl-8"> ORDER NUMBER</div>
          <div className="">ORDER DATE</div>
          <div className="">TOTAL QUANTITY</div>
          <div className="">TOTAL PRICE</div>
        </div>

        <div className="mt-10">
          {orderHistory?.map((row, index) => {
            var myDate = new Date(row.createdAt);
            const formatedDate = formatDate(myDate);

            return (
              <div
                class="grid grid-cols-6 gap-4 bg-white rounded-[10px] p-4 my-2"
                style={{ boxShadow: "0px 10px 15px rgba(0, 25, 38, 0.25)" }}
              >
                <div className="text-center text-black text-[8px] font-bold uppercase leading-10">
                  {row.orderId}
                </div>

                <div className="text-center text-black text-[14px] font-bold uppercase leading-10">
                  {formatedDate}
                </div>
                
                <div className="text-center text-black text-[14px] font-bold uppercase">
                  {row.numberOfCards}
                </div>
                <div className=" text-right text-black text-[14px] font-bold leading-10">
                  ₹ {row.finalPrice}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryComp;
