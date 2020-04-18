import { DeckModel } from './deck.model';
import { DeckEntity } from './deck.entity';

export abstract class DeckEntityFactory {
  public static create(deckModel: DeckModel): DeckEntity {
    return new DeckEntity(deckModel.id, deckModel.userId, deckModel.name);
  }
}
