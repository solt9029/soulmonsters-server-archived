import { SaveDeckDto } from './../dtos/save.deck.dto';
import { DeckModel } from './../models/deck.model';
import { DeckService } from './../services/deck.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('save')
  async save(
    @User() userModel,
    @Body() saveDeckDto: SaveDeckDto,
  ): Promise<DeckModel> {
    return await this.deckService.save(
      new DeckModel(null, userModel.uid, saveDeckDto.name),
    );
  }

  @Get('findAll')
  async findAll(): Promise<DeckModel[]> {
    return await this.deckService.findAll();
  }
}
