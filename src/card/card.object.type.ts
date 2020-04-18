import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CardObjectType {
  constructor(
    id: number,
    name: string,
    kind: string,
    attribute: string,
    type: string,
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

  @Field(type => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  kind: string;

  @Field()
  attribute: string;

  @Field({ nullable: true })
  type: string | null;

  @Field({ nullable: true })
  attack: number | null;

  @Field({ nullable: true })
  defence: number | null;

  @Field({ nullable: true })
  cost: number | null;

  @Field({ nullable: true })
  detail: string;

  @Field()
  picture: string;
}
