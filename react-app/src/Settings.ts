// tslint:disable completed-docs
/**
 * Application level settings
 * Use .env, .env.development, .env.test, .env.production variables to inject environment
 * specific values into the settings
 */

import { AuthenticationParameters, Configuration, LoginType } from 'react-aad-msal';

const cacheLocationTypes = {
  localStorage,
  sessionStorage
};

export interface IServiceConfig {
  base: Readonly<string>;
  productKey?: Readonly<string>;
  endpoints: {
    // tslint:disable-next-line: ban-types
    [key: string]: Readonly<string | Function>;
  };
}

export interface IApiManagerConfig {
  base: Readonly<string>;
  subscriptionKey?: Readonly<string>;
  services: {
    [key: string]: IServiceConfig;
  };
}

export interface IApplicationConfig {
  cacheLocation: Storage;
  apiManager: {
    [key: string]: IApiManagerConfig;
  };
  authentication: {
    configuration: Readonly<Configuration>;
    parameters: Readonly<AuthenticationParameters>;
    type: LoginType;
  };
}

export const applicationConfig: IApplicationConfig = {
  cacheLocation: cacheLocationTypes.localStorage,
  apiManager: {
    wwlSharedServices: {
      subscriptionKey: process.env.REACT_API_WWLSHAREDSERVICES_URL,
      base: process.env.REACT_API_WWLSHAREDSERVICES_URL || '',
      services: {
        profile: {
          base: '/userprofiles/api/',
          productKey: process.env.REACT_API_WLLSHAREDSERVICES_PROFILE_KEY,
          endpoints: {
            profile: 'profile/'
          }
        }
      }
    }
  },
  authentication: {
    configuration: {
      auth: {
        authority: process.env.REACT_AUTHENTICATION_AUTHORITY,
        clientId: process.env.REACT_AUTHENTICATION_CLIENT_ID || '',
        navigateToLoginRequestUrl: true,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        validateAuthority: true
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true
      }
    },
    parameters: {
      scopes: ['user.read', 'openid', 'profile']
    },
    type: LoginType.Redirect
  }
};
