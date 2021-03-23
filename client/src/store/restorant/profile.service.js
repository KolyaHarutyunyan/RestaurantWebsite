import Axios from 'axios';
import { API_BASE } from '../constants';

const path = `${API_BASE}/users`;
const getAuthToken = () => {
    return localStorage.getItem('access-token');
};

export const profileService = {
    updateAvatar: (data) => {
        const endpoint = `${path}/${data.id}/avatar`;
        const res = Axios.post(endpoint, data.body, {
            headers: { 'access-token': data.token },
        });
        return res;
    },
    editProfile: (data) => {
        const token = getAuthToken();
        const endpoint = `${API_BASE}/auth/editProfile`;
        const res = Axios.post(endpoint, data.data, {
            headers: { 'access-token': token },
        });
        return res;
    },
};
