import React from 'react'
import { Button } from './ui/button';
import { FaAngleLeft } from "react-icons/fa6";
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className="relative min-w-full max-[2500px]:min-h-[100vh]
     min-[2500px]:h-[920px] flex justify-center items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-35"></div>
      <div className='justify-center z-20 items-center flex flex-col gap-5'>

      <div className="relative z-10 shadow-xl text-white text-5xl max-sm:text-4xl text-center  text-with-border">شركة Have a <span className='text-primary font-extrabold'>Look</span> للاثاث التركي</div>
     <Link href={'/gallery'}>
      <Button  variant={'default'} className='cursor-pointer text-white font-arabic font-semibold text-xl py-6 flex gap-2 items-center justify-center flex-row-reverse'> <FaAngleLeft/> مشاهدة اعمالنا</Button>
     </Link>
      </div>
    </div>
  );
};


export default Hero