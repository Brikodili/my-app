import axios from 'axios';

import CONFIG from '../config';

axios.defaults.headers = {
    Authorization: `Bearer ${CONFIG.token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const api = axios.create({
    baseURL: CONFIG.host,
});

export default api;
