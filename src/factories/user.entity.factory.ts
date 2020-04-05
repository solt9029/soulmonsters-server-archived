import { UserModel } from '../models/user.model';
import { UserEntity } from '../entities/user.entity';

export abstract class UserEntityFactory {
  public static create(userModel: UserModel): UserEntity {
    return new UserEntity(userModel.id, userModel.name);
  }
}
