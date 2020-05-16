export default function makeApiRequest(url, method = 'GET', data) {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw response;
      }

      return response;
    })
    .then((res) => res.json().then((apiData) => apiData));
}
