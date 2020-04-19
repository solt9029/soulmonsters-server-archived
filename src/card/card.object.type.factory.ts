import { CardObjectType } from './card.object.type';
import { CardModel } from './card.model';

export abstract class CardObjectTypeFactory {
  public static create(cardModel: CardModel): CardObjectType {
    return new CardObjectType(
      cardModel.id,
      cardModel.name,
      cardModel.kind,
      cardModel.attribute,
      cardModel.type,
      cardModel.attack,
      cardModel.defence,
      cardModel.cost,
      cardModel.detail,
      cardModel.picture,
      cardModel.count,
    );
  }
}
