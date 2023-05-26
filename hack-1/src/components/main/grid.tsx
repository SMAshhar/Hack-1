import Image from 'next/image'
import React from 'react'

export default function Grid() {
    return (
        <div className='w-screen bg-white text-gray-800 p-16'>
            <div className='flex text-5xl font-bold w-full px-36'>
                <div className='hidden xl:flex w-1/2'></div>
                <div className='w-full xl:w-1/2 xl:px-8 tracking-wider'>Unique and Authentic Vintage Designer Jewellery</div>
            </div>
            <div className='flex flex-col xl:flex-row w-full pt-10 p-24'>
                <div className='w-full xl:w-1/2 relative'>
                    <div className="text-stone-100 text-9xl font-bold bg-clip-text">
                        <h1>Different from Others</h1>
                    </div>
                    <div className="grid absolute top-0 left-0 h-full tracking-widest grid-cols-2 grid-rows-2 gap-4 text-gray-900">
                        {/* Grid items */}
                        <div className="p-4 pr-8 w-4/5">
                            <h2 className=" text-lg font-bold mb-4">Using Good Quality Materials</h2>
                            <p className="">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className=" p-4 pr-8 w-4/5">
                            <h2 className=" text-lg font-bold mb-4">100% Handmade Products</h2>
                            <p className="">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="p-4 pr-8 w-4/5">
                            <h2 className=" text-lg font-bold mb-4">Modern Fashion Design</h2>
                            <p className="">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div className="p-4 pr-8 w-4/5">
                            <h2 className=" text-xl font-bold mb-4">Discount for Bulk Orders</h2>
                            <p className="">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        {/* Add more grid items here */}
                    </div>
                </div>
                <div className='flex justify-center items-center w-full xl:w-1/2 gap-6'>
                    <div className=''>
                        <Image src={'/feature.webp'} alt='feature' width={650} height={650} />
                    </div>
                    <div className='flex flex-col w-full justify-center h-full items-center relative'>
                        <div className='w-full tracking-widest pb-12 text-justify'>
                            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </div>
                        <div className='w-full'>
                            <button className='px-4 py-2 w-1/2 leading-tight text-sm font-bold bg-black text-gray-100'>See All Products</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

