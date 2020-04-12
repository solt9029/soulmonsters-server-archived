import { Test, TestingModule } from '@nestjs/testing';
import { DeckController } from './deck.controller';

describe('Deck Controller', () => {
  let controller: DeckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeckController],
    }).compile();

    controller = module.get<DeckController>(DeckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
