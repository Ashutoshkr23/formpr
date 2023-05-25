import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export default function Item(props) {
    const { data } = props
    const { cartItems, plusCartFunc, minusCartFunc, handleItemCount } = useContext(CartContext);
    return (
        <>
            <div className="items-info">
                {/* <div className="product-img">
                    <img src={img} alt="tp" />
                </div> */}

                <div className="title">
                    <h2>{data.cardTypeUuid}</h2>
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