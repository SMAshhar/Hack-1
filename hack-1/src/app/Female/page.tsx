import ProductTiles from "@/components/tile/productTile";
import React from "react";
import { urlFor } from "@/lib/sanityImage";
import { client } from "@/lib/sanityClient";
import { partialProduct } from "@/lib/type";
import Link from "next/link";

async function getFemaleData() {
    const res = await client.fetch(`*[_type=='product' && category._ref=='433c1d75-4d05-410d-8f1b-cab93eff7bef']`)
    return res
}

export default async function Female() {

    const data = await getFemaleData()

    return (
        <div className="w-full m-14 justify-center flex-wrap items-center flex">
            <div className="flex flex-wrap gap-16">
                {data.map((item: partialProduct) => (
                    <Link key={item._id} href={`/${item._id}`}>
                        <ProductTiles images={urlFor(item.images[0]).url()} title={item.title} type={item.type} price={item.price} />
                    </Link>
                ))}
            </div>
        </div>
    )
}