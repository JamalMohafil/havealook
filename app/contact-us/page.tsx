import ContactUsForm from '@/components/contactUsComponents/ContactUsForm'
import HeroContactUs from '@/components/contactUsComponents/HeroContactUs'
import React from 'react'

type Props = {}

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