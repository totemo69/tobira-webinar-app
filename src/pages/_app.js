import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/vars.css'
// import { wrapper } from '../states/configureStore'
// import { appWithTranslation } from 'next-i18next'

// // function App({ Component, pageProps }) {
// //   return <Component {...pageProps} />
// // }

// // export default wrapper.withRedux(appWithTranslation(App))


import { Provider } from 'react-redux'
import { useStore } from './SampleRedux/store'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}