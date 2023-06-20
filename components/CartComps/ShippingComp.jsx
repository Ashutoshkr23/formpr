import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ShippingComp = ({ address, setAddress, submitPressed }) => {




    const fetchCityState = async () => {
        // console.log(address.pinCode)
        if (address.pinCode.length == 6) {
            const result = await axios.get(`https://api.postalpincode.in/pincode/${address.pinCode}`)
            if (result.status === 200) {
                if (result?.data[0]?.PostOffice) {
                    let temp = result.data[0].PostOffice[0]
                    console.log(temp, "temp")
                    setAddress({ ...address, city: temp.Region, state: temp.State })
                }

            }
        }

    }



    console.log(address, "address")
    return (
        <div className='w-full h-full ml-1 mr-4 text-white'>
            <div className='h-full w-full rounded-lg shadow drop-shadow-2xl bg-[#000000] p-6 '>
                <p className="text-sm font-bold leading-snug uppercase mt-1">CONTACT INFORMATION</p>
                <div className='flex w-full justify-between items-center mt-6'>
                    <div className='w-full '>
                        <div className='w-full flex flex-col pr-4'>
                            <label className='text-sm pb-1'>Email</label>
                            <input type="email" className='outline-none bg-white border text-black rounded-md border-zinc-500 h-9 px-2 text-sm ' value={address.email} onChange={(e) => {
                                setAddress({ ...address, email: e.target.value })
                            }} />
                        </div>
                    </div>

                    <div className='w-full flex flex-col'>
                        <label className='text-sm pb-1'>Phone number</label>
                        <input type="text" className='outline-none  bg-white border rounded-md text-black border-zinc-500 h-9 px-2 text-sm' value={address.phoneNumber} onChange={(e) => {
                            let input = e.target.value;
                            let number = input.replace(/\D/g, '');
                            console.log(number, "num")
                            setAddress({ ...address, phoneNumber: number })
                        }} />
                    </div>

                </div>
            </div>
            <div className='h-full w-full rounded-lg shadow drop-shadow-2xl bg-[#000000] p-6 pb-10 mt-4'>
                <p className="text-sm font-bold leading-snug uppercase mt-1">SHIPPING ADDRESS</p>
                <div className='flex w-full justify-between items-center mt-8'>
                    <div className='w-full flex flex-col pr-4'>
                        <label className='text-sm pb-1'>First name</label>
                        <input type="text" value={address.firstName} className='outline-none bg-white border text-black rounded-md border-zinc-500 h-9 px-2 text-sm' name="firstName" onChange={(e) => {
                            setAddress({ ...address, firstName: e.target.value })
                        }} />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='text-sm pb-1'>Last name</label>
                        <input type="text" value={address.lastName} className='outline-none bg-white border text-black rounded-md border-zinc-500 h-9 px-2 text-sm' name="lastName" onChange={(e) => {
                            setAddress({ ...address, lastName: e.target.value })
                        }} />
                    </div>

                </div>
                <div className='flex w-full justify-between items-center mt-5'>
                    <div className='w-full flex flex-col'>
                        <label className='text-sm pb-1'>Address</label>
                        <input type="text" className='outline-none bg-white border rounded-md border-zinc-500 text-black h-9 px-2 text-sm' value={address.address} onChange={(e) => {
                            setAddress({ ...address, address: e.target.value })
                        }} />
                    </div>
                </div>
                <div className='flex w-full justify-between items-center mt-5'>
                    <div className='w-full flex flex-col pr-4'>
                        <label className='text-sm pb-1'>PIN code</label>
                        <input type="text" className='outline-none bg-white border rounded-md border-zinc-500 text-black h-9 px-2 text-sm' value={address.pinCode} name="pinCode" onChange={(e) => {
                            setAddress({ ...address, pinCode: e.target.value })
                        }}
                            onBlur={() => {
                                fetchCityState()
                            }}

                        />
                    </div>
                    <div className='w-full flex flex-col pr-4'>
                        <label className='text-sm pb-1'>City</label>
                        <input type="text" className='outline-none bg-white border rounded-md border-zinc-500 text-black h-9 px-2 text-sm' value={address.city} onChange={(e) => {
                            setAddress({ ...address, city: e.target.value })
                        }} />
                    </div>
                    <div className='w-full flex flex-col'>
                        <label className='text-sm pb-1'>State</label>
                        <input type="text" className='outline-none bg-white border rounded-md border-zinc-500 text-black h-9 px-2 text-sm' value={address.state} onChange={(e) => {
                            setAddress({ ...address, state: e.target.value })
                        }} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ShippingComp