import { DeckEntity } from './../deck/deck.entity';
import { CardEntity } from './../card/card.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'cardDeck' })
export class CardDeckEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => CardEntity,
    cardEntity => cardEntity.cardDecks,
    { primary: true },
  )
  card: CardEntity;

  @ManyToOne(
    type => DeckEntity,
    deckEntity => deckEntity.cardDecks,
    { primary: true },
  )
  deck: DeckEntity;

  @Column()
  count: number;
}
