import { expect } from 'chai';
import { data } from './data';
import { Auth } from './modules';
import { Business } from './modules/business';
describe('Business', function () {
  let auth;
  before(async function () {
    this.timeout(0);
    auth = await Auth.login(data.owners[0]);
  });
  describe('Create a business', function () {
    it('should create a business', async function () {
      const business = await Business.create(auth.accessToken, data.businesses[0]);
      expect(business.name).to.eq(data.businesses[0].name);
    });
  });
});
