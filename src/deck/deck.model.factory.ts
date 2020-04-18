import { DeckModel } from './deck.model';
import { DeckEntity } from './deck.entity';

export abstract class DeckModelFactory {
  public static create(deckEntity: DeckEntity): DeckModel {
    return new DeckModel(deckEntity.id, deckEntity.userId, deckEntity.name);
  }
}
