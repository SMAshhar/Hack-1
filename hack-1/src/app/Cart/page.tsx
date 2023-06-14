'use client'
import React from "react";
import { BiShoppingBag, BiTrash } from "react-icons/bi";

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'

import { product } from "@/lib/type";
import CartTile from "@/components/cart/cartTile";
import { client } from "@/lib/sanityClient";
import { productActions } from "@/store/slice/productSlice";
import { toast } from "react-hot-toast";


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

    const dispatch = useDispatch()

    const products = useSelector(
        (state: RootState) => state.product
    )

    console.log('this is products: ', products, products.length)

    const handleClick = (data: any) => {
        dispatch(productActions.deleteProduct(data))
        toast.success(`Product removed from cart.`)

    }

    const productsFromSanity = await getProductData()
    if (products.length > 0) {
        return (
            <div className="text-black mx-20 flex flex-col w-2/3 my-8">
                {products?.map((item: any) => (
                    <div key={item._id}>
                        {productsFromSanity.map((data: product) => (
                            <div key={data._id}>
                                {item.product == data._id &&
                                    <div className="flex">
                                        {CartTile(data, item.quantity, item.size)}
                                        <button onClick={handleClick} className='flex justify-end items-start p-4'>
                                            <BiTrash />
                                        </button>
                                    </div>
                                }

                            </div>
                        ))}
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div className="w-screen bg-white">
                <div className=" text-gray-900 text-2xl font-bold justify-start px-40 py-16 items-center flex">
                    Shopping Cart
                </div>
                <div className="flex w-screen justify-center items-center flex-col pt-8 pb-28">
                    <div className="flex text-gray-900 text-9xl font-bold justify-start p-4 items-center ">
                        <BiShoppingBag />
                    </div>
                    <div className=" text-gray-900 tracking-widest text-3xl font-bold justify-start items-center flex">
                        Your shopping bag is empty
                    </div>
                </div>
            </div>
        )
    }
}

// }
