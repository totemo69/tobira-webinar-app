export const request = (url,options) => {
  return fetch(url, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
};

export const addData = (url, options, data) => {
  return fetch(url, options,  {
    method: 'post',
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
  
};