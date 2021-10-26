import { GOOGLE_ANALYTICS } from '@/utils/constants';
// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag('event', action, params);
};
