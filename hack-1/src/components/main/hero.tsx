import React from 'react'
import Image from 'next/image'
import { CgShoppingCart } from 'react-icons/cg'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className='flex w-screen bg-gray-50 text-gray-800'>
            <div className='flex w-full lg:w-1/2 flex-col'>
                <div className=' mx-4 lg:mx-14 mt-14'>
                    <div className='flex mx-16 bg-blue-200 text-blue-600 w-[120px] h-[40px] rounded-lg justify-center items-center font-bold'>
                        Sale 70%
                    </div>
                    <div className='flex ml-16 py-14 text-6xl text-gray-900 font-bold'>
                        An Industrial Take On Streetwear
                    </div>
                    <div className='flex mx-16 pb-14 justify-center items-center w-1/2'>
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                    </div>
                    <div>
                        <Link href='/allProduct' className='bg-black p-4 mx-14 flex items-center justify-center gap-2 text-gray-200'>
                            <CgShoppingCart className= "text-2xl" />
                            Start Shopping
                        </Link>
                    </div>
                    <div className='flex my-20 ml-8 w-full justify-around'>
                        <Image src={'/hero/Featured1.webp'} alt='Image' width={100} height={35} />
                        <Image src={'/hero/Featured2.webp'} alt='Image' width={100} height={35} />
                        <Image src={'/hero/Featured3.webp'} alt='Image' width={100} height={35} />
                        <Image src={'/hero/Featured4.webp'} alt='Image' width={100} height={35} />
                    </div>  
                </div>
            </div>
            <div className='hidden lg:flex w-1/2 h-[700px] items-center'>
                <div className='flex w-[550px] h-[550px] rounded-full bg-[#FFECE3] items-center'>
                    <Image src='/hero/main.webp' alt='main' width={650} height={650} className='absolute w-[650px] h-[650px] overflow-visible' />
                </div>
            </div>
      
        </div>
    )
}