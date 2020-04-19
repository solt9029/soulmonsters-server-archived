import { CardEntity } from './card.entity';
import { Pagination, IPaginationOptions } from 'nestjs-typeorm-paginate';
import { CardModel } from './card.model';

export abstract class CardModelFactory {
  public static createCardModel(
    cardEntity: CardEntity,
    count?: number,
  ): CardModel {
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
      count === undefined ? null : count,
    );
  }

  public static createCardModelPagination(
    cardEntityPagination: Pagination<CardEntity>,
    options: IPaginationOptions,
  ): Pagination<CardModel> {
    const { items, meta, links } = cardEntityPagination;
    return new Pagination(
      items.map(value => this.createCardModel(value)),
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
