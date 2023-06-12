'use client'
import { urlFor } from '@/lib/sanityImage'
import { product } from '@/lib/type'

import React from 'react'

export default async function CartTile(item: product, qty:number, size:string) {

    return (
        <div className='relative my-2 flex flex-col sm:flex-row gap-4 w-screen/2 p-2 rounded-lg border-2'>
            <div className='h-full items-center justify-center flex'>
                <img src={urlFor(item.images[0]).url()} alt={item._id} width={200} height={200}/>
            </div>
            <div className='flex flex-col'>
                <div className='text-2xl flex w-full flex-grow'>
                    {item.title}
                </div>
                <div className='text-lg font-bold text-gray-500'>
                    {item._category}
                </div>
                <div className='text-black'>
                    Delivery Estimation
                </div>
                <div className='text-yellow-500 height-full'>
                    5 Working Days
                </div>
                <div className='text-xl text-black'>
                    {`$ ` + item.price * qty}
                </div>
            </div>
            <div className='flex justify-end items-end w-full' >
                {qty + ` units of size ` + size}
            </div>

        </div>
    )
}