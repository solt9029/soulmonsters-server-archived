import { UserModel } from './../user/user.model';
import { DeckService } from './deck.service';
import { AuthGuard } from './../guard/auth.guard';
import { DeckObjectType } from './deck.object.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { DeckObjectTypeFactory } from './deck.object.type.factory';
import { User } from 'src/user/user.decorator';
import { SaveDeckInputType } from './save.deck.input.type';
import { DeckModel } from './deck.model';

@Resolver(of => DeckObjectType)
@UseGuards(AuthGuard)
export class DeckResolver {
  constructor(private readonly deckService: DeckService) {}

  @Query(returns => [DeckObjectType])
  async decks(@User() userModel: UserModel): Promise<DeckObjectType[]> {
    const deckModels = await this.deckService.findByUserId(userModel.id);
    return deckModels.map(value => DeckObjectTypeFactory.create(value));
  }

  @Mutation(returns => DeckObjectType)
  async saveDeck(
    @User() userModel: UserModel,
    @Args('deck') saveDeckInputType: SaveDeckInputType,
  ) {
    return await this.deckService.save(
      new DeckModel(null, userModel.id, saveDeckInputType.name),
    );
  }
}
