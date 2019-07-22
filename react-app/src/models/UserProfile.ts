export interface IUserProfile {
  /** The profile association Id */
  associationId: Readonly<string>;

  /** The user email address */
  email: Readonly<string>;

  /** The users unique Id */
  id: Readonly<string>;
}
