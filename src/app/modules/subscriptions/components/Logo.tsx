import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { toAbsoluteUrl } from '../helpers/_utils'

const Logo: FC = () => {
    return (
        <Link to='/'>
            <img
                alt='Logo'
                src={toAbsoluteUrl('/media/subscriptions/logo.png')}
                className='h-50px'
            />
        </Link>
    )
}

export default Logo