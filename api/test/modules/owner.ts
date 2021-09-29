import axios from 'axios';
import { OwnerDTO } from 'src/owner/dto';
import { BASE_URL } from '../data';

export enum OwnerStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
export class Owner {
  static async createOwner(token, owner): Promise<OwnerDTO> {
    const res = await axios.post(BASE_URL + 'owners/test', owner, {
      headers: { 'access-token': token },
    });
    return res.data;
  }
}
