import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../helpers/_utils'

const Logo: FC = () => {
    const themeMode = localStorage.getItem('data-bs-theme') || 'light';
    const imageUrl = (themeMode === 'light') ? '/media/subscriptions/logo.png' : '/media/subscriptions/logo-light.png';

    return (
        <Link to='/'>
            <img
                alt='Logo'
                src={toAbsoluteUrl(imageUrl)}
                className='h-50px'
            />
        </Link>
    )
}

export default Logo