import Product from '@/components/galleryComponents/Product'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className=" max-w-[1920px] mx-auto ">
    
    <section className='mt-20 h-max w-full'>
        <Product/>
    </section>
    </main>
  )
}

export default page