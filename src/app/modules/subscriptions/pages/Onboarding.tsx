import React, { useEffect } from 'react'
import OnboardingForm from '../components/OnboardingForm'
import OnboardingProduct from '../components/OnboardingProduct'

const Onboarding = () => {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 10);

    document.body.classList.add('bg-two-color');
  
    return () => {
      document.body.classList.remove('bg-two-color');
    }
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">

          <OnboardingProduct />
        </div>
        <div className="col-md-6">
          <OnboardingForm />

        </div>
      </div>
    </div>
  )
}

export default Onboarding