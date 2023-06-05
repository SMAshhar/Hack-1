'use client'
import React from 'react'
import { useState } from 'react'


export default function Counter() {

    const [qty, setQty] = useState(1)

    return (
        <div className='flex gap-1'>
            <button onClick={qty <= 1 ? () => setQty(1) : () => setQty(qty - 1)} className='p-1 rounded-full w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>-</button>
            <div className='text-black flex justify-center p-2'>{qty}</div>
            {/* Qty plus and minus ammount */}
            <button onClick={() => setQty(qty + 1)} className='p-1 rounded-full w-10 flex justify-center items-center border-2 border-gray-300 bg-white hover:shadow-xl text-gray-700 text-lg font-bold'>+</button>
        </div>
    )
}
