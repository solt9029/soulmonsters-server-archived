import { UserModel } from 'src/models/user.model';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext): Promise<UserModel> => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
