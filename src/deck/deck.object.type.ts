import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeckObjectType {
  constructor(id: number, userId: string, name: string) {
    this.id = id;
    this.userId = userId;
    this.name = name;
  }

  @Field(type => ID)
  id: number;

  @Field()
  userId: string;

  @Field()
  name: string;
}
