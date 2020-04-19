import { UserModel } from './../user/user.model';
import { DeckService } from './deck.service';
import { AuthGuard } from './../guard/auth.guard';
import { DeckObjectType } from './deck.object.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards, NotFoundException } from '@nestjs/common';
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

  @Query(returns => DeckObjectType)
  async deck(@User() userModel: UserModel, @Args('id') id: number) {
    const deckModel = await this.deckService.findOne(id);
    if (deckModel === undefined || deckModel.userId !== userModel.id) {
      throw new NotFoundException();
    }
    return DeckObjectTypeFactory.create(deckModel);
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
