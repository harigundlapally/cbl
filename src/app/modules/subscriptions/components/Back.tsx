/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { toAbsoluteUrl } from '../helpers/_utils';

const Back: FC = () => {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(-1)}
            type='button'
            className='btn btn-clean btn-sm btn-icon'
        >
            <img
                alt='Logo'
                src={toAbsoluteUrl('/media/subscriptions/back_arrow.png')}
                className='h-30px'
            />
        </button>
    )
}

export default Back;