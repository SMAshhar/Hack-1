import Intro from '@/components/product/intro'
import ProductInfo from '@/components/product/productInfo'
import React from 'react'


export default function ProductPage({ params }: { params: any }) {

    return (
        <div className='bg-white'>

            {Intro(params.productPage)}
            <div>
                {ProductInfo(params.productPage)}
            </div>
        </div>
    )
}