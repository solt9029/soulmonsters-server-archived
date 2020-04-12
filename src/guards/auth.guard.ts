import { UserService } from '../services/user.service';
import { UserModelFactory } from 'src/factories/user.model.factory';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import * as admin from 'firebase-admin';

const {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_DATABASE_URL,
  FIREBASE_PRIVATE_KEY,
} = process.env;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: FIREBASE_CLIENT_EMAIL,
  }),
  databaseURL: FIREBASE_DATABASE_URL,
});

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(private readonly userService: UserService) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest();

    if (!req.headers['authtoken']) {
      return false;
    }

    try {
      const userEntity = await admin
        .auth()
        .verifyIdToken(req.headers['authtoken'].toString());
      console.log(userEntity);
      req.user = UserModelFactory.create(userEntity);
    } catch (err) {
      console.info(err);
      return false;
    }

    return true;
  }
}
