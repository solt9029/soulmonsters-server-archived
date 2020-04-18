import { UserService } from '../user/user.service';
import { DeckService } from './deck.service';
import { DeckController } from './deck.controller';
import { DeckEntity } from './deck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([DeckEntity])],
  controllers: [DeckController],
  providers: [DeckService, UserService],
})
export class DeckModule {}
