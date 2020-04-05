import { UserModel } from './../models/user.model';
import { UserEntity } from './../entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntityFactory } from 'src/factories/user.entity.factory';
import { UserModelFactory } from 'src/factories/user.model.factory';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserModel[]> {
    const userEntities = await this.userRepository.find();
    return userEntities.map(value => UserModelFactory.create(value));
  }

  async save(userModel: UserModel): Promise<UserModel> {
    const userEntity = UserEntityFactory.create(userModel);
    const savedUserEntity = await this.userRepository.save(userEntity);
    return UserModelFactory.create(savedUserEntity);
  }
}
