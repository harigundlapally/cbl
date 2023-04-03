import React from 'react'
import OnboardingProduct from '../components/OnboardingProduct'
import PaymentDetails from '../components/PaymentDetails'

const PaymentFailure = () => {
  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid min-vh-100'>
      <OnboardingProduct />
      <PaymentDetails type={'failure'}/>
    </div>
  )
}

export default PaymentFailure