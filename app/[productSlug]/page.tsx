import Product from "@/components/galleryComponents/Product";
import { PRODUCTS } from "@/data/productsData";
import { CATEGORIES } from "@/data/categoriesData";
import { Metadata } from "next";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  params:{
    productSlug:string;
  }
}
// export async function generateStaticParams() {
//   const paths = PRODUCTS.map((product) => ({
//     productSlug: product.slug,
//   }));

//   return paths;
// }
export async function generateStaticParams(){
  const paths = PRODUCTS.map((item)=>({productSlug:item.slug}))
  return paths;
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {productSlug} = params;
  const prod = PRODUCTS.find((item) => item.slug === productSlug);
  if(!prod) return {
    title:"Product Not Found",
    description:"Product Not Found"
  };

  return {
    title:`Have a look | ${prod.title}`,
    description:`Have a look ${prod.title} من افضل انواع منتجات الاثاث التركي `,
  }
}

const Page = ({ params }: Props) => {

  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="mt-20 h-max w-full">
        <Product />
      </section>
    </main>
  );
};

export default Page;
