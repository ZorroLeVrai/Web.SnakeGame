import { GridPosition } from "./commonTypes";

export default class DisplayHelper
{
  private static CreateElement(xPosition: number, yPosition: number, elementName: string) : HTMLDivElement
  {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridColumnStart = xPosition.toString();
    snakeElement.style.gridRowStart = yPosition.toString();
    snakeElement.classList.add(elementName);
    return snakeElement;
  }

  static CreateAppleElement = (position: GridPosition) =>
    DisplayHelper.CreateElement(position.x, position.y, "apple");

  static CreateSnakeElement = (position: GridPosition) =>
  DisplayHelper.CreateElement(position.x, position.y, "snake");
}