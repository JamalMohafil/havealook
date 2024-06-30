import GalleryShow from '@/components/galleryComponents/GalleryShow';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return <main className=" max-w-[1920px] w-full overflow-x-hidden mx-auto ">
    <section className='mt-24'>
        <GalleryShow/>
    </section>
  </main>;
}

export default page
