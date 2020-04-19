import { GqlExecutionContext } from '@nestjs/graphql';
import { UserModel } from 'src/user/user.model';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  async (data: unknown, ctx: ExecutionContext): Promise<UserModel> => {
    const req = GqlExecutionContext.create(ctx).getContext().req;
    return req.user;
  },
);
