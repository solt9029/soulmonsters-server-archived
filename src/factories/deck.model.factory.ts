import { DeckModel } from '../models/deck.model';
import { DeckEntity } from '../entities/deck.entity';

export abstract class DeckModelFactory {
  public static create(deckEntity: DeckEntity): DeckModel {
    return new DeckModel(deckEntity.id, deckEntity.userId, deckEntity.name);
  }
}
