import Grid from '@/components/main/grid'
import Hero from '@/components/main/hero'
import Products from '@/components/main/products'
import Promotion from '@/components/main/promotion'
import Subscribe from '@/components/main/subscribe'
import Image from 'next/image'

interface IProduct {
  title:string,
  description:string,
  image:string,
  category: {
    name:string
  }
}


// export async function getData() {
//   const res = await client.fetch(`*[_type=="product"]{
//     price,
//     image,
//     title,
//     name,
//     image,
//     category:{
//       name
//     }
//   }`)

// }


export default async function Home() {


  return (
    <div>
      <Hero />
      <Promotion />
      <Products />
      <Grid />
      <Subscribe />
    </div>
  )
}
