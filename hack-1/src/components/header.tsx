'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";


import { CiSearch } from 'react-icons/ci'
import { RiMenu3Line } from 'react-icons/ri'
import Cart from "./cartIcon";
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'



export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="flex w-auto bg-white justify-center">
            <div className="flex w-full mx-4 lg:mx-12 px-4 py-12 lg:p-8 items-center justify-around">
                <Link href={'/'} className="bg-white mx-8">
                    <Image src={'/Logo.webp'} alt="logo" height={50} width={150} />
                </Link>
                <div className='flex-grow mx-4 flex lg:hidden items-center justify-end'>
                    <button
                        className="flex lg:hidden rounded-md p-2 text-gray-800 focus:outline-none duration-300 ease-in"
                        onClick={toggleMenu}
                    >
                        <RiMenu3Line size={25} />
                    </button>
                </div>
                <div className="hidden lg:flex text-gray-800 justify-evenly gap-2 flex-grow">
                    <Link href='/female'>Female</Link>
                    <Link href='/male'>Male</Link>
                    <Link href='/kids'>Kids</Link>
                    <Link href='/allProducts' className="hidden xl:flex">All Products</Link>
                </div>
                <div className="hidden lg:flex text-gray-500 items-center border mx-14 border-gray-300 border-spacing-1 rounded-md flex-grow">
                    <div className="p-1 "><CiSearch /></div><input placeholder="What you are looking for" className="px-1"></input>
                </div>
                <Link href='/cart' className="hidden lg:flex mx-4">

                    <Cart />
                </Link>
                {/* Menu for Mobile */}
                <div
                    className={`flex fixed flex-col mx-4 w-auto h-screen items-center justify-around lg:hidden top-0  bg-white ${isMenuOpen ? "block" : "hidden"
                        }`} 
                >
                    <div className="flex items-center bg-white w-screen px-8 z-50">
                        <div className="bg-white mx-8">
                            <Image src={'/Logo.webp'} alt="logo" height={100} width={150} />
                        </div>
                        <div className='flex w-full justify-end'>
                            <button
                                className="p-2 ml-4 text-gray-800 rounded-md relative focus:outline-none"
                                onClick={toggleMenu}
                            >
                                <IoMdClose size={40} />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col text-center pt-48 gap-3">
                        <Link onClick={toggleMenu} href='/cart' className="flex mx-4"><Cart /></Link>
                        <Link onClick={toggleMenu} href='/female' className="text-gray-800">Female</Link>
                        <Link onClick={toggleMenu} href='/male' className="text-gray-800">Male</Link>
                        <Link onClick={toggleMenu} href='/kids' className="text-gray-800">Kids</Link>
                        <Link onClick={toggleMenu} href='/allProducts' className="text-gray-800">All Products</Link>
                        {/* Insert logo or other content here */}

                    </div>
                </div>
            </div>
        </div >
    )
}

