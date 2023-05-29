import Intro from '@/components/product/intro'
import ProductInfo from '@/components/product/productInfo'
import React from 'react'

export default function ProductPage() {
    return(
        <div className='bg-white'>
            <Intro />
            <ProductInfo />
        </div>
    )
}