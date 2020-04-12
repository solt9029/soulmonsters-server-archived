import { Pagination } from 'nestjs-typeorm-paginate';
import { CardRo } from './../ros/card.ro';
import { CardService } from './../services/card.service';
import { Controller, Get, Query } from '@nestjs/common';
import { CardRoFactory } from 'src/factories/card.ro.factory';

@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get('findAll')
  async findAll(): Promise<CardRo[]> {
    const cardModels = await this.cardService.findAll();
    return cardModels.map(value => CardRoFactory.createCardRo(value));
  }

  @Get('')
  async index(
    @Query('page') page = 1,
    @Query('limit') limit = 40,
  ): Promise<Pagination<CardRo>> {
    const options = { page, limit };
    const cardModelPagination = await this.cardService.paginate(options);
    return CardRoFactory.createCardRoPagination(cardModelPagination, options);
  }
}
