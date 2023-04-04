import React from 'react'
import OnboardingProduct from '../components/OnboardingProduct'
import PaymentDetails from '../components/PaymentDetails'

const PaymentSuccess = () => {
  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid min-vh-100'>
      <OnboardingProduct />
      <PaymentDetails type={'success'}/>
    </div>
  )
}

export default PaymentSuccess