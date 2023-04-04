import axios from "axios";

const defaultOptions = {
    baseURL: process.env.REACT_APP_API_URL,
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    },
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(req => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
        req.headers['Authorization'] = 'Bearer ' + token;
    }
    return req;
});

instance.interceptors.response.use(res => {
    return res;
});

export default instance;