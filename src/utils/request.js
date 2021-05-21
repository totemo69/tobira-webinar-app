export default function request(url,options) {
  return fetch(url, options)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => Promise.reject(error));
}
