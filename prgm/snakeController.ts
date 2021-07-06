import { GridPosition } from "./commonTypes.js";
import DisplayHelper from "./displayHelper.js";
import GridController from './gridController.js';
import GameController from "./gameController.js";
import ConfigurationModel from "./configurationModel.js";
import SnakeModel from './snakeModel.js';

export default class SnakeController
{
  private snakeModel = new SnakeModel();
  private gameController : GameController;

  constructor()
  {
  }

  registerGameController = (gameController: GameController) =>
  {
    this.gameController = gameController;
  }

  initSnakeBody = (snakeHead: GridPosition) => this.snakeModel.initSnakeBody(snakeHead, ConfigurationModel.SNAKE_SIZE);

  update = () =>
  {
    this.snakeModel.addSegments();
    const inputDirection = this.gameController.getNextInputDirection();
    this.snakeModel.updateSnakeBody(inputDirection);
  }

  render = (gameBoardElement: HTMLDivElement) =>
  {
    this.snakeModel.getSnakeBody().forEach(segment => {
      if (GridController.positionIsInside(segment))
        gameBoardElement.appendChild(DisplayHelper.CreateSnakeElement(segment));
    });
  }

  expandSnake = (expandRate: number) =>
  {
    this.snakeModel.setNbSegmentToAdd(expandRate);
  }

  onSnake = (position: GridPosition, ignoreHead = false) =>
  {
    return this.snakeModel.getSnakeBody().some((segment, index) => {
      if (ignoreHead && index === 0)
        return false;
      return this.equalPositions(segment, position);
    });
  }

  isSnakeOutsideGrid = () =>
  {
    return !GridController.positionIsInside(this.snakeModel.getSnakeHead());
  }

  isSnakeSelfIntersected = () =>
  {
    return this.onSnake(this.snakeModel.getSnakeHead(), true);
  }

  private equalPositions = (position1: GridPosition, position2: GridPosition) =>
  {
    return (position1.x === position2.x && position1.y === position2.y);
  }
}