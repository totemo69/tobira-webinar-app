import Cookie from '@/lib/cookie';
import { GET_REQUEST } from '@/utils/constants';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (
    response.status === 204 ||
    response.status === 205 ||
    response.status === 202
  ) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function RequestOptions(Method, body = {}, withAuth = false) {
  let requestOptions;
  const Headers = {
    'Content-Type': 'application/json',
  };
  if (Method === GET_REQUEST) {
    requestOptions = {
      method: Method,
      headers: Headers,
    };
  } else {
    requestOptions = {
      method: Method,
      headers: Headers,
      body: JSON.stringify(body),
    };
  }
  if (withAuth) {
    const [accessToken] = Cookie.getAccessToken();
    if (accessToken) {
      requestOptions.headers = {
        ...requestOptions.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }

  return requestOptions;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

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