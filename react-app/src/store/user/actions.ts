import { IUserProfile } from '../../models';
import { EndpointActions } from '../EndpointActions';

export const ProfileActions: EndpointActions<{}, IUserProfile> = new EndpointActions<{}, IUserProfile>('Profile');
