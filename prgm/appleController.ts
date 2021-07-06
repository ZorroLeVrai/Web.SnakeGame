import ConfigurationModel from "./configurationModel.js";
import { GridPosition } from "./commonTypes.js";
import DisplayHelper from "./displayHelper.js";
import GridController from './gridController.js';
import GameController from './gameController';

export default class AppleController
{
  private applePosition: GridPosition;
  private gameController: GameController;

  constructor()
  {
  }

  initPosition = () => 
  {
    this.applePosition = this.getRandomPosition();
  }

  registerGameController = (gameController: GameController) =>
  {
    this.gameController = gameController;
  }

  update = () =>
  {
    if (this.gameController.onSnake(this.applePosition))
    {
      this.gameController.expandSnake(ConfigurationModel.EXPANSION_RATE);
      this.applePosition = this.getRandomPosition();
    }
  }

  render = (gameBoard: HTMLDivElement) =>
  {
    gameBoard.appendChild(DisplayHelper.CreateAppleElement(this.applePosition));
  }

  private getRandomPosition = () =>
  {
    let newFoodPosition: GridPosition | null = null;
    while (newFoodPosition == null || this.gameController.onSnake(newFoodPosition))
    {
      newFoodPosition = GridController.getRandomPosition();
    }

    return newFoodPosition;
  }
}