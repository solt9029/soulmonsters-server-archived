import { DeckService } from './../services/deck.service';
import { DeckController } from './../controllers/deck.controller';
import { DeckEntity } from './../entities/deck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([DeckEntity])],
  controllers: [DeckController],
  providers: [DeckService],
})
export class DeckModule {}
