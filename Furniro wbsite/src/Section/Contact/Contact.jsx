import React from 'react'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import PageBanner from '../../Components/Banners/PageBanner'
import CustomHeading from '../../Components/CustomHeading/CustomHeading'
import ContactForm from '../../Components/Forms/ContactForm'
import Separator from '../../Components/Seprator.jsx/Separator'
import StaticInfo from '../../Components/StaticInfo/StaticInfo'
import Policies from '../../Components/Policies/Policies'
import BorderLine from '../../Components/StaticInfo/BorderLine'

const Contact = () => {
     return (
          <div>
               <PageBanner lable="Contact" />
               <MaxWidthWrapper>
                    <Separator />
                    <div className="max-w-2xl flex flex-col items-center justify-center mx-auto text-center">
                         <CustomHeading Heading="Get In Touch With Us" paragraph={"For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!"} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-start justify-between mx-auto gap-16 p-4 md:p-8">
                         <StaticInfo />
                         <ContactForm />
                    </div>
                    <Separator />
               </MaxWidthWrapper>
               <Policies />
               <BorderLine />

          </div>
     )
}

export default Contact
