import { UserModel } from '../models/user.model';
import { UserEntity } from '../entities/user.entity';

export abstract class UserModelFactory {
  public static create(userEntity: UserEntity): UserModel {
    return new UserModel(userEntity.id, userEntity.name);
  }
}
