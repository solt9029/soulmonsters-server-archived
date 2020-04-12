import { SaveDeckDto } from './../dtos/save.deck.dto';
import { DeckModel } from './../models/deck.model';
import { DeckService } from './../services/deck.service';
import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Request } from 'express';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('save')
  async save(
    @Body() saveDeckDto: SaveDeckDto,
    @Req() req: Request,
  ): Promise<DeckModel> {
    const userId = await (
      await admin.auth().verifyIdToken(req.headers['authtoken'].toString())
    ).uid;
    return await this.deckService.save(
      new DeckModel(null, userId, saveDeckDto.name),
    );
  }

  @Get('findAll')
  async findAll(): Promise<DeckModel[]> {
    return await this.deckService.findAll();
  }
}
