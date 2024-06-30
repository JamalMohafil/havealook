import { CATEGORIES } from "@/data/categoriesData";
import { LINKS } from "@/data/navData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Logo from '@/public/logo_white.png'
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-[100vw] flex-col px-6 py-5 bg-[#21220d] text-white flex justify-center items-center">
      <div className="flex justify-around max-md:flex-col max-md:gap-2 max-md:mb-9 w-full mb-6 items-center">
        <Link href={"/"}>
          <Image src={Logo} width={230} height={230} alt="Have a look logo" />
        </Link>
        <div className="flex justify-center items-center max-[480px]:items-start max-[480px]:gap-4 max-[480px]:flex-col gap-9">
          <div className="flex justify-center items-center gap-3">
            <span className="bg-[#4c4d52] p-3.5 text-3xl rounded-full justify-center items-center">
              <FaPhone />
            </span>
            <div className="flex flex-col justify-center items-start gap-1">
              <h2 className="text-xl font-bold">اتصل بنا</h2>
              <a href={"tel:+905393891450"} target="_blank" dir="ltr">
                +90 539 389 14 50
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <span className="bg-[#4c4d52] p-3.5 text-3xl rounded-full justify-center items-center">
              <FiMapPin />
            </span>
            <div className="flex flex-col justify-center items-start gap-1">
              <h2 className="text-xl font-bold">موقعنا</h2>
              <a href={"#"} target="_blank" dir="ltr">
                اسطنبول الفاتح
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-around items-start w-full max-md:flex-col max-md:justify-center max-md:items-center
      max-md:gap-6"
      >
        <div
          className="flex lg:w-[30%] max-[480px]:flex-col max-[480px]:justify-center max-[480px]:items-center
        max-[480px]:text-center max-[480px]:gap-6 justify-around
         max-md:gap-0 max-md:justify-evenly max-md:w-full items-start gap-6"
        >
          <div className="w-max">
            <h2 className="text-2xl text-primary mb-3 font-bold">
              روابط الموقع
            </h2>
            <ul className="flex flex-col gap-2">
              {LINKS.map((item, i) => (
                <li key={i}>
                  <Link href={item.link} className="text-lg hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-max">
            <h2 className="text-2xl text-primary mb-3 font-bold">
              تصنيفات الموقع
            </h2>
            <ul className="flex flex-col gap-2">
              {CATEGORIES.slice(0, 5).map((item, i) => (
                <li key={i}>
                  <Link href={item.link} className="text-lg hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-[#4c4d52] max-[480px]:max-w-[100%] max-md:max-w-[80%] px-4 py-4 max-w-[400px] max-lg:max-w-[320px] rounded-lg">
          <h2 className="text-2xl font-bold mb-3">الوصف</h2>
          <p className="leading-8">
            {`
            شركة "Have a Look" تصمم وتصنع أثاث منزلي فاخر بجودة عالية. تُباع
            منتجاتها في تركيا وتُصدر إلى الدول العربية والأوروبية، مع التركيز
            على المتانة والتصاميم المميزة.
          `}
          </p>
        </div>
      </div>
      <div className="border-t border-t-primary w-full mt-8">
        <p className="text-lg text-center mt-6" dir="ltr">
          &copy; {new Date().getFullYear()} Have a{" "}
          <span className="font-bold text-primary">Look</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
