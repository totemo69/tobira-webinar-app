export const request = (url,options) => {
  return fetch(url, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addData = (url, options) => {
  return fetch(url, options,  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "_id": "string",
      "email": "string",
      "password": "string",
      "firstName": "string",
      "lastName": "string",
      "zoomAccounts": [
        {}
      ],
      "createdAt": "2021-05-25T12:42:51.357Z",
      "updatedAt": "2021-05-25T12:42:51.357Z"
    }),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};