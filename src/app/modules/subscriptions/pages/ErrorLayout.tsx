import { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import { toAbsoluteUrl } from '../helpers/_utils';

const ErrorLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${toAbsoluteUrl('/media/subscriptions/bg7.jpg')})`;
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = 'none'
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-root'>
      <div className='d-flex flex-column flex-center flex-column-fluid'>
        <div className='d-flex flex-column flex-center text-center p-10'>
          <div className='card card-flush  w-lg-650px py-5'>
            <div className='card-body py-15 py-lg-20'>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ErrorLayout}
