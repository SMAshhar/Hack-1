import React from 'react'
import Tile from '../tile/tile'

export default function Products() {
    return (
        <div className='flex flex-col bg-white w-full px-24 py-24'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center  w-full '>
                    <div className='flex text-blue-600 font-bold text-xs tracking-widest'>
                        PRODUCTS
                    </div>
                    <div className='text-gray-800 text-3xl py-6 font-bold tracking-wide'>
                        Check What We Have
                    </div>
                </div>
                <div>
                    <Tile image='/female/event1.png' data='Brushed Raglan Sweatshirt' price='$545'></Tile>
                </div>
            </div>
        </div>
    )
}