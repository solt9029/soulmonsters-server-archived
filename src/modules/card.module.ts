import { CardService } from './../services/card.service';
import { CardController } from './../controllers/card.controller';
import { CardEntity } from './../entities/card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([CardEntity])],
  controllers: [CardController],
  providers: [CardService],
})
export class CardModule {}
