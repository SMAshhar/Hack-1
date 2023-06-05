'use client'
import { urlFor } from '@/lib/sanityImage'
import React, { useState } from 'react'


export default function Images1({ images }: any) {

    const [activeImage, SetActiveImage] = useState(null)

    const handleHoverImage = (index: any) => {
        SetActiveImage(index)
    }

    return (
        <div className='flex main-h-screen items-center justify-center w-[50rem] bg-white'>
            <div className="max-w-6xl mx-auto">
                <div className="flex ">
                    <div className="flex justify-center items-center">
                        {images.map((image: any, index: number) => (
                            <div className={`h-[60vh] ${index==0?'w-[15rem]':'w-16'} hover:w-[30rem] overflow-hidden shadown-lg justify-center items-center transition-all duration-200`}>
                                <img
                                    key={index}
                                    src={urlFor(image).url()}
                                    height={650} width={650}
                                    className={`cursor-pointer ${index==0?'w-[30rem]':'w-16'} h-full hover:w-[30rem] hover:scale-105 object-cover duration-200 ${activeImage === index ? 'opacity-100' : 'opacity-70'}`} onMouseEnter={() => handleHoverImage(index)} onMouseLeave={() => handleHoverImage(null)} />
                            </div>
                        ))}
                    </div>
                    {/* {activeImage !== null && (
                        <img
                            src={images[activeImage]}
                            className='h-40 w-40 ml-4'
                        />
                    )} */}
                </div>
            </div>
        </div>
    )
}
