import { Outlet } from 'react-router-dom'

const SubscriptionLayout = () => {
  return (
    <div className='h-100'>
        <Outlet />
    </div>
  )
}

export {SubscriptionLayout}