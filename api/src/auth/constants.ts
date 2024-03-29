/** Contant Primitieves */
import { BASE_URL } from 'src/util/constants';

export const SALT_ROUNDS = 8;

export const JWT_SECRET_SIGNIN = '*iadgwuihdap98hwd8hwAWdn*Aj9wdj-a;w/Adwif93jwdbAluw8h84!32';
export const JWT_SECRET_FORGET_PASS = 'abdp9awhd8awh9ej9idj((AJdWdnianwidA';
export const MONGO_DUPLICATE_KEY = 11000;
export const GOOGLE_CLIENT_ID =
  '1043897618844-745gb27kdtu99jar0bpum0cf163qi950.apps.googleusercontent.com';
export const GOOGLE_CLIENT_SECRET = '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';
export const GOOGLE_CALLBACK_URL = `${BASE_URL}/owners/socials/google/redirected`;

export const FACEBOOK_APP_ID = '975507153217521';
export const FACEBOOK_APP_SECRET = '0d84b2c18fae6a05dd35199e2ba1146e';
export const FACEBOOK_CALLBACK_URL = `${BASE_URL}/owners/socials/facebook/redirected`;

export const TWITTER_CONSUMER_KEY = '1n2AslBMovtqX5MmlGEhJn3ZV';
export const TWITTER_CONSUMER_SECRET = 'xJxenSoJgYAeD0TBYYhzY5D7kWsR4O7CNzGlxiMi1J3qgIbf67';
export const TWITTER_CALLBACK_URL = `${BASE_URL}/owners/socials/twitter/redirected`;

export const APPLE_CLIENT_ID = 'com.menumango.service';
export const APPLE_TEAM_ID = 'CNAUZUZ88T';
export const APPLE_KEY_ID = 'X435C3KUNZ';
export const APPLE_PRIVATE_KEY_LOCATION = './AuthKey.p8';
export const APPLE_CALLBACK_URL = `${BASE_URL}/owners/socials/apple/redirected`;

export const COMPANY_EMAIL = 'eachbase@gmail.com';

export const ACCESS_TOKEN = 'access-token';
export const RESET_TOKEN = 'reset-token';
export const SESSION_EXPIRATION = '24h';

/** Enums */
export enum Role {
  ADMIN = 'ADMIN',
  OWNER = 'OWNER',
}

export enum AccountStatus {
  // Active user account
  ACTIVE = 'ACTIVE',
  // User closed the account
  CLOSED = 'CLOSED',
  // User account was suspended by the admin
  SUSPENDED = 'SUSPENDED',
}
