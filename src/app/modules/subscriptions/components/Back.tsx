/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { toAbsoluteUrl } from '../helpers/_utils';

const Back: FC = () => {
    const navigate = useNavigate();
    const themeMode = localStorage.getItem('data-bs-theme') || 'light';
    const imageUrl = (themeMode === 'light') ? '/media/subscriptions/back_arrow-black.png' : '/media/subscriptions/back_arrow-white.png';

    return (
        <button
            onClick={() => navigate(-1)}
            type='button'
            className='btn btn-clean btn-sm btn-icon'
        >
            <img
                alt='Logo'
                src={toAbsoluteUrl(imageUrl)}
            />
        </button>
    )
}

export default Back;