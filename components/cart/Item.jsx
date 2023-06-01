import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function Item(props) {
    const { data } = props
    const { cartItems, plusCartFunc, minusCartFunc, handleItemCount, handleClearCard } = useContext(CartContext);
    return (
        <>
            <div className="items-info" key={data._id}>
                {/* <div className="product-img">
                    <img src={img} alt="tp" />
                </div> */}

                <div className="title">
                    {/* <h2>{data.cardTypeUuid}</h2> */}
                    <h2>{data.amount == 499 ? "Loop Lite" : data.amount == 799 ? "Loop Elevate" : "Loop Supreme"}</h2>
                </div>
                <div className="add-minus-quantity">
                    {/* <i className="fas fa-minus minus" /> */}<span className="font-bold text-5xl mb-2 cursor-pointer" onClick={() => {
                        minusCartFunc(data._id)
                    }}>-</span>
                    <input type="number" value={data.quantity} onChange={(e) => {
                        if (e.target.value) {
                            handleItemCount(data._id, e.target.value)
                        }
                    }} />
                    <span className="font-extrabold text-3xl  cursor-pointer" onClick={() => {
                        plusCartFunc(data._id)
                    }}>+</span>
                </div>
                <div className="price">
                    <h3>{data.currency} {data.amount}</h3>
                </div>
                <div className="flex justify-end items-center pl-5">
                    <h3 className="text-lg">Total amount for this type of card: ₹{data.totalAmount}</h3>
                </div>
                <div className="flex justify-center items-center pl-1">
                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => handleClearCard(data._id)}>X</button>
                </div>
                {/* <div className="remove-item">
                    <i
                        className="fas fa-trash-alt remove"
                        onClick={() => removeItem(id)}></i>
                </div> */}
            </div>
            <hr />
        </>
    )
}