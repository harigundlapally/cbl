import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import NavDropdown from 'react-bootstrap/NavDropdown';
import ThemeMode from './ThemeMode';

const Header:FC = () => {
    return (
        <div className='app-header mb-6 align-items-center justify-content-center'>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Logo />
                    <div className='d-flex flex-row align-items-center gap-6'>
                        <NavLink to='/manage-subscriptions' className={(navData) => (navData.isActive ? 'text-primary' : 'text-dark')}>
                            Manage Plans
                        </NavLink>
                        <NavLink to='/products' className={(navData) => (navData.isActive ? 'text-primary' : 'text-dark')}>
                            Products
                        </NavLink>
                        <NavDropdown id="dropdown-basic-button" title="Category" className='text-gray-400'>
                            <NavLink to="/products?category=all" className='d-flex px-6 py-2 fw-normal'>All</NavLink>
                            <NavLink to="/products?category=providers" className='d-flex px-6 py-2 fw-normal'>Providers</NavLink>
                        </NavDropdown>
                        <NavLink to='/payment-success' className={'text-gray-400'}>
                            Payment Success
                        </NavLink>
                        <div className="app-navbar-item position-relative">
                            <ThemeMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header