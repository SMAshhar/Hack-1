import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex w-screen bg-white">
            <div className="">
                Logo
            </div>
            <div className="flex text-gray-800 justify-around gap-5 m-16">
                <Link href='/Female'>Female</Link>
                <Link href='/Female'>Male</Link>
                <Link href='/Female'>Kids</Link>
                <Link href='/Female'>All Products</Link>
            </div>
            <div>
                Search bar
            </div>
            <div>
                Cart
            </div>
        </div>
    )
}