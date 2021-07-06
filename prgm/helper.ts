export default class Helper
{
  static setCss(element: HTMLElement, style: { [key: string]: Object})
  {
    for (const property in style)
    {
      element.style[property] = style[property];
    }
  }
}