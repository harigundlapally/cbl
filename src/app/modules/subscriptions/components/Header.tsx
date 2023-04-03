import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const Header:FC = () => {
    return (
        <div className='app-header mb-6 flex-column'>
            <div className="app-container">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="pt-2 ps-2">
                        <Logo />
                    </div>
                    <div className='d-flex flex-row align-items-center gap-6'>
                        <NavLink to='/manage-subscriptions' className={(navData) => (navData.isActive ? 'text-primary' : 'text-gray-600')}>
                            Manage Plans
                        </NavLink>
                        <NavLink to='/products' className={(navData) => (navData.isActive ? 'text-primary' : 'text-gray-600')}>
                            Products
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header