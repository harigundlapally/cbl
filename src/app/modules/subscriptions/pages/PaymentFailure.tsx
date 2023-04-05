import React, { useEffect } from 'react'
import OnboardingProduct from '../components/OnboardingProduct'
import PaymentDetails from '../components/PaymentDetails'

const PaymentFailure = () => {

  useEffect(() => {
    document.body.classList.add('bg-two-color');
  
    return () => {
      document.body.classList.remove('bg-two-color');
    }
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
          <OnboardingProduct />
        </div>
        <div className="col-lg-6">
          <PaymentDetails type={'failure'}/>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailure