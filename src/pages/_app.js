import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/vars.css'
import { wrapper } from '../states/configureStore'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
