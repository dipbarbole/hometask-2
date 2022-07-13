import { Item } from "./Item";

export abstract class Weapon extends Item {
  MODIFIER_CHANGE_RATE: number = 0.05;

  constructor(
    name: string,
    value: number,
    weight: number,
    baseDamage: number,
    baseDurability: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  protected set baseDamage(baseDamage: number) {
    this.baseDamage = baseDamage;
  }

  protected get baseDamage(): number {
    return this.baseDamage;
  }

  protected get baseDurability() {
    return this.baseDurability;
  }

  protected set baseDurability(baseDurability: number) {
    this.baseDurability = baseDurability;
  }

  public toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.baseDamage}, Durability: ${this.baseDurability}`;
  }
}
