import ConfigurationModel from './configurationModel.js';
import { GridPosition } from "./commonTypes.js";
import Helper from './helper.js';

const gameBoardElement = document.getElementById("game-board");

export default class GridController
{
  static getRandomPosition()
  {
    return { x: randomNumber(1, ConfigurationModel.BOARD_NB_COLUMNS), y: randomNumber(1, ConfigurationModel.BOARD_NB_ROWS)};
  
    function randomNumber(minNumber: number, maxNumber: number)
    {
      return minNumber + Math.floor((maxNumber - minNumber +1)*Math.random());
    }
  }
  
  static getCenterPosition()
  {
    return {x: Math.round(ConfigurationModel.BOARD_NB_COLUMNS / 2), y: Math.round(ConfigurationModel.BOARD_NB_ROWS / 2)};
  }
  
  static positionIsInside(position: GridPosition)
  {
    return (
      position.x > 0 &&
      position.y > 0 &&
      position.x <= ConfigurationModel.BOARD_NB_COLUMNS &&
      position.y <= ConfigurationModel.BOARD_NB_ROWS
    );
  }

  static init()
  {
    if (null == gameBoardElement)
      return;

    Helper.setCss(gameBoardElement, {
      "grid-template-rows": `repeat(${ConfigurationModel.BOARD_NB_ROWS}, 1fr)`,
      "grid-template-columns": `repeat(${ConfigurationModel.BOARD_NB_COLUMNS}, 1fr)`
    });
  }
}