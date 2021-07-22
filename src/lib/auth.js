import Router from 'next/router';
import { useEffect } from 'react';
import { WEBINAR_ROUTE } from '@/utils/constants';
import Cookie from '@/lib/cookie';

export const login = ({ token }) => {
  Cookie.saveAuth(token);
};

export const logout = () => {
  Cookie.clearAuth();
};

export const withAuthSync = (WrappedComponent) => {
  const Wrapper = (props) => {
    useEffect(() => {
      const [token] = Cookie.getAccessToken();
      // If there's no token, it means the user is not logged in.
      if (!token) {
        Router.push(WEBINAR_ROUTE.LOGIN);
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};
