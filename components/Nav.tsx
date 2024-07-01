'use client'
import { LINKS, SOCIAL } from '@/data/navData';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
    import { Button } from "@/components/ui/button";
    import { Input } from "@/components/ui/input";
import { FaAngleLeft } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';
import { CiTextAlignRight } from "react-icons/ci";
import { useEffect, useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
import Logo from "@/public/logo.png";
import Image from 'next/image';

type Props = {}
type itemSocial = {
    icon: any;
    link: string;
}
const Nav = (props: Props) => {
  const router = useRouter()
         const pathname = usePathname();  
  console.log(pathname,'path')
const [activeModel, setActiveModel] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
console.log(LINKS)
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 450) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);  
  const [showSubLinks, setShowSubLinks] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
return (
  <header
    className={`w-[100vw] fixed max-w-[1920px] mx-auto left-[50%] translate-x-[-50%] top-0 z-[500]
       transition-all bg-white py-1 border-b flex-row-reverse 
       max-lg:justify-between max-lg:px-6 border-gray-400 flex justify-around items-center
        ${isScrolled && "blurer"} `}
  >
    <Link href={'/'}>
    <Image src={Logo} width={150} height={150} alt='logo' />
    </Link>
    <nav
      className={`flex items-center max-lg:h-screen max-lg:fixed
      max-lg:top-0 max-lg:overflow-y-auto max-lg:flex-col
        max-lg:w-[250px] max-lg:shadow-lg max-lg:z-[999] max-lg:bg-white justify-center transition-all duration-200
         gap-4 flex-row-reverse ${
           activeModel ? "max-lg:left-0" : " max-lg:left-[-150%] "
         }`}
    >
      <span
        className="absolute top-[5%] right-[5%] text-2xl cursor-pointer shadow-lg p-1
             border border-black rounded-full lg:hidden"
        onClick={() => setActiveModel(!activeModel)}
      >
        <CgClose />
      </span>
      <ul className="flex justify-center max-lg:flex-col items-center gap-9 max-lg:gap-4 ">
        {LINKS.map((item, i) => {
          if(item.subLinks){
  return (
    <li key={item.link} className="relative group w-full">
      <div className="flex justify-center items-center text-center  gap-3">
        <Link
          href={item.link}
          className={`text-xl hover:text-primary transition-all ${pathname == item.target && "text-primary"}`}
        >
          {item.name}
        </Link>
        <button
          className="lg:hidden text-2xl mt-2 flex justify-center items-center text-primary"
          onClick={() => setShowSubLinks(!showSubLinks)}
        >
          {showSubLinks ? (
            <IoIosRemoveCircleOutline />
          ) : (
            <IoIosAddCircleOutline />
          )}
        </button>
      </div>
      <ul
        className={`lg:absolute lg:h-0 lg:overflow-hidden  lg:w-[160px] lg:shadow-xl lg:left-[-30%] 
           bg-white lg:border border-primary lg:group-hover:flex flex-col opacity-0  
           lg:group-hover:opacity-100 lg:group-hover:h-[250px] lg:top-[130%] transition-all overflow-hidden 
           duration-300 ease-in-out ${
             showSubLinks
               ? "max-lg:max-h-[500px] max-lg:opacity-100 max-lg:w-[150px] max-lg:mt-5"
               : "max-lg:max-h-0 max-lg:opacity-0"
           } lg:max-h-none`}
      >
        {item.subLinks.map((subItem, subIndex) => (
          <li
            className="hover:text-primary hover:bg-black py-2 px-2 border-t border-gray-200"
            key={subIndex}
          >
            <Link href={subItem.link}>{subItem.title}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
          }else {
            return (
              <li key={i}>
                <Link
                  href={item.link}
                  className={`text-xl hover:text-primary transition-all text-nowrap  ${
                    pathname == item.target && item.name !== 'خدماتنا' && "text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          }
        })}
      </ul>
      <ul className="flex items-center justify-center gap-2">
        {SOCIAL.map((item: itemSocial, i: number) => (
          <li
            key={i}
            className="hover:bg-gray-100 cursor-pointer group flex justify-center items-center h-11 w-11 rounded-full"
          >
            <a
              href={item.link}
              target="_blank"
              className="text-2xl group-hover:text-primary transition-all whitespace-nowrap"
            >
              <item.icon />
            </a>
          </li>
        ))}
      </ul>

      <form onSubmit={(e)=>{
        e.preventDefault();
        router.push(`/gallery?&search=${searchTerm}&`)
      }} className="flex w-full max-w-[200px] items-center space-x-2">
        <Input
          type="search"
          placeholder="البحث"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          className="rounded-l-none  focus:ring-0 focus:outline-0 focus-visible:ring-0 hover:outline-0"
        />
        <Button className="text-xl p-2 rounded-r-none" type="submit">
          <CiSearch />
        </Button>
      </form>
    </nav>
    <span
      className="text-black text-3xl cursor-pointer lg:hidden"
      onClick={() => setActiveModel(!activeModel)}
    >
      <CiTextAlignRight />
    </span>
  </header>
);
}

export default Nav
