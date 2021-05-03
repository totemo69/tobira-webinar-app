import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/vars.css'
import { wrapper } from '../states/configureStore'
import { appWithTranslation } from 'next-i18next'
<<<<<<< HEAD
=======

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(appWithTranslation(App))

>>>>>>> 77870e6163db60950bbef6304ad88f682c8a7716

// import { Provider } from 'react-redux'
// import { useStore } from './SampleRedux/store'

<<<<<<< HEAD
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(appWithTranslation(App))

=======
>>>>>>> 77870e6163db60950bbef6304ad88f682c8a7716
// export default function App({ Component, pageProps }) {
//   const store = useStore(pageProps.initialReduxState)

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   )
// }