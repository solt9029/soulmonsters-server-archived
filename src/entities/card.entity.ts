import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Attribute {
  RED = 'red',
  BLUE = 'blue',
  WHITE = 'white',
  GREEN = 'green',
  PURPLE = 'purple',
  BLACK = 'black',
}

export enum Type {
  CIRCLE = 'circle',
  TRIANGLE = 'triangle',
  RECTANGLE = 'rectangle',
  WHITE_STAR = 'white_star',
  BLACK_STAR = 'black_star',
}

export enum Kind {
  MONSTER = 'monster',
  CIRCLE_MONSTER = 'circle_monster',
  QUICK = 'quick',
  BLOCK = 'block',
}

@Entity({ name: 'cards' })
export class CardEntity {
  constructor(
    id: number,
    name: string,
    kind: Kind,
    attribute: Attribute,
    type: Type,
    attack: number,
    defence: number,
    cost: number,
    detail: string,
    picture: string,
  ) {
    this.id = id;
    this.name = name;
    this.kind = kind;
    this.attribute = attribute;
    this.type = type;
    this.attack = attack;
    this.defence = defence;
    this.cost = cost;
    this.detail = detail;
    this.picture = picture;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 64 })
  name: string;

  @Column('enum', { enum: Kind })
  kind: Kind;

  @Column('enum', { enum: Attribute })
  attribute: Attribute;

  @Column('enum', { enum: Type })
  type: Type;

  @Column()
  attack: number;

  @Column()
  defence: number;

  @Column()
  cost: number;

  @Column()
  detail: string;

  @Column()
  picture: string;
}
