import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Array<Item>;

  public sort(comparator?: ItemComparator): void {
      //TODO
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public toString(): string {
      return this.items.join(',');
  }
}
