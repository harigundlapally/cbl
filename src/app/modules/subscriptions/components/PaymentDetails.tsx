import React, {FC} from 'react'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { toAbsoluteUrl } from '../helpers/_utils'
import ShowMoreLessText from './ShowMoreLessText'

type Props = {
    type: string
}

const PaymentDetails:FC<Props> = ({ type }) => {
    const intl = useIntl();
    const navigate = useNavigate()
    return (
        <div className='d-flex flex-column bgi-size-cover bgi-position-center order-1 order-lg-2 onboarding-form py-20 ps-12 text-center'>
            <div className='mb-8'>
                <h1 className='text-dark fw-bolder mb-3 heading theme-heading'>{type === 'success' ? intl.formatMessage({'id': 'SUBSCRIPTIONS.PAYMENT_SUCCESS.TITLE'}) : intl.formatMessage({'id': 'SUBSCRIPTIONS.PAYMENT_FAILURE.TITLE'})}</h1>
            </div>
            <div className='mb-11'>
                {
                    type === 'success' ?
                    <img
                        alt='Success icon'
                        src={toAbsoluteUrl('/media/subscriptions/success.png')}
                        className='h-70px'
                    />
                    : 
                    <img
                        alt='Success icon'
                        src={toAbsoluteUrl('/media/subscriptions/failure.png')}
                        className='h-70px'
                    />
                }
            </div>
            <div className='my-5'>
                <div className='d-flex align-items-center justify-content-between mb-6'>
                    <span className='fw-normal text-gray-600'>Card Details</span>
                    <div className='d-flex text-dark fw-bolder'>
                        <span>VISA</span>
                        <span>XXXX XXXX XXXX</span>
                        <span>6748</span>
                    </div>
                </div>
                <div className='d-flex align-items-center justify-content-between mb-6'>
                    <span className='fw-normal text-gray-600'>Amount Paid</span>
                    <span className='text-dark fw-bolder'>$  288</span>
                </div>
            </div>
            <div className="mb-11">
                <div className='plan-type d-flex align-items-center justify-content-center mb-3'>
                    <span className='pe-4 fs-4 fw-bold'>Pro</span>
                    <span className='badge badge-light-info fw-semibold p-3'>Yearly</span>
                </div>

                <div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className="text-start plan-features">
                <h4 className='mb-2'>Features</h4>
                <ul className='p-0'>
                    <li className='pb-3'>
                        <ShowMoreLessText width={550}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </ShowMoreLessText>
                    </li>
                    <li className='pb-3'>
                        <ShowMoreLessText width={550}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </ShowMoreLessText>
                    </li>
                </ul>
            </div>
            <div>
                <button type='button' className='btn btn-theme btn-sm' onClick={() => navigate('/products')}>{intl.formatMessage({'id': 'SUBSCRIPTIONS.CONTINUE_BROWSING'})}</button>
            </div>
        </div>
    )
}

export default PaymentDetails