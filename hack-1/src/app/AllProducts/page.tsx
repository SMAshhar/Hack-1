import React from "react";
import { client } from "@/lib/sanityClient";
import ProductTiles from "@/components/tile/productTile";

import { product } from "@/lib/type";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source:any) {
  return builder.image(source)
}


export async function getProductData() {
    const res = await client.fetch(`*[_type=="product"]{
        title,
        images,
        price,
        type
    }`);

    return res
}

export default async function AllProducts() {

    const data = await getProductData()

    console.log(data)   
    return (
        <div>
            <div className="text-gray-900 flex gap-16 items=center justify-around mx-16 my-8 w-full">
                {data.map((item:product) => (
                    <ProductTiles images={urlFor(item.images[0]).url()} title={item.title} type={item.type} price={item.price} />
                ))}
            </div>
        </div>
    )
}