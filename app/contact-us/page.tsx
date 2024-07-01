import ContactUsForm from '@/components/contactUsComponents/ContactUsForm'
import HeroContactUs from '@/components/contactUsComponents/HeroContactUs'
import { Metadata } from 'next'
import React from 'react'

type Props = {}
export const metadata:Metadata = {
  title: "Have a look | تواصل معنا",
  description: "Have a look تواصل معنا معنا من افضل انواع منتجات الاثاث التركي ",

}
const ContactUsPage = (props: Props) => {
  return (
    <main className=" max-w-[1920px] mx-auto ">
      <section className='h-max w-full mt-16'>
        <HeroContactUs/>
      </section>
      <section className='h-max w-full'>
        <ContactUsForm/>
      </section>
</main>
  )
}

export default ContactUsPage
