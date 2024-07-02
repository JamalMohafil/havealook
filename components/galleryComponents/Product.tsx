"use client";
import { PRODUCTS } from "@/data/productsData";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { CATEGORIES } from "@/data/categoriesData";
import ProductShareIcons from "./ProductShareIcons";
import { Card, CardContent } from "../ui/card";
type Props = {};
import { Metadata } from "next";

const Product = (props: Props) => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [elseProd, setElseProd] = useState<any>([]);
  const router = useRouter();
  const [cat, setCat] = useState<any>("");

 const [carouselHeight, setCarouselHeight] = useState(0);
 const imageRef = useRef<any>(null);

 useEffect(() => {
   if (imageRef.current) {
     setCarouselHeight(imageRef.current.clientHeight);
   }
 }, [product]);
  useEffect(() => {
    if (productSlug) {
      const prod = PRODUCTS.find((item) => item.slug === productSlug);

      if (!prod) {
        router.push("/gallery");
      } else {
        const catW = CATEGORIES.find((item) => item.id == prod.category);
        const elseW = PRODUCTS.filter(
          (item) => item.category == prod.category && item.slug != prod.slug
        );

        if (!elseW || elseW.length < 1) {
          setElseProd(PRODUCTS.slice(0, 6));
        } else if(elseW.length < 3){
          setElseProd([...elseW,...PRODUCTS.slice(0,3)]);
        }else {
          setElseProd(elseW.slice(0, 6));
        }

        setCat(catW);
        setProduct(prod);
      }

      setLoading(false);
    }
  }, [productSlug, router]);

  if (loading) {
    return (
      <div
        className="w-[100vw]  absolute overflow-hidden bg-white top-0 left-0
     h-screen z-[500] flex justify-center items-center"
      >
        <div className="w-[40px] h-[40px] border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        className="h-[50vh] w-full flex justify-center items-center flex-col gap-6"
        dir="ltr"
      >
        <span className="text-5xl max-sm:text-3xl">
          Product not <span className="text-primary"> found</span>
        </span>
        <Link
          href={"/gallery"}
          className="px-4 py-2 bg-primary transition-all hover:bg-primary/85 rounded-lg text-xl text-white"
        >
          Back to gallery
        </Link>
      </div>
    );
  }
  return (
    <div className="w-full h-max flex flex-col justify-between max-sm:mt-28">
      <div className="w-full flex-1 flex items-center justify-center">
        <Carousel
          className={`h-full max-h-[${carouselHeight}] w-[90%] max-lg:w-[85%] mx-auto`}
          dir="ltr"
        >
          <CarouselContent>
            {product.images.map((image: any, index: number) => (
              <CarouselItem
                key={index}
                className="w-full h-full flex justify-center items-center relative"
              >
                <Image
                  ref={imageRef}
                  width={900}
                  height={600}
                  src={image}
                  className="object-contain w-full"
                  alt={product.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" />
        </Carousel>
      </div>
      <div className="pb-5 flex flex-col justify-center items-center">
        <div className="w-[80%] flex justify-start gap-y-4 items-start mt-3 ">
          <Breadcrumb dir="rtl">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">الرئيسية</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/gallery">المعرض</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/gallery?cat=${cat.id}`}>{cat.title}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-center text-4xl text-primary font-bold">
          {product.title}
        </h1>

        <div className="w-[80%] flex justify-start gap-y-4 items-start mt-8 flex-col">
          {product.sectionsDesc &&
            product.sectionsDesc.map((desc: any, i: number) => (
              <div
                key={i}
                className="flex justify-start items-start flex-col gap-4 w-full"
              >
                <h2 className="text-3xl max-w-max font-bold text-primary border-b  border-primary">
                  {desc.title}
                </h2>
                <ul className="flex flex-col gap-3.5">
                  {desc.desc.map((des: any, i: number) => (
                    <li key={i} className="list-disc max-w-[900px] text-lg">
                      {des}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="flex justify-start flex-wrap items-center w-[80%] gap-4 mt-8">
          <span className="text-black text-2xl  font-bold max-md:text-xl max-md:w-max max-md:text-nowrap">
            مشاركة على :{" "}
          </span>
          <ProductShareIcons
            url={`http://localhost:5000/${product.slug}`}
            title={"Look at this product: "}
          />
        </div>
      </div>
      <div className="w-full flex-1 max-sm:px-5 px-20 flex items-center my-10 justify-center">
        {" "}
        <Carousel
          dir="ltr"
          opts={{
            align: "start",
          }}
          className="w-full max-w-[1200px] "
        >
          <CarouselContent>
            {elseProd.map((item: any, index: number) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 max-h-[300px] max-sm:basis-2/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.link}
                    className="flex flex-col justify-center border border-black/10 
                    bg-[#fefefe] rounded-xl shadow-md p-2 py-3 items-center text-center gap-1"
                  >
                    <Image
                      src={item.images[0]}
                      className="flex justify-center items-center rounded-xl"
                      alt={item.title}
                      width={400}
                      height={400}
                    />
                    <h2 className="text-2xl text-primary font-bold">
                      {item.title}
                    </h2>
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-sm:absolute max-sm:left-[-6%] max-sm:top-[50%] max-sm:translate-y-[-50%]" />
          <CarouselNext className="max-sm:absolute max-sm:right-[-6%] max-sm:top-[50%] max-sm:translate-y-[-50%]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Product;
