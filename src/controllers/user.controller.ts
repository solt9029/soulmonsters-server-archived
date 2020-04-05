import { UserService } from './../services/user.service';
import { Controller, Get } from '@nestjs/common';
import { UserModel } from 'src/models/user.model';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('save')
  async save(): Promise<UserModel> {
    return await this.userService.save(new UserModel(null, 'test-user'));
  }
}
