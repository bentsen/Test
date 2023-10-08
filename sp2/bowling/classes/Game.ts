import { Frame } from "./Frame";
import { Roll } from "./Roll";

export class Game {
  public frames: Frame[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
  }

  roll(pins: number) {
    const currentFrame = this.frames.find((frame) => frame.rolls.length < 2);
    if (currentFrame) {
      currentFrame.addRoll(new Roll(pins));
    }
  }

  score(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      totalScore += frame.score();

      if (frame.isStrike()) {
        if (i + 1 < this.frames.length) {
          totalScore += this.frames[i + 1].score();

          if (this.frames[i + 1].isStrike() && i + 2 < this.frames.length) {
            totalScore += this.frames[i + 2].rolls[0].pins;
          }
        }
      } else if (frame.isSpare()) {
        if (i + 1 < this.frames.length) {
          totalScore += this.frames[i + 1].rolls[0].pins;
        }
      }
    }

    return parseInt(totalScore.toString(), 10);
  }
}
