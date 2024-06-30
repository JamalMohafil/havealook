import { CATEGORIES } from '@/data/categoriesData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='py-6 px-12 max-md:px-5 flex flex-col text-center gap-8 justify-center items-center'>
        <h2 className='text-5xl text-primary max-sm:text-4xl'>التصنيفات</h2>
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-7 '>
            {CATEGORIES.map((item,i)=>(
                <Link href={item.link} className='flex flex-col justify-center items-center
                 text-center gap-1' key={i}>
                    <Image src={item.image} className='bg-white p-1 flex justify-center 
                    items-center shadow-lg rounded-xl' alt={item.title} width={400} height={400}/>
                    <h2 className='text-2xl text-primary'>{item.title}</h2>
                </Link>
            ))}
        </div>
    </div>
)
}

export default Categories