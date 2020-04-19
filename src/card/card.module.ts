import { CardDeckEntity } from './../card.deck/card.deck.entity';
import { UserService } from './../user/user.service';
import { CardResolver } from './card.resolver';
import { CardService } from './card.service';
import { CardEntity } from './card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity, CardDeckEntity])],
  providers: [UserService, CardService, CardResolver],
})
export class CardModule {}
