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

export class CardModel {
  constructor(
    public id: number,
    public name: string,
    public kind: Kind,
    public attribute: Attribute,
    public type: Type | null,
    public attack: number | null,
    public defence: number | null,
    public cost: number | null,
    public detail: string,
    public picture: string,
  ) {}
}
