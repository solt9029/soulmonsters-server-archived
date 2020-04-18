export class CardRo {
  constructor(
    public id: number,
    public name: string,
    public kind: string,
    public attribute: string,
    public type: string,
    public attack: number,
    public defence: number,
    public cost: number,
    public detail: string,
    public picture: string,
  ) {}
}
