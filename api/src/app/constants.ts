const dbs = {
  DEV: 'DEV',
  TEST_H: 'TEST_H',
  TEST_E: 'TEST_E',
  PROD: 'productionv1',
};

const DB = dbs.PROD;
let connectionString = null;
if (DB === dbs.PROD) {
  connectionString = `mongodb+srv://jackblack:pixQD#WHd4DP(QWH@main.uvs5v.mongodb.net/${DB}?retryWrites=true&w=majority`;
} else {
  connectionString = `mongodb+srv://test-menuz-user:menuzeachbase@maincluster.gh27e.mongodb.net/${DB}?retryWrites=true&w=majority`;
}

export const MONGO_CONN_STR = connectionString;
