import Image from "next/image";
import Item from "./Item";
import { Scrollbars } from "react-custom-scrollbars-2";



export default function CartComp(props) {
    const { items, totalAmount, totalItems, quantity } = props
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="/assets/images/cart-images/arrow.png" className="arrow-icon" alt="arrow" />
                    {/* <Image src="/assets/images/cart-images/arrow.png" alt="arrow" className="arrow-icon" width={50} height={50} /> */}

                    <h3>continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./assets/images/cart-images/cart.png" alt="cart" />
                    <p>{totalItems}</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>shopping Cart</h1>
                <p className="total-items">
                    you have <span className="total-items-count">{totalItems} </span> items
                    in shopping cart
                </p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars className="cart-items-container">
                            {items.map((curItem) => {
                                return <Item key={curItem.id} {...curItem} />;
                            })}
                        </Scrollbars>

                    </div>
                </div>

                <div className="card-total">
                    <h3>
                        Cart Total : <span>{totalAmount}₹</span>
                    </h3>
                    <button>checkout</button>
                    <button className="clear-cart" >
                        Clear Cart
                    </button>
                </div>
            </section>
        </>
    );
}