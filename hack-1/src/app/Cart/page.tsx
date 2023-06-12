'use client'
import React from "react";
import { BiShoppingBag } from "react-icons/bi";

import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

import { product } from "@/lib/type";
import CartTile from "@/components/cart/cartTile";
import { client } from "@/lib/sanityClient";


async function getProductData() {
    const res = await client.fetch(`*[_type=="product"]{
        title,
        _id,
        images,
        type,
        price
    }`);
    return res
}


export default async function Cart() {

    const products = useSelector(
        (state: RootState) => state.product
    )

    console.log('this is products: ', products, products.length)

    const productsFromSanity = await getProductData()

    return (
        <div className="text-black mx-20 flex flex-col w-2/3 my-8">
            {products?.map((item: any) => (
                <div key={item._id}>
                    {productsFromSanity.map((data: product) => (
                        <div key={data._id}>
                            {item.product == data._id ?
                                <div>
                                    {CartTile(data, item.quantity, item.size)}
                                </div>
                                :
                                <div>
                                </div>
                            }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

// }
