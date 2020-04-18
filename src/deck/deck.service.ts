import { DeckModel } from './deck.model';
import { DeckEntity } from './deck.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeckEntityFactory } from 'src/deck/deck.entity.factory';
import { DeckModelFactory } from 'src/deck/deck.model.factory';

@Injectable()
export class DeckService {
  constructor(
    @InjectRepository(DeckEntity)
    private readonly deckRepository: Repository<DeckEntity>,
  ) {}

  async findAll(): Promise<DeckModel[]> {
    const deckEntities = await this.deckRepository.find();
    return deckEntities.map(value => DeckModelFactory.create(value));
  }

  async findByUserId(userId: number): Promise<DeckModel[]> {
    const deckEntities = await this.deckRepository.find({ where: { userId } });
    return deckEntities.map(value => DeckModelFactory.create(value));
  }

  async save(deckModel: DeckModel): Promise<DeckModel> {
    const deckEntity = DeckEntityFactory.create(deckModel);
    const savedDeckEntity = await this.deckRepository.save(deckEntity);
    return DeckModelFactory.create(savedDeckEntity);
  }
}
