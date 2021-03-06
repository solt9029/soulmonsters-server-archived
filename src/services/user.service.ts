import { UserModel } from './../models/user.model';
import { Injectable } from '@nestjs/common';
import { UserModelFactory } from 'src/factories/user.model.factory';
import * as admin from 'firebase-admin';

@Injectable()
export class UserService {
  async findByIdToken(idToken: string): Promise<UserModel> {
    const userEntity = await admin.auth().verifyIdToken(idToken);
    return UserModelFactory.create(userEntity);
  }
}
