import React from "react";
import { Button } from "../ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";

type Props = {};

const HeroAbout = (props: Props) => {
  return (
    <>
      <div
        className="relative min-w-full max-[2500px]:min-h-[30vh]
     min-[2500px]:h-[920px] flex justify-center items-center bg-hero-pattern bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="justify-center z-20 items-center flex flex-col gap-5">
          <span className="relative z-10 max-sm:text-4xl shadow-xl text-white text-5xl max-sm:text-4xl text-center">
            {" </ "} حول شركة Have a
            <span className="text-primary font-extrabold"> Look </span>
            {" > "}
          </span>
        </div>
      </div>

      <div className="justify-center py-12 z-20 items-center flex flex-col gap-3">
        <span className="relative z-10 max-sm:text-4xl text-5xl max-sm:text-4xl text-center">
          لماذا شركة Have a{" "}
          <span className="text-primary font-extrabold">Look</span>{" "}
        </span>
        <hr className="border-0 bg-primary mt-3 h-0.5 max-w-[150px] w-full" />
        <span className="relative z-10 text-3xl max-sm:text-2xl font-bold text-center">
          خبرة أكثر من<span className="text-primary"> 60 سنة </span> في صناعة
          الأثاث
        </span>
        <p className="relative z-10 max-sm:max-w-[95%] max-w-[50%] text-2xl mt-4 max-sm:text-xl text-center">
          شركة Have a Look للأثاث لها خبرة عالية في مجال الأثاث الكلاسيكي
          والصناعة اليدوية الدقيقة والمتقنة بدرجة عالية جدا وإنها أيضا تواكب
          الحداثة دائما وتقوم بتصنيع الأثاث بأجهزة متقدمة مثل الحفر بالليزر
          والتصنيع بالكمبيوتر، فلا يوجد تقنية حديثة إلا وقمنا بالعمل بها لنقوم
          بإنتاج الأثاث بدرجة عالية من الدقة والرقي.
        </p>

        <Link href={"/gallery"}>
          <Button
            variant={"default"}
            className="cursor-pointer mt-5 text-white font-arabic font-semibold text-xl py-6 flex gap-2 items-center justify-center flex-row-reverse"
          >
            {" "}
            <FaAngleLeft />
            تواصل معنا
          </Button>
        </Link>
        <hr className="border-0 max-w-[740px] max-md:max-w-[500px]
         max-sm:max-w-[280px] w-full h-[0.5px] bg-black/50 mt-20"/>
      </div>
    </>
  );
};

export default HeroAbout;
