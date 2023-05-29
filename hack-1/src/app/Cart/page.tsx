import React from "react";
import { BiShoppingBag } from "react-icons/bi";

export default function Cart() {
    return (
        <div className="w-screen bg-white">
            <div className=" text-gray-900 text-2xl font-bold justify-start px-40 py-16 items-center flex">
                Shopping Cart
            </div>
            <div className="flex w-screen justify-center items-center flex-col pt-8 pb-28">
                <div className="flex text-gray-900 text-9xl font-bold justify-start p-4 items-center ">
                    <BiShoppingBag />
                </div>
                <div className=" text-gray-900 tracking-widest text-3xl font-bold justify-start items-center flex">
                    Your shopping bag is empty
                </div>
            </div>
        </div>
    )
}