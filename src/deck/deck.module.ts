import { DeckResolver } from './deck.resolver';
import { UserService } from '../user/user.service';
import { DeckService } from './deck.service';
import { DeckEntity } from './deck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([DeckEntity])],
  providers: [DeckService, UserService, DeckResolver],
})
export class DeckModule {}
