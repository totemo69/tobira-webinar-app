import 'antd/dist/antd.css'
import { wrapper } from 'src/store/store'
import '../styles/globals.css'
import '../styles/vars.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// export default MyApp
export default wrapper.withRedux(MyApp)
