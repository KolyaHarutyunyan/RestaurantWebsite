/** Contant Primitieves */
const mode = ['local', 'development', 'production'][0];
export const BASE_URL = {
  local: 'http://localhost:8005/api',
  development: 'https://armat.eachbase.com/api',
  production: 'https://armat.org',
}[mode];

export const DOMAIN_NAME = {
  local: 'http://localhost:3000',
  development: 'https://armat.eachbase.com/socialLogin/',
  production: 'https://armat.org/socialLogin',
}[mode];

export const SALT_ROUNDS = 8;

export const JWT_SECRET_SIGNIN =
  '*ADwnda9wjdn*Aj9wdj-a;w/Adwif93jwdbAluw8h84!32';
export const JWT_SECRET_FORGET_PASS = 'abdp9awhd8awh9ej9idj((AJdWdnianwidA';
export const MONGO_DUPLICATE_KEY = 11000;
export const GOOGLE_CLIENT_ID =
  '484728626492-0q1dkm300qvn81raptblpfhp8n5kc0ti.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = '4WTYGSQ8Vt2Q9zRzyXVBlE8C';
export const GOOGLE_CALLBACK_URL = `${BASE_URL}/auth/google/redirected`;

export const FACEBOOK_APP_ID = '668391627157311';
export const FACEBOOK_APP_SECRET = 'cbcb7fd7ad2dfb401e67842313b07670';
export const FACEBOOK_CALLBACK_URL = `${BASE_URL}/auth/facebook/redirected`;

export const TWITTER_CONSUMER_KEY = '1n2AslBMovtqX5MmlGEhJn3ZV';
export const TWITTER_CONSUMER_SECRET =
  'xJxenSoJgYAeD0TBYYhzY5D7kWsR4O7CNzGlxiMi1J3qgIbf67';
export const TWITTER_CALLBACK_URL = `${BASE_URL}/auth/twitter/redirected`;

export const APPLE_CLIENT_ID = 'com.menumango.service';
export const APPLE_TEAM_ID = 'CNAUZUZ88T';
export const APPLE_KEY_ID = 'X435C3KUNZ';
export const APPLE_PRIVATE_KEY_LOCATION = './AuthKey_X435C3KUNZ.p8';
export const APPLE_CALLBACK_URL = `${BASE_URL}/auth/apple/redirected`;

export const COMPANY_EMAIL = 'eachbase@gmail.com';

export const ACCESS_TOKEN = 'access-token';
export const RESET_TOKEN = 'reset-token';
/** Enums */

export enum Role {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
}

export enum AccountStatus {
  // Active user account
  ACTIVE = 22111,
  // User closed the account
  CLOSED = 22222,
  // User account was suspended by the admin
  SUSPENDED = 22333,
}
