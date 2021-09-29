export const ACCESS_TOKEN = 'access-token';
export const MONGO_DUPLICATE_KEY = 11000;
export const COMPANY_EMAIL = 'eachbase@gmail.com';
export const PORT = 8005;

const mode = ['local', 'development', 'production'][1];
export const BASE_URL = {
  local: 'http://localhost:8005/api',
  development: 'https://menuz.eachbase.com/api',
  production: 'https://menumango.com',
}[mode];

export const DOMAIN_NAME = {
  local: 'http://localhost:8005',
  development: 'https://menuz.eachbase.com',
  production: 'https://menumango.com/',
}[mode];
