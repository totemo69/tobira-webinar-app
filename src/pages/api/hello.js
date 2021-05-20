// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' });
// };

export const getAttendees = () => {
  return fetch('https://tobira-webinar-api.herokuapp.com/attendees')
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};
