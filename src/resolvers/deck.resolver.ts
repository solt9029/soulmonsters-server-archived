import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { PrismaService } from '../services/prisma.service';

@Resolver()
export class DeckResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  decks(@Args() args) {
    return this.prisma.query.decks(args);
  }

  @Mutation()
  createDeck(@Args() args) {
    return this.prisma.mutation.createDeck(args);
  }
}
