import React from "react";
import { client } from "@/lib/sanityClient";
import ProductTiles from "@/components/tile/productTile";

import { partialProduct } from "@/lib/type";
import { urlFor } from "@/lib/sanityImage";
import Link from "next/link";

export async function getProductData() {
    const res = await client.fetch(`*[_type=="product"]`);
    return res
}

export default async function AllProducts() {

    const data = await getProductData()

    console.log(data)
    return (
        <div className="flex gap-16 items=center justify-around mx-14 my-8 w-full">
            <div className="text-gray-900 flex flex-wrap max-w-[150vh] gap-16 items=center relative">
                {data.map((item: partialProduct) => (
                    <Link href={`/${item._id}`}>
                        <ProductTiles images={urlFor(item.images[0]).width(250).height(250).url()} title={item.title} type={item.type} price={item.price} />
                    </Link>
                ))}
            </div>
        </div>
    )
}