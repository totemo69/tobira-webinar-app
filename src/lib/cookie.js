import Cookies from 'js-cookie';
import { COOKIE_PREFIX, COOKIE_EXPIRES_DAYS } from '@/utils/constants';

const Cookie = {
  saveAuth: (data) => {
    const { token } = data;
    Cookies.set(`${COOKIE_PREFIX}token`, token, {
      expires: COOKIE_EXPIRES_DAYS,
    });
  },
  clearAuth: () => {
    Cookies.remove(`${COOKIE_PREFIX}token`);
  },
  getAccessToken: () => [
    Cookies.get(`${COOKIE_PREFIX}token`),
  ],
};

export default Cookie;