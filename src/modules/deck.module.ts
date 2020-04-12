import { DeckService } from './../services/deck.service';
import { DeckController } from './../controllers/Deck.controller';
import { DeckEntity } from './../entities/Deck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([DeckEntity])],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}
