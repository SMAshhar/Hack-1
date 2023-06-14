import React from 'react'
import { client } from '@/lib/sanityClient'
import { NextResponse } from 'next/server'
import Counter from './counter'
import Images1 from './images'

async function getDataForProduct(id: string) {
    try {
        const res = await client.fetch(`*[_type=='product' && _id=='${id}']`)
        return (res)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ 'message': error })
    }
}

export default async function Intro(id: string) {

    const data = await getDataForProduct(id)

    const x = data[0]?.images

    return (
        <div className='flex flex-col md:flex-row w-full items-center justify-center bg-white px-24 py-20 gap-8'>
          <div className='h-48 md:w-[52rem]'>
            <Images1 images={x}/>
          </div>
            <div className=''>
                {/* Dets */}
                <div className='text-black text-3xl pt-20'>
                    <h1>{data[0].title}</h1>
                    {/* Heading */}
                </div>
                <div className='text-gray-400 text-2xl py-2'>
                    <h1>{data[0].type}</h1>
                    {/* Category */}
                </div>
                <div className='mt-4 my-2 text-black font-bold'>
                    SELECT SIZE
                    {/* Select Size */}
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-1'>
                        <Counter item={data[0]} />
                    </div>
                </div>
                <div className='flex'>                
                    <div className='text-black ml-4 text-2xl font-semibold flex justify-center items-center py-4 px-6'>
                        {'$ ' + data[0].price}
                        {/* $s */}
                    </div>  
                </div>
            </div>
        </div>
    )
}