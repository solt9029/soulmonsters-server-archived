import { CardModel } from './../models/card.model';
import { CardService } from './../services/card.service';
import { Controller, Get } from '@nestjs/common';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('findAll')
  async findAll(): Promise<CardModel[]> {
    return await this.cardService.findAll();
  }
}
