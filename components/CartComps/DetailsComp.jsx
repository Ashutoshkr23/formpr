import React from "react";
import DetailsInput from "./DetailsInput";
// import { CartContext } from '@/context/CartContext'

const DetailsComp = ({ cardsArray, checkFormValid, color, setColor, colorLite,
  setColorLite,
  colorElevate,
  setColorElevate }) => {
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
                  setColor={setColor}
                  colorLite={colorLite}
                  setColorLite={setColorLite}
                  colorElevate={colorElevate}
                  setColorElevate={setColorElevate}
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
