import * as admin from 'firebase-admin';

export type UserEntity = {
  name?: string;
  picture?: string;
} & admin.auth.DecodedIdToken;
