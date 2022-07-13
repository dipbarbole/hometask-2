import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private numberOfSlices: number;
  private sliceEaten: number;

  constructor(
    numberOfSlices: number,
    spoiled: boolean,
    value?: number,
    weight?: number
  ) {
    super("pizza", value, weight, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  protected eat(): string {
    //TODO
    return "You eat a slice of the pizza.";
  }
}
