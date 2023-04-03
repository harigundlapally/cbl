import React from 'react'
import OnboardingForm from '../components/OnboardingForm'
import OnboardingProduct from '../components/OnboardingProduct'

const Onboarding = () => {
  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid min-vh-100'>
      <OnboardingProduct />
      <OnboardingForm />
    </div>
  )
}

export default Onboarding