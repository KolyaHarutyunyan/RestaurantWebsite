import axios from 'axios';
import { AuthDTO } from '../../src/auth/dto';
import { BASE_URL } from '../data';

export class Auth {
  static async login(user): Promise<AuthDTO> {
    const res = await axios.post(BASE_URL + 'auth/signin', {
      email: user.email,
      password: user.password,
    });
    return res.data;
  }
  static async logout(token): Promise<string> {
    const res = await axios.post(BASE_URL + 'auth/logout', null, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}
