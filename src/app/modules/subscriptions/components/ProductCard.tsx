import React, { FC } from 'react'
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/product';
import ShowMoreLessText from './ShowMoreLessText'

const ProductCard: FC = (props) => {
    let {description, feature_list, id, imagePath, name} = props as Product;

    const productImg = {
        bottom: '0',
        left: '0',
        right: '0',
        top: '0',
        margin: 'auto',
        opacity: 1,
        width: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
    }
    const intl = useIntl();
    const navigate = useNavigate();

    const selectedPlan = (id:string) => {
        setTimeout(() => {
            navigate(`/products/${id}/pricing`);
        }, 1000);
    }

    return (
        <div className='card mb-xl-5 manage-subscriptions-plan p-4 mt-0'>
            <div className='card-body p-4'>
                <div className='row'>
                    <div className="col-xl-3">
                        <div className='w-100 h-300px position-relative'>
                            <img
                                alt='product img'
                                className='position-absolute'
                                src={imagePath}
                                style={{ ...productImg }}
                            />
                        </div>
                    </div>
                    <div className="col-xl-9">
                        <div className='plan-details'>
                            <h3 className='mb-2 fs-3 fw-bolder text-dark text-uppercase'>{name}</h3>
                            <div className='plan-description mb-6'>
                                <p className='text-gray-800 mb-0'>{description}</p>
                            </div>
                            <div className="plan-features">
                                <h4 className='fs-5 mb-2'>Features</h4>
                                <ul className='ps-4'>
                                    {
                                        feature_list.split('|').map((feature, index) => (
                                            <li className='pb-1' key={`feature_${index}`}>
                                                <ShowMoreLessText width={900}>
                                                    {feature}
                                                </ShowMoreLessText>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>

                            <div className="manage-plan">
                                <button type='button' className='btn btn-theme btn-sm mt-0' onClick={() => selectedPlan(id)}>{intl.formatMessage({ id: 'SUBSCRIPTIONS.ALL_PRODUCTS.VIEW_PRODUCT_BTN' })}</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductCard