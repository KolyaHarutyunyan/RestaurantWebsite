// import { HttpStatus } from '@nestjs/common';
// import { expect } from 'chai';
// import { before } from 'mocha';
// import { data } from './data';
// import { masterOffice } from './hooks';
// import { File, Auth, Office } from './modules';

// describe('File', function () {
//   let omAuth, bmAuth, adminAuth;

//   before(async function () {
//     this.timeout(0);
//     adminAuth = await Auth.login(data.admins.SUPER_ADMIN);
//     omAuth = await Auth.login(data.agents.OM);
//     bmAuth = await Auth.login(data.agents.BM);
//   });

//   describe('Create a File', function () {
//     it('Should create a file', async function () {
//       const createOffice = await Office.createOffice(
//         adminAuth.token,
//         data.offices[0],
//       );
//       data.files[0].resource = createOffice.id;
//       const testFile = await File.createFile(adminAuth.token, data.files[0]);
//       expect(testFile.url).to.be.a('string');
//       expect(testFile.onModel).to.equal(data.files[0].onModel);
//       expect(testFile.type).to.equal(data.files[0].type);
//     });
//     it('Should NOT create a File with wrong url', async function () {
//       try {
//         const createOffice = await Office.createOffice(
//           adminAuth.token,
//           data.offices[0],
//         );
//         data.files[0].resource = createOffice.id;
//         const testFile = await File.createFile(adminAuth.token, data.files[1]);
//         expect(testFile).not.exist;
//       } catch (e) {
//         expect(e.response?.status).to.equal(HttpStatus.BAD_REQUEST);
//       }
//     });
//     it('Should NOT create a File with wrong onModel', async function () {
//       try {
//         const createOffice = await Office.createOffice(
//           adminAuth.token,
//           data.offices[0],
//         );
//         data.files[0].resource = createOffice.id;
//         const testFile = await File.createFile(adminAuth.token, data.files[2]);
//         expect(testFile).not.exist;
//       } catch (e) {
//         expect(e.response?.status).to.equal(HttpStatus.BAD_REQUEST);
//       }
//     });
//   });
//   it('Should NOT create a File with wrong type', async function () {
//     try {
//       const createOffice = await Office.createOffice(
//         adminAuth.token,
//         data.offices[0],
//       );
//       data.files[0].resource = createOffice.id;
//       const testFile = await File.createFile(adminAuth.token, data.files[3]);
//       expect(testFile).not.exist;
//     } catch (e) {
//       expect(e.response?.status).to.equal(HttpStatus.BAD_REQUEST);
//     }
//   });
// });
