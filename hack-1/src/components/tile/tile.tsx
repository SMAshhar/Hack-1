import Image from 'next/image'
import React from 'react'
import { data } from '../../../types'

export default function Tile({image, data, price}: data) {
    return (
        <div className='flex flex-col hover:scale-110 duration-500 mt-8'>
            <Image src={image} alt='image' width={400} height={400}/>
            <div className='text-gray-800 text-xl text-bold tracking-widest my-6'>{data}</div>
            <div className='text-gray-800 text-xl text-bold tracking-widest'>{price}</div>
        </div>
    )
}