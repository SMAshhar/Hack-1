import Image from 'next/image'
import React from 'react'

import { partialProduct } from '@/lib/type'

export default function ProductTiles({images, title, type, price}:Partial<partialProduct>) {
    return(
        <div className='text-gray-800'>
            <img src={images} alt='productId' width={250} height={250} className='max-w-24 max-h-60'/>
            <div className='font-semibold tracking-wider text-lg py-2'>{title}</div>
            <div className='font-semibold text-gray-500 tracking-widest'>{type}</div>
            <div className='text-xl text-black py-2 font-bold'>${price}</div>
        </div>
    )
}