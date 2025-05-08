/**
 * src\components\Slider\handlers\hadleRightMove.ts
 */
import React from "react";
import { handlerMoveFC, SliderElements } from "./useMove";

export function handlerRightMoveFC(e: React.MouseEvent): boolean {

  const result = handlerMoveFC(e) as SliderElements;
  if (Object.keys(result).length === 0) {
    return false;
  }
  e.stopPropagation();
  e.preventDefault();
  const sliderElemHtml = result.elements[0];
  if (!sliderElemHtml) {
    console.error("[handlerLeftMoveF]: 'sliderElemHtml' was not found!");
    return false; 
  }
  const slederBox = result.slider;
  const sliderElement = sliderElemHtml.cloneNode(true);
  sliderElemHtml.remove();
  // (slederBox as HTMLElement).insertAdjacentHTML("beforeend", (sliderElement as HTMLElement).outerHTML); 
  if (slederBox instanceof HTMLDivElement && sliderElement instanceof HTMLDivElement) {
    slederBox.insertAdjacentElement("beforeend", sliderElement);
  }
  return true;
  
}
