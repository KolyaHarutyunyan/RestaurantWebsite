export const ACCESS_TOKEN = 'access-token';


export const COMPANY_EMAIL = 'eachbase@gmail.com';

const mode = ['local', 'development', 'production'][0];
export const BASE_URL = {
  local: 'http://localhost:8005/api',
  development: 'https://armat.eachbase.com/api',
  production: 'https://armat.org',
}[mode];

export const DOMAIN_NAME = {
  local: 'http://localhost:8005',
  development: 'https://armat.eachbase.com/socialLogin/',
  production: 'https://armat.org/socialLogin',
}[mode];
