"use client";
import { CATEGORIES } from "@/data/categoriesData";
import { PRODUCTS } from "@/data/productsData";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {};

const GalleryShow = (props: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cat = searchParams.get("cat");
  const search = searchParams.get("search");

  const [activeCat, setActiveCat] = useState(cat ? cat : "all");

  useEffect(() => {
    if (cat) {
      setActiveCat(cat);
    } else {
      setActiveCat("all");
    }
  }, [cat]);

  const handleCategoryChange = (category: string) => {
    setActiveCat(category);
    router.push(`/gallery?cat=${category}`);
  };

  let newProds =
    activeCat === "all"
      ? PRODUCTS
      : PRODUCTS.filter((item) => item.category == activeCat);
   newProds = search ? newProds.filter((item) => item.title.includes(search)) : newProds
  return (
    <div className="w-full justify-center max-md:px-2 flex-col items-center flex px-12 py-10">
      <div className="w-[80%] max-lg:w-full mb-5">
        <ul className="flex flex-wrap justify-center items-center gap-4">
          <li
            onClick={() => handleCategoryChange("all")}
            className={`${
              activeCat === "all" && "bg-primary text-white"
            } border border-black/15 px-4 cursor-pointer py-2 rounded-xl`}
          >
            الكل
          </li>

          {CATEGORIES.map((item: any) => (
            <li
              key={item.id}
              onClick={() => handleCategoryChange(item.id)}
              className={`${
                activeCat == item.id && "bg-primary text-white"
              } border border-black/15 px-4 cursor-pointer py-2 rounded-xl`}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-7 ">
        <AnimatePresence>
          {newProds && newProds.length > 0 ? (
            newProds.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={item.link}
                  className="flex flex-col justify-center border border-black/10 bg-[#fefefe] rounded-xl shadow-md p-2 py-3 items-center text-center gap-1"
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
            ))
          ) : (
            <h2 className="text-center text-3xl py-10">لا يوجد منتجات</h2>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GalleryShow;
