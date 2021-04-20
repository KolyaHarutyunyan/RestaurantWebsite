import { API_BASE } from '../constants';
import axios from "axios";

const path = `${API_BASE}`;
const token = localStorage.getItem('access-token')

export const authService = {

    signIn: (body) => {
        let endpoint = `${path}/auth/signin`;
        const res = axios.post(endpoint, body);
        return res;
    },

    logOut: () => {
        let endpoint = `${path}/auth/logout`;
        const res = axios.get(endpoint, { headers: { 'access-token': token } } , { "token":   token});
        return res;
    }

};
