import { DeckModel } from '../models/deck.model';
import { DeckEntity } from '../entities/deck.entity';

export abstract class DeckEntityFactory {
  public static create(deckModel: DeckModel): DeckEntity {
    return new DeckEntity(deckModel.id, deckModel.userId, deckModel.name);
  }
}
