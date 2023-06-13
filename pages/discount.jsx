import axios from 'axios';
import React, { useState } from 'react'
import { getSession } from 'next-auth/react'

const Discount = () => {

    const [getDiscountCodeValue, setgetDiscountCodeValue] = useState('');
    const fixedPorductPrice = 100;
    const [productPrice, setproductPrice] = useState(fixedPorductPrice)
    const [enterCouponCode, setenterCouponCode] = useState(false)
    const [inputReadOnly, setinputReadOnly] = useState('')

    const handlegetDiscountCodeValueChange = (event) => {
        setgetDiscountCodeValue(event.target.value);
    };

    const checkTheCodeViaAPI = async () => {
        const session = await getSession();
        const userEmail = session?.user?.email;

        const data = { userEmail, getDiscountCodeValue }

        const response = await axios.post('/api/checkDiscount', data)
        if (response.data.success === false) {
            console.log("Invalid Coupon.");
        } else if (response.data.success === true) {
            console.log("Valid Coupon.");
            console.log(response);
            setproductPrice((productPrice) - ((productPrice * response.data.couponCode) / 100))
            setenterCouponCode(true)
            setinputReadOnly('disabled')
        }
    };

    const NewCouponCode = async () => {
        setenterCouponCode(false)
        setproductPrice(fixedPorductPrice)
        setinputReadOnly('')
    };

    return (
        <>
            <div>Enter Coupon Code:-</div>
            <input className='border-2 border-red-500' type="text" value={getDiscountCodeValue} onChange={handlegetDiscountCodeValueChange} placeholder="Enter Coupon Code" disabled={inputReadOnly} />
            {!enterCouponCode && <div>
                <span onClick={checkTheCodeViaAPI} >
                    Save
                </span>
            </div>
            }
            {enterCouponCode && <div>
                <span onClick={NewCouponCode} >
                    New Coupon Code
                </span>
            </div>
            }
            <div>{productPrice}</div>
        </>
    )
}

export default Discount