import { UserEntity } from './user.entity';
import { UserModel } from './user.model';

export abstract class UserModelFactory {
  public static create(userEntity: UserEntity): UserModel {
    return new UserModel(userEntity.uid, userEntity.name, userEntity.picture);
  }
}
