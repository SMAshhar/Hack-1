import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkedinOption } from 'react-icons/gr'
import { IoLogoTwitter } from 'react-icons/io'
import { RiFacebookFill } from 'react-icons/ri'
import { BiCopyright } from 'react-icons/bi'

export default function Footer() {
    return (
        <div className='flex flex-col w-screen bg-gray-100'>
            <div className='flex flex-col xl:flex-row w-full mx-16 xl:mx-28 my-8 xl:my-10 text-gray-500'>
                <div className='w-1/4 h-full mr-16'>
                    <div className="mb-10">
                        <Image src={'/Logo.webp'} alt="logo" height={50} width={150} />
                    </div>
                    <div className='mb-10'>
                        Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
                    </div>
                    <div className='flex gap-4'>
                        <Link href='/' className='flex h-10 w-10 justify-center items-center text-gray-900 rounded-lg bg-gray-200'><IoLogoTwitter /></Link>
                        <Link href='/' className='flex h-10 w-10 justify-center items-center text-gray-900 rounded-lg bg-gray-200'><RiFacebookFill /></Link>
                        <Link href='/' className='flex h-10 w-10 justify-center items-center text-gray-900 rounded-lg bg-gray-200'><GrLinkedinOption /></Link>
                    </div>
                </div>
                <div className='w-1/5 flex flex-col gap-2 my-2'>
                    <div className='font-bold py-2 pt-4 xl:pt-0'>
                        Company
                    </div>
                    <Link href='#'>About</Link>
                    <Link href='#'>Terms of Use</Link>
                    <Link href='#'>Privacy Policy</Link>
                    <Link href='#'>How it Works</Link>
                    <Link href='#'>Contact Us</Link>
                </div>
                <div className='w-1/5 flex flex-col gap-2 my-2'>
                    <div className=' font-bold py-2'>
                        Support
                    </div>
                    <Link href='#'>Support Carrer</Link>
                    <Link href='#'>24h Service</Link>
                    <Link href='#'>Quick Chat</Link>
                </div>
                <div className='w-1/5 flex flex-col gap-2 my-2'>
                    <div className='font-bold py-2'>Contact</div>
                    <Link href='#'>Whatsapp</Link>
                    <Link href='#'>Support 24h</Link>
                </div>
            </div>
            <div className='flex w-full text-gray-800 border-t-2 border-gray-900'>
                <div className='flex w-1/4 py-8 mx-28'>
                    <div className='items-center'>Copyright © 2022 Dine<div>Market</div></div>
                </div>
                <div className='flex w-1/4 py-8 mx-28'>
                    <div className=' items-center'><div className='flex'>Design by. <strong> Weird </strong></div><strong>Design Studio</strong></div>
                </div>
                <div className='flex w-1/4 py-8 mx-28'>
                    <div className='items-center'><div className='flex'>Code by. <strong> SMAShhar on </strong></div><strong>github</strong></div>
                </div>
            </div>
        </div>
    )
}