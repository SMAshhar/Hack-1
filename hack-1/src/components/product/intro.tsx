import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import { client } from '@/lib/sanityClient'
import { NextResponse } from 'next/server'
import { urlFor } from '@/lib/sanityImage'
import Counter from './counter'
import Images1 from './images'

async function getDataForProduct(id: string) {
    try {
        const res = await client.fetch(`*[_type=='product' && _id=='${id}']`)
        console.log(id)
        return (res)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ 'message': error })
    }

}

export default async function Intro(id: string) {

    const data = await getDataForProduct(id)

    const x = data[0]?.images

    const uploadToDb = async () => {
        await fetch('/api/updateCart')
    }


    return (
        <div className='flex w-full bg-white px-24 py-20 gap-8'>
            <div>
                {/* {data[0].images.map((item: any) => (
                    // Images1(item)
                    <div>
                        <img src={urlFor(item).url()} height={70} width={70} className='object-cover relative py-2' />
                    </div>
                ))} */}
                {/* SMall: Requires a Map function here */}
            </div>
          <div className='h-48 w-[52rem]'>
            <Images1 images={x}/>
          </div>
            {/* <div> */}
                {/* <img src={urlFor(data[0].images[0]).url()} height={650} width={650} className='object-cover relative' /> */}

                {/* Big */}
            {/* </div> */}
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
                        <Counter />
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <button className='bg-black px-8 py-2 font-bold flex items-center justify-center gap-2 text-gray-200'>
                            <CgShoppingCart className="text-2xl font-bold" />
                            Add to Cart
                        </button>
                        {/* add the onClick function in the above button */}
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