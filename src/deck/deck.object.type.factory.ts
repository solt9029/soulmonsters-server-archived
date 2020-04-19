import { DeckObjectType } from './deck.object.type';
import { DeckModel } from './deck.model';

export abstract class DeckObjectTypeFactory {
  public static create(deckModel: DeckModel): DeckObjectType {
    return new DeckObjectType(deckModel.id, deckModel.userId, deckModel.name);
  }
}
