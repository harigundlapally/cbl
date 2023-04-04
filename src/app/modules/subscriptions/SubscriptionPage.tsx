import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ErrorsPage } from './pages/ErrorsPage'
import ManageSubscriptions from './pages/ManageSubscriptions'
import Onboarding from './pages/Onboarding'
import PaymentFailure from './pages/PaymentFailure'
import PaymentSuccess from './pages/PaymentSuccess'
import Plans from './pages/Plans'
import Products from './pages/Products'
import { SubscriptionLayout } from './SubscriptionLayout'

const SubscriptionPage = () => (
    <Routes>
      <Route element={<SubscriptionLayout />}>
        <Route path='manage-subscriptions' element={<ManageSubscriptions />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId/pricing' element={<Plans />} />
        <Route path='products/:productId/addons' element={<Products />} />
        <Route path='onboarding' element={<Onboarding />} />
        <Route path='payment-success' element={<PaymentSuccess />} />
        <Route path='payment-failure' element={<PaymentFailure />} />
        <Route path='error/*' element={<ErrorsPage />} />
        <Route index element={<Navigate to='/products' />} />
      </Route>
    </Routes>
  )

export default SubscriptionPage