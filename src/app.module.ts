import { UserEntity } from './user/user.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

const {
  DB_TYPE,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_SYNCHRONIZE,
} = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: DB_TYPE,
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [UserEntity],
      synchronize: DB_SYNCHRONIZE.toLowerCase() === 'true',
    }),
    UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
