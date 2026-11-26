const API_URL = 'http://localhost:3000';

async function apiCall(method, url, body) {
    const targetUrl = API_URL + url;
    const options = { method };
    if (body) {
        options.body = JSON.stringify(body);
        options.headers = {
            'Content-Type': 'application/json'
        };
    }
    const response = await fetch(targetUrl, options);
    const resultObject = await response.json();
    if (response.ok && resultObject.success) {
        return resultObject.result;
    }
    throw new Error(resultObject.error || 'Something went wrong');
}

const loginUser = (username) =>
    apiCall('POST', '/users/login', { username });

export { loginUser };
