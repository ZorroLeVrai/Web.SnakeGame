import { GridPosition } from "./commonTypes.js";

export default class SnakeModel
{
  //the snake head is at snakeBody[0]
  private snakeBody: Array<GridPosition> = [];
  private nbSegmentsToAdd = 0;

  initSnakeBody = (snakeHead: GridPosition, nbSegments: number) =>
  {
    this.snakeBody = [];
    for(let i=0; i<nbSegments; ++i)
    {
      this.snakeBody.push({...snakeHead});
    }
  }

  getSnakeBody = () => this.snakeBody;

  getSnakeHead = () => this.snakeBody[0];

  setNbSegmentToAdd = (expandRate: number) =>
  {
    this.nbSegmentsToAdd = expandRate;
  }

  updateSnakeBody = (inputDirection: GridPosition) =>
  {
    for (let i = this.snakeBody.length - 2; i>= 0; --i)
    {
      this.snakeBody[i+1] = { ...this.snakeBody[i]};
    }

    this.snakeBody[0].x += inputDirection.x;
    this.snakeBody[0].y += inputDirection.y;
  }

  addSegments = () =>
  {
    for (let i=0; i < this.nbSegmentsToAdd; ++i)
    {
      this.snakeBody.push({ ...this.snakeBody[this.snakeBody.length - 1] });
    }

    this.nbSegmentsToAdd = 0;
  }
}