import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const BestProds = ({ image, title, desc, btnTitle,btnLink,right }: any) => {
  // Image URL

  return (
    <div className="flex items-center max-lg:flex-col-reverse px-12 max-sm:px-4 py-10 bg-white">
      {right ? (
        <>
          <div className="flex-1 flex justify-center items-center ">
            <Image
              src={image}
              alt="Product"
              width={600}
              height={600}
              className="rounded-lg max-lg:w-[90%] shadow-md animate-bounce-image"
            />
          </div>
          <div className=" w-3/6 p-5 gap-y-7 flex flex-col max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:w-full">
            <h2 className="text-primary text-5xl font-bold ">{title}</h2>
            <p className="text-gray-700 text-xl max-w-[600px]">{desc}</p>
            {btnLink && btnTitle && (
              <Link href={btnLink}>
                <Button
                  variant={"default"}
                  className="text-white max-w-[150px] bg-primary text-xl pb-3"
                >
                  {btnTitle}
                </Button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <>
          <div className=" w-3/6 p-5 gap-y-7 flex flex-col max-lg:justify-center max-lg:items-center max-lg:text-center max-lg:w-full">
            <h2 className="text-primary text-5xl font-bold ">{title}</h2>
            <p className="text-gray-700 text-xl ">{desc}</p>
            {btnLink && btnTitle && (
              <Link href={btnLink}>
                <Button
                  variant={"default"}
                  className="text-white max-w-[150px] bg-primary text-xl pb-3"
                >
                  {btnTitle}
                </Button>
              </Link>
            )}
          </div>
          <div className="flex-1 flex justify-center items-center ">
            <Image
              src={image}
              alt="Product"
              width={600}
              height={600}
              className="rounded-lg max-lg:w-[90%] shadow-md animate-bounce-image"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default BestProds;
