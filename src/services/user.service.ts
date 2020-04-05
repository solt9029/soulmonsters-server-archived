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

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async save(userModel: UserModel): Promise<UserEntity> {
    const userEntity = UserEntityFactory.create(userModel);
    const savedUserEntity = await this.userRepository.save(userEntity);
    return UserModelFactory.create(savedUserEntity);
  }
}
