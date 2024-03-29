import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import 'inter-ui'
import React, { StrictMode } from 'react'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { Provider } from 'react-redux'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { NetworkContextName } from './constants'
import App from './pages/App'
import store from './state'
 //import { useIsDarkMode } from './state/user/hooks'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import { lightTheme } from './theme'
import { FixedGlobalStyle, ThemedGlobalStyle } from './components/Shared'
import getLibrary from './utils/getLibrary'
import RefreshProvider from './contexts/RefreshProvider'
import PriceProvider from './contexts/PriceProvider'
import { I18nProvider } from 'i18n/i18n-react'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

// eslint-disable-line no-unused-expressions
const GOOGLE_ANALYTICS_ID: string | undefined = process.env.REACT_APP_GOOGLE_ANALYTICS_ID
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID)
  ReactGA.set({
    customBrowserType: !isMobile ? 'desktop' : 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : 'mobileRegular'
  })
} else {
  ReactGA.initialize('test', { testMode: true, debug: true })
}

window.addEventListener('error', error => {
  localStorage && localStorage.removeItem('redux_localstorage_simple_lists')
  ReactGA.exception({
    description: `${error.message} @ ${error.filename}:${error.lineno}:${error.colno}`,
    fatal: true
  })
})

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}

function ThemeProvider({ children }: { children?: React.ReactNode }) {
  // const isDark = useIsDarkMode()
  // const theme = isDark ? darkTheme : lightTheme

  return <StyledThemeProvider theme={lightTheme}>{children}</StyledThemeProvider>
}

ReactDOM.render(
  <StrictMode>
    <FixedGlobalStyle />
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <Updaters />
          <RefreshProvider>
            <PriceProvider>
              <ThemeProvider>
                <I18nProvider>
                  <ThemedGlobalStyle />
                  <App />
                </I18nProvider>
              </ThemeProvider>
            </PriceProvider>
          </RefreshProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
