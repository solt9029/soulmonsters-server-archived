import { CardService } from './card.service';
import { CardObjectType } from './card.object.type';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { CardObjectTypeFactory } from './card.object.type.factory';

@Resolver(of => CardObjectType)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Query(returns => [CardObjectType])
  async cards(): Promise<CardObjectType[]> {
    const cardModels = await this.cardService.findAll();
    return cardModels.map(value => CardObjectTypeFactory.create(value));
  }

  @Query(returns => CardObjectType)
  async card(@Args('id') id: number): Promise<CardObjectType> {
    const cardModel = await this.cardService.findOne(id);
    return CardObjectTypeFactory.create(cardModel);
  }
}
