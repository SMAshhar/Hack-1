import Image from 'next/image'
import React from 'react'

export default function Promotion() {
    return (
        <div className='flex flex-col bg-white w-full px-24 pt-24'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col justify-center items-center  w-full '>
                    <div className='flex text-blue-600 font-bold text-xs tracking-widest'>
                        PROMOTIONS
                    </div>
                    <div className='text-gray-800 text-3xl py-6 font-bold tracking-wide'>
                        Our Promotions Events
                    </div>
                </div>
                <div className='w-full flex flex-col h-[400px] xl:flex-row gap-4'>
                    <div className='flex flex-col'>
                        <div className='flex flex-row h-1/2 w-full text-gray-900 bg-gray-200 px-8 justify-centers items-center'>
                            <div className='h-full w-1/2 flex flex-col items-center justify-center'>
                                <div className='flex text-2xl items-start justify-center font-bold'>
                                    GET UP TO <div className='px-2 text-3xl items-start font-bold justify-start'>60%</div>
                                </div>
                                <div>
                                    For the summer season
                                </div>
                            </div>
                            <div className='flex w-1/2 justify-end items-end'>
                                <Image src={'/promotion/event1.webp'} alt='image' width={260} height={200} />
                            </div>

                        </div>
                        <div className='flex w-full h-1/2 flex-col text-gray-200 bg-zinc-950 p-8 justify-center items-center mt-4'>
                            <div className='font-bold text-3xl py-4 tracking-wider'>GET 30% Off</div>
                            <div className='text-xs p-1 tracking-widest'>USE PROMO CODE</div>
                            <button className='font-bold px-8 py-1 bg-zinc-600 rounded-lg'>D I N E W E E K E N D S A L E</button>
                        </div>
                    </div>

                    <div className='flex w-1/2 gap-4 mx-4'>
                        <div className='h-full w-1/2 py-8 px-6 bg-orange-100'>
                            <div className='text-gray-800 text-sm tracking-wide'>Flex Sweetshirt</div>
                            <div className='flex items-center'>
                                <div className='text-gray-800 text-md tracking-wide line-through'>$100.00</div>
                                <div className='text-gray-800 mx-3 font-bold text-lg tracking-wide'>$75.00</div>
                            </div>
                            <div className=' flex h-full justify-center items-center mt-4'>
                                <div className='-bottom-4'>
                                    <Image src={"/promotion/event2.webp"} alt='event2' width={210} height={220} />
                                </div>
                            </div>
                        </div>
                        <div className='h-full w-1/2 py-8 px-6 bg-gray-200'>
                            <div className='text-gray-800 text-sm tracking-wide'>Flex push button bomber</div>
                            <div className='flex items-center'>
                                <div className='text-gray-800 text-md tracking-wide line-through'>$225.00</div>
                                <div className='text-gray-800 mx-3 font-bold text-lg tracking-wide'>$190.00</div>
                            </div>
                            <div className=' flex h-full justify-center items-center mt-4'>
                                <div className='-bottom-4'>
                                    <Image src={"/promotion/event3.webp"} alt='event2' width={210} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}