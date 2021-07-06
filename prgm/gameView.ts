export default class GameView
{
  private gameBoardElement = document.getElementById("game-board") as HTMLDivElement;

  getGameBoard = () => this.gameBoardElement;

  clearGameBoard = () =>
  {
    this.gameBoardElement.innerHTML = "";
  }
}



