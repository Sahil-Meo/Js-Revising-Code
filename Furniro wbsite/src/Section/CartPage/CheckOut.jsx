import React from 'react'
import PageBanner from '../../Components/Banners/PageBanner'
import MaxWidthWrapper from '../../Components/Wrapper/MaxWidthWrapper'
import BorderLine from '../../Components/StaticInfo/BorderLine'
import Separator from '../../Components/Seprator.jsx/Separator'
import CheckoutDataForm from '../../Components/Forms/CheckoutDataForm'

const CheckOut = () => {
     return (
          <div>
               <PageBanner lable={'Checkout'} />
               <Separator />
               <MaxWidthWrapper>
                    <CheckoutDataForm />
               </MaxWidthWrapper>
               <Separator />
               <BorderLine />
          </div>
     )
}

export default CheckOut
