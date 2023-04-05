import React, { FC } from 'react'
import { useIntl } from 'react-intl';
import { disableSplashScreen, enableSplashScreen } from '../helpers/_utils';
import ShowMoreLessText from './ShowMoreLessText'
import { Link } from 'react-router-dom';

const ManageSubscriptionCard: FC = () => {
    const intl = useIntl();
    const manageSubscription = () => {
        enableSplashScreen();
        setTimeout(() => {
            disableSplashScreen();
        }, 1000);
    }

    return (
        <div className='card mb-5 mb-xl-10 manage-subscriptions-plan'>
            <div className='card-body pb-9 pb-0'>
                <div className='row g-6 g-xl-10'>
                    <div className="col-xl-4">
                        <div className='plan-details'>
                            <h3 className='mb-6 text-dark text-uppercase'>Plan Details</h3>
                            <div className='plan-type d-flex align-items-center mb-2'>
                                <span className='pe-4 fw-bold'>Pro</span>
                                <span className='badge badge-light-info fw-semibold p-3'>Yearly</span>
                            </div>
                            <div className='plan-description mb-6'>
                                <p className='text-gray-800 mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="plan-features">
                                <h4 className='mb-2'>Features</h4>
                                <ul className='p-0'>
                                    <li className='pb-3'>
                                        <ShowMoreLessText>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                        </ShowMoreLessText>
                                    </li>
                                    <li className='pb-3'>
                                        <ShowMoreLessText>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </ShowMoreLessText>
                                    </li>
                                </ul>
                            </div>
                            <div className="plan-valid d-flex align-items-center justify-content-between">
                                <span>Valid Till</span>
                                <h5>Wed, 13 March 2024</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="pricing-details px-8">
                            <h3 className='mb-6 text-dark text-uppercase'>Pricing Details</h3>
                            <div className="pricing-details-breakup">
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-gray-600'>Base Amount</span>
                                    <span className='text-dark fw-bolder'>$  258.00</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-gray-600'>Tax1</span>
                                    <span className='text-dark fw-bolder'>$  17.52</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-gray-600'>Tax2</span>
                                    <span className='text-dark fw-bolder'>$ 8.08</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-gray-600'>Total</span>
                                    <b className='text-dark fw-bolder'>$ 4.40</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4">
                        <div className="payment-details mb-3 pb-3">
                            <h3 className='mb-4 text-dark text-uppercase'>Purchased Add-ons</h3>
                            <div className="payment-details-breakup">
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-dark'>Addon 1</span>
                                </div>
                            </div>
                        </div>

                        <div className="payment-details">
                            <h3 className='mb-4 text-dark text-uppercase'>Available Add-ons</h3>
                            <div className="payment-details-breakup">
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-dark'>Addon 2</span>
                                    <Link to='/products/prod_NbuC1BUyYCmUV2/addons' className='text-primary fw-normal'>
                                        Purchase
                                    </Link>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mb-6'>
                                    <span className='fw-normal text-dark'>Addon 3</span>
                                    <Link to='/products/prod_NbuC1BUyYCmUV2/addons' className='text-primary fw-normal'>
                                        Purchase
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="manage-plan">
                            <button type='button' className='btn btn-theme btn-sm mt-4' onClick={manageSubscription}>{intl.formatMessage({ id: 'SUBSCRIPTIONS.MANAGE_SUBSCRIPTIONS.MANAGE_PLAN_BTN' })}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageSubscriptionCard