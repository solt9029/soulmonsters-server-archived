import { DeckModel } from './../models/deck.model';
import { DeckService } from './../services/deck.service';
import { Controller, Get, Req, Post } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Request } from 'express';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post('save')
  async save(@Req() req: Request): Promise<DeckModel> {
    const userId = await (
      await admin.auth().verifyIdToken(req.headers['authtoken'].toString())
    ).uid;
    return await this.deckService.save(
      new DeckModel(null, userId, req.body.name),
    );
  }

  @Get('findAll')
  async findAll(): Promise<DeckModel[]> {
    return await this.deckService.findAll();
  }
}
