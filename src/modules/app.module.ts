import { DeckService } from './../services/deck.service';
import { DeckController } from './../controllers/deck.controller';
import { DeckEntity } from './../entities/deck.entity';
import { DeckModule } from './deck.module';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UserService } from '../services/user.service';
import { UserModule } from './user.module';
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
      entities: [DeckEntity],
      synchronize: DB_SYNCHRONIZE?.toLowerCase() === 'true',
    }),
    TypeOrmModule.forFeature([DeckEntity]),
    UserModule,
    DeckModule,
  ],
  controllers: [AppController, DeckController],
  providers: [AppService, UserService, DeckService],
})
export class AppModule {}
