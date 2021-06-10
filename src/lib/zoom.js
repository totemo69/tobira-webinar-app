import { ZOOM_URL, ZOOM_CLIENT_ID, ZOOM_AUTH_CALLBACK } from '@/utils/constants';

const authRequest = () => {
  return `${ZOOM_URL}oauth/authorize?response_type=code&client_id=${ZOOM_CLIENT_ID}&redirect_uri=${ZOOM_AUTH_CALLBACK}`;
};

export { authRequest };