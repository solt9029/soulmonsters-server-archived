import { CardDeckEntity } from './../card.deck/card.deck.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'decks' })
export class DeckEntity {
  constructor(id: number, userId: string, name: string) {
    this.id = id;
    this.userId = userId;
    this.name = name;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column({ length: 64 })
  name: string;

  // @OneToMany(
  //   type => CardDeckEntity,
  //   cardDeckEntity => cardDeckEntity.deck,
  // )
  // cardDecks: CardDeckEntity[];
}
