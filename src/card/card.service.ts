import { CardModel } from './card.model';
import { CardEntity } from './card.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardModelFactory } from 'src/card/card.model.factory';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { CardDeckEntity } from 'src/card.deck/card.deck.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
    @InjectRepository(CardDeckEntity)
    private readonly cardDeckRepository: Repository<CardDeckEntity>,
  ) {}

  async findAll(): Promise<CardModel[]> {
    const cardEntities = await this.cardRepository.find();
    return cardEntities.map(value => CardModelFactory.createCardModel(value));
  }

  async findByDeckId(deckId: number): Promise<CardModel[]> {
    const cardDeckEntities = await this.cardDeckRepository.find({
      where: { deckId },
      relations: ['card'],
    });
    const cardEntities = await this.cardRepository.findByIds(
      cardDeckEntities.map(value => value.card.id),
    );
    return cardEntities.map(cardEntity => {
      const cardDeckEntity = cardDeckEntities.find(
        cardDeckEntity => cardDeckEntity.card.id === cardEntity.id,
      );
      return CardModelFactory.createCardModel(cardEntity, cardDeckEntity.count);
    });
  }

  async findOne(id: number): Promise<CardModel | undefined> {
    const cardEntity = await this.cardRepository.findOne(id);
    if (cardEntity === undefined) {
      return undefined;
    }
    return CardModelFactory.createCardModel(cardEntity);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<CardModel>> {
    const cardEntityPagination = await paginate<CardEntity>(
      this.cardRepository,
      options,
    );

    return CardModelFactory.createCardModelPagination(
      cardEntityPagination,
      options,
    );
  }
}
