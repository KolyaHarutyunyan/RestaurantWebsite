import Axios from 'axios';
import { API_BASE } from '..';

const path = `${API_BASE}/auth`;

export const authService = {
    signUp: (body) => Axios.post( `${API_BASE}/auth/signup`, body.user),

    signIn: (body) =>  Axios.post(`${API_BASE}/auth/signin`, body.user),


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
