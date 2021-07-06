export default class GameModel
{
  private _lastTimeStamp = 0;
  private _gameOver = false;

  get gameOver()
  {
    return this._gameOver;
  }

  setGameOver = (isGameOver: boolean) =>
  {
    this._gameOver = isGameOver;
  }

  setLastTimeStamp = (timeStamp: number) => 
  {
    this._lastTimeStamp = timeStamp;
  }

  getNbSecondsSinceLastTimeStamp = (timeStamp: number) => (timeStamp - this._lastTimeStamp) / 1000;
}