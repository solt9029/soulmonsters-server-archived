import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
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
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: Function) {
    if (!req.headers['authtoken']) {
      res.status(403).send('unauthorized');
      return;
    }

    try {
      await admin.auth().verifyIdToken(req.headers['authtoken'].toString());
      next();
    } catch (error) {
      res.status(403).send('unauthorized');
    }
  }
}
