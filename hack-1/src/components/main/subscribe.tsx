import React from 'react'

export default function Subscribe() {
    return (
        <div className='w-screen bg-white text-gray-800 py-36 p-16 relative '>
            <div className="flex text-stone-100 w-full justify-center items-center text-9xl font-bold bg-clip-text">
                <h1>Newsletter</h1>
            </div>
            <div className='flex w-full h-full justify-center items-center flex-col absolute top-0 left-0 pt-10'>
                <div className='text-4xl font-bold'>
                    Subscribe Our Newsletter
                </div>
                <div className='flex flex-col text-md py-4 tracking-widest'>
                    Get the latest information and promos directly
                    <div className='flex gap-2 py-8'>
                        <input placeholder='Input email address' className='p-2 text-xs border w-3/4 border-gray-800 border-spacing-1' />
                        <button className='px-4 py-2 w-1/4 leading-tight text-xs font-bold bg-black text-gray-100'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}