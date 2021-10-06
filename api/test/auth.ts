import { expect } from 'chai';
import { Auth } from './modules';
import { data } from './data';

describe('AuthN', () => {
  describe('Login', () => {
    it('should not login', async () => {
      try {
        const auth = await Auth.login(data.owners[1]);
        expect(auth).undefined;
      } catch (error) {
        expect(error.response.status).equal(404);
      }
    });
    it('should login the user', async () => {
      const auth = await Auth.login(data.owners[0]);
      expect(auth.accessToken).to.be.a('string');
    });
  });

  describe('Logout', function () {
    it('Should logout', async function () {
      const auth = await Auth.login(data.owners[0]);
      const token = await Auth.logout(auth.accessToken);
      expect(token).to.equal(auth.accessToken);
    });
  });
});
