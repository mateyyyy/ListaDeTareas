const BASE_URL = 'https://lamansysfaketaskmanagerapi.onrender.com/api';

const header = {
    'Content-Type': 'application/json',
  'auth': localStorage.getItem('token')
}

export const get = async (url) => {
    const response = fetch(`${BASE_URL}${url}`
        ,{
            method: 'GET',
            headers: header,
        });
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