import Image from 'next/image'
import React from 'react'

export default function Grid() {
    return (
        <div>
            <div>Heading
                <div className='w-1/2'></div>
                <div className='w-1/2'>Unique and Authentic Vintage Designer Jewellery</div>
            </div>
            <div>
                <div className='w-1/2'>
                    grid
                </div>
                <div>
                    <div>
                        <Image src={'/feature.webp'} alt='feature' width={200} height={300}/>
                    </div>
                    <div>
                        <div>
                            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </div>
                        <button>See All Products</button>
                    </div>
                </div>
            </div>

        </div>
    )
}