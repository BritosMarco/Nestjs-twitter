import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client';

const AuthUser = createParamDecorator((ctx: ExecutionContext) => {
  const Request = ctx.switchToHttp().getRequest();
  const user = Request.user as User;
  delete user.password;
  return user;
});

export default AuthUser;
