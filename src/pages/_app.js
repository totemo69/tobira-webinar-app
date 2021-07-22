import 'antd/dist/antd.css';
import '../styles/globals.css';
import '../styles/vars.css';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from '../states/configureStore';

// import { Provider } from 'react-redux'
// import { useStore } from './SampleRedux/store'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(appWithTranslation(App));

// export default function App({ Component, pageProps }) {
//   const store = useStore(pageProps.initialReduxState)

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }
