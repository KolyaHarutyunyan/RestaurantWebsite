import Axios from 'axios';
import { API_BASE } from '../constants';

const path = `${API_BASE}/auth`;

export const authService = {
    signUp: (body) => {
        let endpoint = `${path}/signup`;
        const res = Axios.post(endpoint, body.user);
        return res;
    },
    signIn: (body) => {
        let endpoint = `${path}/signin`;
        const res = Axios.post(endpoint, body.user);
        return res;
    },
    signout: (body) => {
        let endpoint = `${path}/signout`;
        const res = Axios.post(endpoint, body.user);
        return res;
    },
    changePassword: (data) => {
        const endpoint = `${path}/changePassword`;
        const res = Axios.post(endpoint, data.data.body, {
            headers: { 'access-token': data.accessToken },
        });
        return res;
    },
    checkAuh: (body) => {
        let endpoint = `${path}/checkAuth`;
        const options = body.accessToken ? { 'access-token': body.accessToken } : {};
        const res = Axios.post(endpoint, null, { headers: options });
        return res;
    },
};
