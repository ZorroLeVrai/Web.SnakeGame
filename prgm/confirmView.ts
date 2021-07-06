export default class ConfirmView
{
  private confirmBoxElement = document.getElementById("confirm-form");
  private yesButtonElement = document.getElementById("yes-button");
  private noButtonElement = document.getElementById("no-button");

  showConfirmBox = () => 
  {
    this.confirmBoxElement?.classList.remove("removed");
  }

  hideConfirmBox = () => 
  {
    this.confirmBoxElement?.classList.add("removed");
  }

  addYesButtonListener = (listener: () => void) =>
  {
    this.yesButtonElement?.addEventListener("click", listener);
  }

  addNoButtonListener = (listener: () => void) =>
  {
    this.noButtonElement?.addEventListener("click", listener);
  }
}