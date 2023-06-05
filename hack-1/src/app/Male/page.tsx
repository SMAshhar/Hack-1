import React from "react";
import { client } from "@/lib/sanityClient";
import { product } from "@/lib/type";
import ProductTiles from "@/components/tile/productTile";
import { urlFor } from "@/lib/sanityImage";

import { partialProduct } from "@/lib/type";
import Link from "next/link";

export async function getMaleData() {
    const res = await client.fetch(`*[_type=='product' && category._ref=='65edf871-fd97-4ab2-b721-a44038752c70']`)
    return res
}


export default async function Male() {

    const data = await getMaleData()


    return (
        <div className="w-full h-auto justify-center items-center flex mx-16 my-20">
            <div className="flex gap-14">
                {data.map((item: partialProduct) => (
                    <Link href={`/${item._id}`}>
                        <ProductTiles images={urlFor(item.images[0]).url()} price={item.price} title={item.title} type={item.type} />
                    </Link>
                ))}
            </div>
        </div>
    )
}