import Image from "next/image";
import React from "react";
import cornerImage from '@/public/corner-living-room.jpg'
import { Button } from "./ui/button";
import { FaAngleLeft } from "react-icons/fa";
import corn from "@/public/best.png";
import Link from "next/link";
const IntroSection = () => {
  return (
    <div className="relative px-10 py-9 max-lg:flex max-lg:flex-col max-lg:justify-center
     max-lg:items-center max-lg:gap-5">
      <div className="absolute max-lg:static  top-[-25%] left-[-2%] max-xl:w-[550px] 
      2xl:top-[-55%] 2xl:left-[0.5%] max-md:w-[90%] max-[550px]:w-full max-lg:w-[65%]
      max-xl:h-[103%] bg-white p-2 rounded-lg shadow-lg
      ">
        <Image
          src={corn}
         width={600}
        height={600}
         alt="Corner Image"
          className="2xl:w-[700px] max-lg:w-[100%]"
        />
      </div>
      <div className="w-3/6 flex flex-col gap-5 max-lg:w-full max-lg:items-center max-lg:text-center justify-center items-start">
        <h1 className="text-5xl text-primary max-sm:text-3xl">ضع احتياجاتك الداخلية أولاً</h1>
        <p className="text-lg text-gray-800 max-sm:text-sm">
          نعمل عن كثب مع عملائنا لضمان تصميم وإنشاء مساحة ملهمة وممتعة ومريحة.
          هدفنا هو التأكد من أن كل تصميم هو انعكاس لك ولشخصيتك الفريدة. ستأتي
          احتياجاتك دائمًا في المقام الأول حتى نتمكن من تحويل رؤيتك إلى حقيقة.
        </p>
        <Link href={"/contact-us"}>
        <Button
          variant={"default"}
          className="cursor-pointer text-white font-arabic font-semibold text-xl py-6 flex gap-2 items-center justify-center flex-row-reverse"
          >
          {" "}
          <FaAngleLeft /> تواصل معنا
        </Button>
          </Link>
      </div>
    </div>
  );
};

export default IntroSection;
