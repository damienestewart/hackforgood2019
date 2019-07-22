export interface IAccessToken {
  /** The user access token */
  accessToken: string;

  /** Represents when the token will expire */
  expiresIn: string | null;

  /** The object representing the user's profile */
  profile: any;

  /** The token Id */
  tokenId: string;

  /** The configuration Id */
  configurationId: string;

  /** The display name for the configuration */
  configurationDisplayName: string | null;

  /** The list of permission scopes the token represents */
  scopes: any;

  /** Identifies the type of token granted */
  tokenType: any;
}
