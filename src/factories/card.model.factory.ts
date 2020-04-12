import { CardModel } from '../models/card.model';
import { CardEntity } from '../entities/card.entity';

export abstract class CardModelFactory {
  public static create(cardEntity: CardEntity): CardModel {
    return new CardModel(
      cardEntity.id,
      cardEntity.name,
      cardEntity.kind,
      cardEntity.attribute,
      cardEntity.type,
      cardEntity.attack,
      cardEntity.defence,
      cardEntity.cost,
      cardEntity.detail,
      cardEntity.picture,
    );
  }
}
