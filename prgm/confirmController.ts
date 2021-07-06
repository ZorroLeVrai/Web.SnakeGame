import ConfirmView from "./confirmView.js";
import GameController from "./gameController.js";

export default class ConfirmController
{
  private confirmView = new ConfirmView();
  private gameController: GameController;

  constructor()
  {
    this.confirmView.addYesButtonListener(this.handleYesButton);
    this.confirmView.addNoButtonListener(this.handleNoButton);
  }

  registerGameController(controller: GameController)
  {
    this.gameController = controller;
  }

  displayForm = () =>
  {
    this.confirmView.showConfirmBox();
  }

  private hideForm = () =>
  {
    this.confirmView.hideConfirmBox();
  }

  private handleYesButton = () =>
  {
    this.hideForm();

    //restart game
    this.gameController.restart();
  }

  private handleNoButton = () =>
  {
    this.hideForm();
  }
}