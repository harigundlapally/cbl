import React, { FC } from 'react'
import Back from './Back'
import Logo from './Logo'

const OnboardingProduct: FC = () => {
    return (
        <div className='d-flex flex-column flex-lg-row-fluid py-20 pe-12 order-2 order-lg-1'>
            <Back />
            <div className="pt-6 pb-12">
                <Logo />
            </div>
            <div className='pb-8'>
                <h1>Heading</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            </div>

            <div className='onboarding-product'>
                <h2>Pro</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <div className='fw-bold my-8 d-flex gap-2 align-items-end'>
                <span className='display-4'>$24</span>
                <span className='fs-6 text-gray-500 mb-1'>/ month</span>
            </div>
        </div>
    )
}

export default OnboardingProduct