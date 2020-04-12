import { UserModelFactory } from 'src/factories/user.model.factory';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import * as admin from 'firebase-admin';

export const User = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    const userEntity = await admin
      .auth()
      .verifyIdToken(req.headers['authtoken'].toString());

    console.log(userEntity);

    return UserModelFactory.create(userEntity);
  },
);
