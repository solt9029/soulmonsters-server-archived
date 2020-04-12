import { AuthGuard } from './../guards/auth.guard';
import { UserService } from './../services/user.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [AuthGuard],
  providers: [UserService],
})
export class UserModule {}
