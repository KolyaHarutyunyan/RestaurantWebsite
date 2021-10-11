import axios from 'axios';
import { BusinessDTO } from '../../src/business/dto';
import { BASE_URL } from '../data';

export class Business {
  static async create(token, business): Promise<BusinessDTO> {
    const res = await axios.post(BASE_URL + 'businesses', business, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}
