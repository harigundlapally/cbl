import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoSubscriptionCard = () => {
    const navigate = useNavigate();

    return (
        <div className='card mb-5 mb-xl-10 manage-subscriptions-plan'>
            <div className='card-body py-12 text-center'>
                <div>
                    {/* <i className="fa-regular fa-snowflake fs-5x"></i> */}
                </div>
                <div>
                    <h2 className='py-6 fw-semibold'>No subscriptions found</h2>

                    <button type='button' className='btn btn-success' onClick={() => navigate('/products')}>Search Product</button>
                </div>
            </div>
        </div>
    )
}

export default NoSubscriptionCard