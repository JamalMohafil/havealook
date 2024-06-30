import BestProds from "@/components/BestProds";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import MostViews from "@/components/MostViews";
import Services from "@/components/Services";
import Image from "next/image";
import joliet from "@/public/joliet.jpg";

export default function Home() {
  return (
    <main className=" max-w-[1920px] w-full overflow-x-hidden mx-auto ">
      <Hero />
      <section className="h-max w-full bg-[#f1f1f1] max-w-[1920px] mx-auto">
        <IntroSection />
      </section>
      <section className="h-max w-full">
        <Categories />
      </section>
      <section className="h-max w-full">
        <MostViews />
      </section>
      <section className="h-max w-full" id={"services"}>
        <Services />
      </section>
      <section className="h-max w-full">
        <BestProds
          image={joliet}
          title={"الدقة والتفاصيل"}
          desc={`
           يقوم فريقنا بتصميم كل قطعة أثاث بإتقان شديد وبدقة عالية جداً حتى في
          أدق التفاصيل، حتى يتوفر لك منتج متكامل من تصميم حديث وراقي وخامات
          عالية الجودة والمتانة.`}
          btnTitle={"معرفة المزيد"}
          btnLink={"/"}
        />
      </section>
    </main>
  );
}

