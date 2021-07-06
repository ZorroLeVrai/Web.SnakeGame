import {GridPosition} from './commonTypes.js';

export default class InputController
{
  private nextInputDirection: GridPosition = {x:0, y:0};
  private lastInputDirection: GridPosition = {x:0, y:0};

  constructor()
  {
    window.addEventListener("keydown", e => this.handleKeyDown(e));
  }

  private handleKeyDown = (kbEvt: KeyboardEvent) =>
  {
    switch (kbEvt.key)
    {
      case 'ArrowUp':
        if (this.lastInputDirection.y === 0)
          this.nextInputDirection = { x: 0, y: -1 };
        break;
      case 'ArrowDown':
        if (this.lastInputDirection.y === 0)
          this.nextInputDirection = { x: 0, y: 1 };
        break;
      case 'ArrowLeft':
        if (this.lastInputDirection.x === 0)
          this.nextInputDirection = { x: -1, y: 0 };
        break;
      case 'ArrowRight':
        if (this.lastInputDirection.x === 0)
          this.nextInputDirection = { x: 1, y: 0 };
        break;
    }
  }

  public getNextInputDirection = () =>
  {
    return this.nextInputDirection;
  }

  public updateLastInputDirection = () =>
  {
    this.lastInputDirection = this.nextInputDirection;
  }

  public hasDirection = () => this.nextInputDirection.x !== 0 || this.nextInputDirection.y !== 0;
}