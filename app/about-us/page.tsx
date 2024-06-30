import HeroAbout from "@/components/aboutComponents/HeroAbout";
import Image from "next/image";
import istanbul from "@/public/istanbul.jpg";
import BestProds from "@/components/BestProds";
import AboutCounts from "@/components/aboutComponents/AboutCounts";
export default function Page() {
  return (
    <main className=" max-w-[1920px] mx-auto ">
      <section className="mt-[75px] h-max w-full">
        <HeroAbout />
      </section>
      <section className=" h-max w-full">
        <BestProds
          image={istanbul}
          title={`بدأنا في "اسطنبول" عاصمة العالم`}
          desc={`
          تقوم إسطنبول بتصميم وصناعة الأثاث المنزلي من الأخشاب. تباع هذه المنتجات
           ليس فقط داخل تركيا بل أيضًا للدول العربية والأوروبية. تتميز هذه الصناعة
           بالمتانة والجودة. تتم صناعة الأثاث في الورش الصغيرة ومن ثم يتم عرضه في 
          المعارض أو بيعه للتصدير خارج البلاد. وتتوفر أيضًا مصانع كبيرة مجهزة بأحدث 
          التكنولوجيا لتصنيع الأثاث والتي حققت اسمًا كبيرًا في الأسواق العالمية لصناعة الأثاث. 
          `}
        />
      </section>
      <section className=" h-max w-full">
        <BestProds
        right={true}
          image={
            "https://www.mazayafurniture.com/wp-content/uploads/2023/06/Zan.jpg"
          }
          title={`خامات عالية الجودة
`}
          desc={`في  شركة Have a look للأثاث نقوم بصناعة بأجود الخامات،
             فإننا نصنع كل قطع الأثاث بالخشب الزان الروماني المميز بمتانته وتحمله
             لكل ظروف البيئة الصعبة كما أنه يمتاز بشكله الجميل وملمسه الناعم وسهولة تشكيله.


          `}
        />
      </section>
      <section className=" h-max w-full">
        <BestProds
          image={
            "https://www.mazayafurniture.com/wp-content/uploads/2023/06/julia.jpg"
          }
          title={`أسعارنا تنافسية

`}
          desc={`مع خبرتنا العالية في سوق الأثاث، فإن أسعارنا دائما تنافسية مقارنة بسوق الأثاث ليس في دمياط ولا مصر فقط ولكن في العالم أجمع. لك أن تقارن أسعارنا بأي منافس لنا مع الأخذ في الاعتبار جودة المنتج وخاماته العالية ودقة تصنيعه وخدمة ما بعد البيع، فستجد دائما ما يرضي طلبك بدون خيار للتضحية أو المفاضلة بين الجودة والسعر.
          `}
        />
      </section>
      <section className="h-max w-full">
        <AboutCounts/>
      </section>
    </main>
  );
}
