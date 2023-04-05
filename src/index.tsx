import {createRoot} from 'react-dom/client'
// Axios
import {QueryClient, QueryClientProvider} from 'react-query'
// Apps
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 **/
import './app/modules/subscriptions/sass/style.scss'
import './app/modules/subscriptions/sass/plugins.scss'
import './app/modules/subscriptions/sass/style.react.scss'
import {AppRoutes} from './app/routing/AppRoutes'
import { MetronicI18nProvider } from './app/modules/subscriptions/i18n/Metronici18n'

const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <AppRoutes />
      </MetronicI18nProvider>
    </QueryClientProvider>
  )
}
