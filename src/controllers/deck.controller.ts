import { AuthGuard } from '../guards/auth.guard';
import { SaveDeckDto } from './../dtos/save.deck.dto';
import { DeckModel } from './../models/deck.model';
import { DeckService } from './../services/deck.service';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';

@Controller('deck')
@UseGuards(AuthGuard)
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('save')
  async save(
    @User() userModel,
    @Body() saveDeckDto: SaveDeckDto,
  ): Promise<DeckModel> {
    return await this.deckService.save(
      new DeckModel(null, userModel.id, saveDeckDto.name),
    );
  }

  @Get('findAll')
  async findAll(): Promise<DeckModel[]> {
    return await this.deckService.findAll();
  }
}
