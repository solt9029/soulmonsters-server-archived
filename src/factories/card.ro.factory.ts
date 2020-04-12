import { CardRo } from './../ros/card.ro';
import { CardModel } from '../models/card.model';

export abstract class CardRoFactory {
  public static create(cardModel: CardModel): CardRo {
    return new CardRo(
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
    );
  }
}
