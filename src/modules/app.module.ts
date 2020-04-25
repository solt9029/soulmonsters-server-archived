import { PrismaService } from './../services/prisma.service';
import { DeckResolver } from './../resolvers/deck.resolver';
import { DeckService } from './../services/deck.service';
import { CardEntity } from './../entities/card.entity';
import { CardModule } from './card.module';
import { DeckEntity } from './../entities/deck.entity';
// import { DeckModule } from './deck.module';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { UserService } from '../services/user.service';
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
    TypeOrmModule.forFeature([DeckEntity]), // HACK: I don't know why this is needed.
    TypeOrmModule.forRoot({
      type: DB_TYPE,
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [DeckEntity, CardEntity],
      synchronize: DB_SYNCHRONIZE?.toLowerCase() === 'true',
    }),
    CardModule,
  ],
  controllers: [AppController],
  providers: [UserService, DeckResolver, PrismaService],
})
export class AppModule {}
