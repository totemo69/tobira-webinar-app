// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' });
// };



export const getAttendeesCount = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/attendees/count')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};


export const getWebinars = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/webinars')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getWebinarCount = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/webinars/count')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getPayment = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/payments')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getPaymentCount = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/payments/count')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getPlans = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/plans')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const getPlansCount = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/plans/count')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};


export const getUserProfile = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/users/profile')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};


