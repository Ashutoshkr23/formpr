import React, { useState } from 'react'
import CartComp from "@/components/cart/CartComp";
import { products } from "@/components/cart/product";



const Cart = () => {
    const [items, setItems] = useState(products)
    const [totalAmount, setTotalAmount] = useState(499);
    const [totalItems, setTotalItems] = useState(2);
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <CartComp items={items} totalAmount={totalAmount} totalItems={totalItems} quantity={quantity} />
        </>
    )
}

export default Cart