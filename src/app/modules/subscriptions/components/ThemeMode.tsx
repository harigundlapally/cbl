import React, { useState } from 'react'
import clsx from 'clsx'
import { KTSVG } from './KTSVG'

/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  toggleBtnClass?: string
  toggleBtnIconClass? :string
  menuPlacement?: string
  menuTrigger?: string
}

const ThemeMode = ({toggleBtnClass = 'btn-active-light-primary btn-custom', toggleBtnIconClass = 'svg-icon-2', menuPlacement = 'bottom-end', menuTrigger = "{default: 'click', lg: 'hover'}",}: Props) => {
    const themeMode = localStorage.getItem('data-bs-theme') || 'light';
    const calculatedMode = localStorage.getItem('data-bs-theme');
    const [showMenu, setShowMenu] = useState(false);
    const switchMode = (_mode: string) => {
        localStorage.setItem('data-bs-theme', _mode);
        document.documentElement.setAttribute('data-bs-theme', _mode);
        setShowMenu(false);
    }

    return (
        <>
          {/* begin::Menu toggle */}
          <a
            href='#'
            className={clsx('position-relative btn btn-icon btn-active-light btn-active-light-primary btn-custom active btn-sm', toggleBtnClass, showMenu ? 'show menu-dropdown' : '')}
            data-kt-menu-trigger={menuTrigger}
            data-kt-menu-attach='parent'
            data-kt-menu-placement={menuPlacement}
            onMouseEnter={() => setShowMenu(true)}
          >
            {calculatedMode === 'dark' && (
              <KTSVG
                path='/media/subscriptions/gen061.svg'
                className={clsx('theme-light-hide', toggleBtnIconClass)}
              />
            )}
    
            {calculatedMode === 'light' && (
              <KTSVG
                path='/media/subscriptions/gen060.svg'
                className={clsx('theme-dark-hide', toggleBtnIconClass)}
              />
            )}
          </a>
          {/* begin::Menu toggle */}
    
          {/* begin::Menu */}
          <div
            className={clsx('menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-2 fs-base w-150px', showMenu ? 'show' : '')}
            style={{position: 'absolute', right: 0}}
            data-kt-menu='true'
            onMouseLeave={() => setShowMenu(false)}
          >
            {/* begin::Menu item */}
            <div className='menu-item px-3 my-0'>
              <a
                href='#'
                className={clsx('menu-link px-3 py-2', {active: themeMode === 'light'})}
                onClick={() => switchMode('light')}
              >
                <span className='menu-icon' data-kt-element='icon'>
                    <KTSVG path='/media/subscriptions/gen060.svg' className='svg-icon-3' />
                </span>
                <span className='menu-title'>Light</span>
              </a>
            </div>
            {/* end::Menu item */}
    
            {/* begin::Menu item */}
            <div className='menu-item px-3 my-0'>
              <a
                href='#'
                className={clsx('menu-link px-2 py-2', {active: themeMode === 'dark'})}
                onClick={() => switchMode('dark')}
              >
                <span className='menu-icon' data-kt-element='icon'>
                  <KTSVG path='/media/subscriptions/gen061.svg' className='svg-icon-3' />
                </span>
                <span className='menu-title'>Dark</span>
              </a>
            </div>
            {/* end::Menu item */}

          </div>
          {/* end::Menu */}
        </>
      )
}

export default ThemeMode