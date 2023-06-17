import React from "react";
import DetailsInput from "./DetailsInput";
// import { CartContext } from '@/context/CartContext'

const DetailsComp = ({ cardsArray, checkFormValid, color }) => {
  // console.log(cardsArray, "array")

  return (
    <div>
      {cardsArray && cardsArray.length > 0 && (
        <>
          {cardsArray.map((card, index) => {
            return (
              <div key={card.key}>
                <DetailsInput
                  card={card}
                  index={index}
                  checkFormValid={checkFormValid}
                  color={color}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DetailsComp;
