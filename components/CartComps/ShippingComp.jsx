import axios from "axios";
import React, { useEffect, useState } from "react";

const ShippingComp = ({ address, setAddress, submitPressed }) => {
  const fetchCityState = async () => {
    if (address.pinCode.length == 6) {
      const result = await axios.get(
        `https://api.postalpincode.in/pincode/${address.pinCode}`
      );
      if (result.status === 200) {
        if (result?.data[0]?.PostOffice) {
          let temp = result.data[0].PostOffice[0];
          // console.log(temp, "temp")
            setAddress({ ...address, city: temp.District, state: temp.State });
        }
      }
    }
  };

  return (
    <div className="w-full h-full ml-1 mr-4">
      <div className="h-full w-full rounded-lg bg-white shadow drop-shadow-2xl BG-WHITE p-6 ">
        <p className="text-sm font-bold leading-snug uppercase mt-1">
          CONTACT INFORMATION
        </p>
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 w-full justify-between items-center mt-6">
          <div className="w-full ">
            <div className=" lg:w-full flex flex-col md:pr-4 pr-0">
              <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.email ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-11">Email</p>
                <input 
                style={{ border: 'none', outline: 'none', background: 'white' }}
                  type="email"
                  className="w-full"
                  value={address.email}
                  onChange={(e) => {
                    setAddress({ ...address, email: e.target.value });
                  }}
                /></label>

            </div>
          </div>

          <div className="w-full flex flex-col">
            <label className={`outline-none  bg-white border rounded-md text-black  h-9 px-2 text-sm ${!address.phoneNumber ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-28">Phone number</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                className="w-full"
                value={address.phoneNumber}
                onChange={(e) => {
                  let input = e.target.value;
                  let number = input.replace(/\D/g, "");
                  setAddress({ ...address, phoneNumber: number });
                }}
              /></label>
           
          </div>
        </div>
      </div>
      <div className="h-full mb-10 w-full rounded-lg shadow drop-shadow-2xl bg-white p-6 pb-10 mt-4">
        <p className="text-sm font-bold leading-snug uppercase mt-1">
          SHIPPING ADDRESS
        </p>
        <div className="flex md:flex-row gap-2 md:gap-0 flex-col w-full justify-between items-center mt-8">
          <div className="w-full flex flex-col md:pr-4 pr-0">
            <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.firstName ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-[82px]">First name</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                value={address.firstName}
                className="w-full"
                name="firstName"
                onChange={(e) => {
                  setAddress({ ...address, firstName: e.target.value });
                }}
              /></label>

          </div>
          <div className="w-full flex flex-col">
            <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.lastName ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-[82px]">Last name</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                value={address.lastName}
                className="w-full"
                name="lastName"
                onChange={(e) => {
                  setAddress({ ...address, lastName: e.target.value });
                }}
              /></label>

          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-5">
          <div className="w-full flex flex-col">
            <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.address ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-16">Address</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                className="w-full"
                value={address.address}
                onChange={(e) => {
                  setAddress({ ...address, address: e.target.value });
                }}
              /></label>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 md:gap-0 w-full justify-between items-center mt-5">
          <div className="w-full flex flex-col md:pr-4 pr-0">
            <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.pinCode ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-[70px]">Pin code</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                className="w-full"
                value={address.pinCode}
                name="pinCode"
                onChange={(e) => {
                  setAddress({ ...address, pinCode: e.target.value });
                }}
                onBlur={() => {
                  fetchCityState();
                }}
              /></label>

          </div>
          <div className="w-full flex flex-col md:pr-4 pr-0">
            <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.city ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-8">City</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                className="w-full"
                value={address.city}
                onChange={(e) => {
                  setAddress({ ...address, city: e.target.value });
                }}
              /></label>
            
          </div>
          <div className="w-full flex flex-col">
            <label className={`outline-none bg-white border text-black rounded-md  h-9 px-2 text-sm ${!address.state ? 'border border-[#F66F6f]' : 'border-dim-gray'}`}><p className="text-sm pb-1 bg-white -mt-3 px-1 w-11">State</p>
              <input 
              style={{ border: 'none', outline: 'none', background: 'white' }}
                type="text"
                className="w-full "
                value={address.state}
                onChange={(e) => {
                  setAddress({ ...address, state: e.target.value });
                }}
              /></label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingComp;
