import { CardRo } from './../ros/card.ro';
import { CardService } from './../services/card.service';
import { Controller, Get } from '@nestjs/common';
import { CardRoFactory } from 'src/factories/card.ro.factory';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('findAll')
  async findAll(): Promise<CardRo[]> {
    const cardModels = await this.cardService.findAll();
    return cardModels.map(value => CardRoFactory.create(value));
  }
}
