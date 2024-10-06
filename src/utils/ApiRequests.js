const BASE_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api';

const header = {
    'Content-Type': 'application/json',
  'auth': localStorage.getItem('token')
}

export const get = async (url, setElements) => {
    const response = fetch(`${BASE_URL}${url}`
        ,{
            method: 'GET',
            headers: header,
        })
        .then((response) => {
            return response.json()})
        .then((data) => {
            console.log(data);
          setElements(data.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        ;
    return await response;
}

export const post = async (url, body) => {
    const response = fetch(`${BASE_URL}${url}`
        ,{
            method: 'POST',
            headers: header,
            body: JSON.stringify(body),
        });
    return await response;
}