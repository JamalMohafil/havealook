import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CATEGORIES } from "./categoriesData";

export const LINKS = [
  {
    name: "الرئيسية",
    link: "/",
    target: "/",
  },
  {
    name: "المعرض",
    link: "/gallery",
    target: "/gallery",
    subLinks: CATEGORIES.map((item) => {
      return {
        title: item.title,
        link: item.link,
      };
    }),
  },
  {
    name: "خدماتنا",
    link: "/#services",
    target: "/",
  },
  {
    name: "عنا",
    link: "/about-us",
    target: "/about-us",
  },
  {
    name: "اتصل بنا",
    link: "/contact-us",
    target: "/contact-us",
  },
];
export const SOCIAL = [
  {
    icon: CiFacebook,
    link: "https://www.facebook.com/havealook11",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/have_a_look_tr",
  },
  {
    icon: FaWhatsapp,
    link: "https://wa.me/+905393891450",
  },
];