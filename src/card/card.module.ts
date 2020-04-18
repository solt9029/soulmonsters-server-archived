import { CardService } from './card.service';
import { CardController } from './card.controller';
import { CardEntity } from './card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
