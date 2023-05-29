'use client'
import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { useState } from 'react'

export default function Intro() {

    const [qty, setQty] = useState(0)

    return (
        <div className='flex w-screen bg-white px-24 py-20 gap-8'>
            <div>
                <img src='/feature.webp' height={70} width={70} className='object-cover relative' />
                {/* SMall: Requires a Map function here */}
            </div>
            <div>
                <img src='/feature.webp' height={650} width={650} className='object-cover relative' />

                {/* Big */}
            </div>
            <div className=''>
                {/* Dets */}
                <div className='text-black text-3xl pt-20'>
                    <h1>Imperial Alpaca Hoodie</h1>
                    {/* Heading */}
                </div>
                <div className='text-gray-400 text-2xl py-2'>
                    <h1>Jackets</h1>
                    {/* Category */}
                </div>
                <div className='mt-4 my-2 text-black font-bold'>
                    SELECT SIZE
                    {/* Select Size */}
                </div>
                <div className='gap-4 flex justify-center items-center h-16'>
                    <div className='p-2 rounded-full w-12 flex justify-center items-center hover:border-2 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>XS</div>
                    <div className='p-2 rounded-full w-12 flex justify-center items-center hover:border-2 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>S</div>
                    <div className='p-2 rounded-full w-12 flex justify-center items-center hover:border-2 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>M</div>
                    <div className='p-2 rounded-full w-12 flex justify-center items-center hover:border-2 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>L</div>
                    <div className='p-2 rounded-full w-12 flex justify-center items-center hover:border-2 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>XL</div>
                    {/* sizes */}
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='font-bold text-black py-6'>
                        Quantity:
                    </div>
                    <div className='flex gap-1'>
                        <button onClick={qty <= 1 ? () => setQty(1) : () => setQty(qty-1)} className='p-1 rounded-full w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>-</button>
                        <div className='text-black flex justify-center p-2'>{qty}</div>
                        {/* Qty plus and minus ammount */}
                        <button onClick={() => setQty(qty + 1)} className='p-1 rounded-full w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>+</button>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <button className='bg-black px-8 py-2 font-bold flex items-center justify-center gap-2 text-gray-200'>
                            <CgShoppingCart className="text-2xl font-bold" />
                            Add to Cart
                        </button>
                    </div>
                    <div className='text-black ml-4 text-2xl font-semibold flex justify-center items-center'>
                        $ 525.00
                        {/* $s */}
                    </div>
                </div>
            </div>
            This is the intro
        </div>
    )
}