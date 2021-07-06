import { GridPosition } from "./commonTypes.js";
import ConfigurationModel from "./configurationModel.js";
import GridController from "./gridController.js";
import InputController from "./inputController.js";
import SnakeController from "./snakeController.js";
import AppleController from "./appleController.js";
import GameModel from "./gameModel.js";
import GameView from './gameView.js';
import ConfirmController from './confirmController.js';

export default class GameController
{
  private inputController = new InputController();
  private appleController = new AppleController();
  private snakeController = new SnakeController();
  private confirmController = new ConfirmController();
  private gameModel = new GameModel();
  private gameView = new GameView();
  private gameLoopIsOn = true;

  constructor()
  {
    this.appleController.registerGameController(this);
    this.snakeController.registerGameController(this);
    this.confirmController.registerGameController(this);
  }
  
  init = () =>
  {
    GridController.init();
    this.snakeController.initSnakeBody(GridController.getCenterPosition());
    this.appleController.initPosition();
  }

  start = () =>
  {
    window.requestAnimationFrame(this.gameLoop);
  }

  restart = () =>
  {
    //restart the game
    window.location.href = "/";
    this.gameLoopIsOn = true;
  }

  private gameLoop = (timeStamp: number) =>
  {
    if (this.gameModel.gameOver)
    {
      this.confirmController.displayForm();
      this.gameLoopIsOn = false;
    }

    if (this.gameLoopIsOn)
    {
      //set up the game loop - calls the main function on each render
      window.requestAnimationFrame(this.gameLoop);
    }

    if (this.gameModel.getNbSecondsSinceLastTimeStamp(timeStamp) < 1 / ConfigurationModel.SNAKE_SPEED) return;

    this.gameModel.setLastTimeStamp(timeStamp);

    this.update();
    this.render();
  }

  private update = () =>
  {
    this.snakeController.update();
    this.appleController.update();
    this.checkForFailure();
  }

  private render = () =>
  {
    this.gameView.clearGameBoard();
    const gameBoard = this.gameView.getGameBoard();
    this.snakeController.render(gameBoard);
    this.appleController.render(gameBoard);
  }

  private checkForFailure = () => 
  {
    this.gameModel.setGameOver(this.snakeController.isSnakeOutsideGrid() || (this.inputController.hasDirection() && this.snakeController.isSnakeSelfIntersected()));
  }

  onSnake = (position: GridPosition) =>
  {
    return this.snakeController.onSnake(position);
  }

  expandSnake = (expansionRate: number) =>
  {
    this.snakeController.expandSnake(expansionRate);
  }

  getNextInputDirection = () => 
  {
    const nextInputDirection = this.inputController.getNextInputDirection();
    this.inputController.updateLastInputDirection();
    return nextInputDirection;
  }
}