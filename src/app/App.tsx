import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import { LayoutProvider, LayoutSplashScreen } from './modules/subscriptions/core'
import { I18nProvider } from './modules/subscriptions/i18n/i18nProvider'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <Outlet />
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
