import { CardModel } from './../models/card.model';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { CardRo } from './../ros/card.ro';

export abstract class CardRoFactory {
  public static createCardRo(cardModel: CardModel): CardRo {
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

  public static createCardRoPagination(
    cardModelPagination: Pagination<CardModel>,
    options: IPaginationOptions,
  ): Pagination<CardRo> {
    const { items, meta, links } = cardModelPagination;
    return new Pagination(
      items.map(value => this.createCardRo(value)),
      {
        totalItems: meta.totalItems,
        itemCount: items.length,
        itemsPerPage: options.limit,
        totalPages: meta.totalPages,
        currentPage: meta.currentPage,
      },
      links,
    );
  }
}
