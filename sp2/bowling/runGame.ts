import { Game } from "./classes/Game";

export function runGame() {
  // Usage:
  const bowlingGame = new Game();

  // Add rolls for each frame
  bowlingGame.roll(4);
  bowlingGame.roll(6); // Spare
  bowlingGame.roll(10); // Strike
  bowlingGame.roll(7);
  bowlingGame.roll(2); // Spare
  bowlingGame.roll(9);
  bowlingGame.roll(0);
  bowlingGame.roll(10); // Strike
  bowlingGame.roll(10); // Strike
  bowlingGame.roll(10); // Strike, 10th frame

  const totalScore = bowlingGame.score();
  console.log("Total Score: ", totalScore);
}
