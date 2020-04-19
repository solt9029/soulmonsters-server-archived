import { AuthGuard } from './../guard/auth.guard';
import { CardService } from './card.service';
import { CardObjectType } from './card.object.type';
import { Resolver, Query } from '@nestjs/graphql';
import { CardObjectTypeFactory } from './card.object.type.factory';
import { UseGuards } from '@nestjs/common';
import { User } from 'src/user/user.decorator';

@Resolver(of => CardObjectType)
@UseGuards(AuthGuard)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Query(returns => [CardObjectType])
  async cards(): Promise<CardObjectType[]> {
    const cardModels = await this.cardService.findAll();
    return cardModels.map(value => CardObjectTypeFactory.create(value));
  }
}
