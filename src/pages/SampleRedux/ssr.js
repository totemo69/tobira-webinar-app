import Page from '../components/page';
import { initializeStore } from '../store';

export default function SSR(){
  return <Page />;
}


export function getServerSideProps() {
  const reduxeStore = initializeStore();
  const { dispatch } = reduxeStore;

  dispatch({
    type: 'TICK',
    light: false,
    lastUpdate: Date.now(),
  });

  return { props: {initialReduxState: reduxeStore.getState() }};
}