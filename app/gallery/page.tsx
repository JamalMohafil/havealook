import GalleryShow from '@/components/galleryComponents/GalleryShow';
import React from 'react'

type Props = {}
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Have a look | المعرض",
  description: "Have a look معرضنا من افضل انواع منتجات الاثاث التركي ",
};
const page = (props: Props) => {

  return <main className=" max-w-[1920px] mx-auto ">
    
    <section className='mt-24'>
        <GalleryShow/>
    </section>
  </main>;
}

export default page