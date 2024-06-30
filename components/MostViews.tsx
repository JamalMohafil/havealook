"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PRODUCTS } from "@/data/productsData";
import Image from "next/image";
import Link from "next/link";

type Props = {};
//  <Carousel
//    opts={{
//      align: "start",
//    }}
//    className="w-full max-w-sm"
//  >
//    <CarouselContent>
//      {Array.from({ length: 5 }).map((_, index) => (
//        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//          <div className="p-1">
//            <Card>
//              <CardContent className="flex aspect-square items-center justify-center p-6">
//                <span className="text-3xl font-semibold">{index + 1}</span>
//              </CardContent>
//            </Card>
//          </div>
//        </CarouselItem>
//      ))}
//    </CarouselContent>
//    <CarouselPrevious />
//    <CarouselNext />
//  </Carousel>;
const MostViews = (props: Props) => {
  return (
    <div className="flex justify-center items-center flex-col gap-8 px-12 py-10">
      <hr className="border-0 bg-black w-full h-[1px] lg:max-w-[800px]" />
      <div className=" px-10">
        <h2 className="text-gray-800 text-2xl text-center mb-5 font-bold">
          الغرف الأكثر مشاهدة
        </h2>
        <Carousel
          dir="ltr"
          opts={{
            align: "center",
          }}
          className="w-full max-w-[100%}"
        >
          <CarouselContent>
            {PRODUCTS.slice(0, 5).map((item, i) => {
              console.log(item);
              return (
                <CarouselItem
                  key={i}
                  className="md:basis-1/2 lg:basis-1/3 max-sm:basis-[55%] xl:basis-1/3"
                >
                  <Link href={`/${item.slug}`} className="p-2">
                    <Card className="border-primary">
                      <CardContent className="flex aspect-auto   flex-col items-center justify-center p-5 max-lg:p-4">
                        <Image
                          src={item.images[0]}
                          width={350}
                          height={350}
                          alt={item.title}
                          className="lg:h-[75%] max-sm:w-[300px]  lg:w-[95%] 
                        object-cover rounded-xl max-lg:w-[90%] max-lg:h-[80%] max-lg:object-cover"
                        />
                        <span className="text-xl font-semibold">
                          {item.title}
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <hr className="border-0 bg-black w-full h-[1px] lg:max-w-[800px]" />
    </div>
  );
};

export default MostViews;
