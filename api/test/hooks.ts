import { App } from './modules';

export const mochaHooks = {
  async beforeAll() {
    this.timeout(0);
    await App.clearDB();
  },
};
