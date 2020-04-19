import { CardDeckEntity } from './card.deck/card.deck.entity';
import { CardEntity } from './card/card.entity';
import { CardModule } from './card/card.module';
import { DeckEntity } from './deck/deck.entity';
import { DeckModule } from './deck/deck.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

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
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'src/schema.graphql',
    }),
    TypeOrmModule.forFeature([DeckEntity]), // HACK: I don't know why this is needed.
    TypeOrmModule.forRoot({
      type: DB_TYPE,
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [DeckEntity, CardEntity, CardDeckEntity],
      synchronize: DB_SYNCHRONIZE?.toLowerCase() === 'true',
    }),
    DeckModule,
    CardModule,
  ],
  controllers: [AppController],
  providers: [UserService],
})
export class AppModule {}
