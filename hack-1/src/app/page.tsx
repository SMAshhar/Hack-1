import Grid from '@/components/main/grid'
import Hero from '@/components/main/hero'
import Products from '@/components/main/products'
import Promotion from '@/components/main/promotion'
import Subscribe from '@/components/main/subscribe'

export default function Home() {
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
