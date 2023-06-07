import { client } from '@/lib/sanityClient'
import { NextResponse } from 'next/server'
import React from 'react'
import { BsDot } from 'react-icons/bs'


export async function getDataForProduct(id: string) {
    try {
        const res = await client.fetch(`*[_type=='product' && _id=='${id}']`)
        return res
    } catch (error) {
        console.log(error)
        return NextResponse.json({'message' : error})
    }
    
}

export default async function ProductInfo(id:string) {
    const data = await getDataForProduct(id)

    return (
        <div className='mx-32 mb-24'>
            <div>
                <div className='w-auto bg-white text-gray-800 mt-14 pt-5 pb-5 relative border-b-2 border-gray-700'>
                    <div className="flex text-stone-100 w-full justify-start items-center text-9xl font-bold bg-clip-text">
                        <h1>Overview</h1>
                    </div>
                    <div className='flex w-full h-full justify-center tracking-wider items-start flex-col absolute top-0 left-0'>
                        <div className='text-2xl font-bold'>
                            Product Infromation
                        </div>
                    </div>
                </div>
                <div className='pt-16 text-gray-700'>
                    <div className='flex'>
                        <div className='flex w-1/3 text-md font-bold'>
                            PRODUCT DETAIL
                        </div>
                        <div className='flex w-2/3 tracking-widest text-justify'>
                            {data[0].description}
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                        </div>
                    </div>
                    <div className='flex py-14'>
                        <div className='flex w-1/3 text-md font-bold'>
                            PRODUCT CARE
                        </div>
                        <div className=' w-2/3 text-justify'>
                            {data[0].productDetails.split('.').map((feature: string) => (
                                <div key={data[0]._id} className='flex justfy-center items-center gap-1 -my-2 -mx-2 text-black font-semibold tracking-wider'><BsDot size={32} />{feature}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}