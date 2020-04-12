import { CardModel } from './../models/card.model';
import { CardEntity } from './../entities/card.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardModelFactory } from 'src/factories/card.model.factory';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(CardEntity)
    private readonly cardRepository: Repository<CardEntity>,
  ) {}

  async findAll(): Promise<CardModel[]> {
    const cardEntities = await this.cardRepository.find();
    return cardEntities.map(value => CardModelFactory.create(value));
  }
}
