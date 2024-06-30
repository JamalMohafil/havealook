import Image from "next/image";
import React from "react";
import fromAir from "@/public/from-airport.jpg";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="w-full px-24 max-lg:px-12 py-10 flex flex-col gap-8">
      <h1 className="text-5xl text-primary text-center">خدمات</h1>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 place-content-center">
        <div className="flex flex-col justify-between items-center text-center gap-4">
          <Image
            src={fromAir}
            alt="from-airport"
            width={400}
            height={400}
            className="object-cover border w-full h-[300px] border-black object-right
             bg-white p-1 shadow-lg rounded-[50px]"
          />
          <div className="flex flex-col justify-center items-center text-center gap-4 h-full">
            <h2 className="text-2xl text-primary font-bold">
              الاستقبال من المطار
            </h2>
            <p className="text-lg text-gray-700">
              نوفر لكم خدمة الاستقبال من المطار للزبائن الاتية من خارج تركيا مع
              حجز فندق وتكسي خاص بالعميل
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-center gap-4">
          <Image
            src={
              "https://www.mazayafurniture.com/wp-content/uploads/2023/01/Shipping.jpg"
            }
            alt="shipping"
            width={400}
            height={400}
            className="object-cover border w-full h-[300px] border-black object-right
             bg-white p-1 shadow-lg  rounded-[50px]"
          />
          <div className="flex flex-col justify-center items-center text-center gap-4 h-full">
            <h2 className="text-2xl text-primary font-bold">الشحن </h2>
            <p className="text-lg text-gray-700">
              بعيداً كنت أو قريب، فكل ما تتمناه سيصل إلى بيتك ولن يتركك موظفونا
              حتى يجدوا منك السعادة التامة والرضا.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center text-center gap-4">
          <Image
            src={
              "https://www.mazayafurniture.com/wp-content/uploads/2022/07/Modern-Dining-Room.jpg"
            }
            alt="designing"
            width={400}
            height={400}
            className="object-cover border w-full h-[300px] border-black object-right
             bg-white p-1 shadow-lg rounded-[50px]"
          />
          <div className="flex flex-col justify-center items-center text-center gap-4 h-full">
            <h2 className="text-2xl text-primary font-bold">التصميم </h2>
            <p className="text-lg text-gray-700">
              لك فقط أن تختار وتقرر ما هو التصميم المناسب لك ولذوقك، وسيتم
              تنفيذه لك على درجة عالية من الدقة والجودة التي تستحقها.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
