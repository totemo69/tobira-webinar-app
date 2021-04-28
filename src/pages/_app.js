import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/vars.css'
import { wrapper } from '../states/configureStore'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(appWithTranslation(App))
