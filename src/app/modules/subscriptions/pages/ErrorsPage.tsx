/* eslint-disable jsx-a11y/anchor-is-valid */
import {Navigate, Route, Routes} from 'react-router-dom'
import { Error404 } from '../components/Error404'
import { Error500 } from '../components/Error500'
import { ErrorLayout } from './ErrorLayout'

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorLayout />}>
      <Route path='404' element={<Error404 />} />
      <Route path='500' element={<Error500 />} />
      <Route index element={<Navigate to='/subscriptions/error/404' />} />
    </Route>
  </Routes>
)

export {ErrorsPage}
