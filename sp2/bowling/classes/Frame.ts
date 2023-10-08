import { Roll } from "./Roll";

export class Frame {
  rolls: Roll[] = [];

  addRoll(roll: Roll) {
    if (this.rolls.length < 2) {
      this.rolls.push(roll);
    }
  }

  isStrike(): boolean {
    return this.rolls.length === 2 && this.rolls[0].pins === 10;
  }

  isSpare(): boolean {
    return (
      this.rolls.length === 2 && this.rolls[0].pins + this.rolls[1].pins === 10
    );
  }

  score(): number {
    let total = 0;
    for (const roll of this.rolls) {
      total += roll.pins;
    }
    return total;
  }
}
