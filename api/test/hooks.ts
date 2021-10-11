import { exit } from 'process';
import { AuthDTO } from '../src/auth';
import { data } from './data';
import { App, Auth, Owner } from './modules';

export let auth: AuthDTO = null;
export let owner = null;

export const mochaHooks = {
  async beforeAll() {
    this.timeout(0);
    try {
      await App.clearDB();
      owner = await Owner.createOwner(data.owners[0]);
      auth = await Auth.login(data.owners[0]);
    } catch (err) {
      console.log(err.response.data);
      exit(1);
    }
  },
};
