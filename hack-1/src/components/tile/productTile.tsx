import Image from 'next/image'
import React from 'react'

export default function ProductTiles() {
    return(
        <div className='text-gray-800'>
            <Image src={'/feature.webp'} alt='productId' width={250} height={250} />
            <div className='font-semibold tracking-wider text-lg py-2'>Imperial Alpaca Hoodie</div>
            <div className='font-semibold text-gray-500 tracking-widest'>Jackets</div>
            <div className='text-xl text-black py-2 font-bold'>$525</div>
        </div>
    )
}