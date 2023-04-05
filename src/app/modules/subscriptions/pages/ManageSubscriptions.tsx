import clsx from 'clsx'
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import ManageSubscriptionCard from '../components/ManageSubscriptionCard'

const ManageSubscriptions: FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className={clsx('app-default')}>
      <Header />

      <div className="container">
        <div className='manage-subscriptions mt-8'>
          <div className={clsx('app-toolbar flex-column')}>
            <div className="py-lg-6">
              <h1 className={clsx('page-heading flex-grow-1 text-dark mb-2 heading theme-heading')}>
                {intl.formatMessage({id: 'SUBSCRIPTIONS.MANAGE_SUBSCRIPTIONS.TITLE'})}
              </h1>
              <p>
                {intl.formatMessage({id: 'SUBSCRIPTIONS.MANAGE_SUBSCRIPTIONS.MANAGE_PRODUCTS_TEXT'})}
              </p>
            </div>

            <ManageSubscriptionCard />
            <ManageSubscriptionCard />
            {/* <NoSubscriptionCard /> */}

            <div className='mb-6'>
              <p>{intl.formatMessage({id: 'SUBSCRIPTIONS.MANAGE_SUBSCRIPTIONS.VIEW_PRODUCTS_DESC'})}</p>
              <button onClick={() => navigate('/products')} className='btn btn-theme btn-sm'>{intl.formatMessage({id: 'SUBSCRIPTIONS.MANAGE_SUBSCRIPTIONS.VIEW_PRODUCTS_BTN'})}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageSubscriptions