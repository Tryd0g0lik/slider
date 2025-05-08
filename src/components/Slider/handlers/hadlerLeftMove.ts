/**
 * src\components\Slider\handlers\hadlerLeftMove.ts
 */
import React from "react";
import { handlerMoveFC, SliderElements } from "./useMove";

export function handlerLeftMoveFC(e: React.MouseEvent): boolean {
  const result = handlerMoveFC(e) as SliderElements;
  if (Object.keys(result).length === 0) {
    return false;
  }
  e.stopPropagation();
  e.preventDefault();
  const sliderElemHtml = result.elements[result.elements.length - 1];
  if (!sliderElemHtml) {
    console.error("[handlerLeftMoveF]: 'sliderElemHtml' was not found!");
    return false; 
  }
  const slederBox = result.slider;
  const sliderElement = sliderElemHtml.cloneNode(true);
  sliderElemHtml.remove();
  if (slederBox instanceof HTMLDivElement && sliderElement instanceof HTMLDivElement) {
    slederBox.insertAdjacentElement("afterbegin", sliderElement);
  }
  return true;
}
