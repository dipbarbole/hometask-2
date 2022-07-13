import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean = false;
  private readonly spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
  }

  public isConsumed(): boolean {
    // TODO
    return true;
  }

  public isSpoiled(): boolean {
    // TODO
    return true;
  }

  public setConsumed(consumed: boolean): void {
    // TODO
  }

  public use(): string {
    //TODO
    return "";
  }

  protected eat(): string {
    return `You eat the ${this.name}`;
  }
}
