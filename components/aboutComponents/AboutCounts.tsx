import { ABOUTCOUNTS } from '@/data/aboutData'
import React from 'react'

type Props = {}

const AboutCounts = (props: Props) => {
  return (
    <div className='flex justify-center items-center gap-5 flex-wrap py-12 px-4'>
        {ABOUTCOUNTS.map((item,i)=>(
            <div key={i} className='  border max-[1500px]:w-[30%] h-[250px] max-lg:w-[45%] max-md:w-[80%] max-[500px]:w-[95%] min-[1500px]:w-[22%]
             border-black/15 flex flex-col justify-center 
             items-center text-center  py-6 pb-10 px-6 rounded-xl'>
                <span className='text-5xl text-primary font-bold'>{item.count}</span>
                <h2 className='text-2xl font-bold mb-4 mt-3 '>{item.title}</h2>
                <span className='text-xl'>{item.desc}</span>
            </div>
        ))}
    </div>
  )
}

export default AboutCounts