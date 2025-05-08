/**
 * src\components\Slider\handlers\useMove.ts
 */
import React from "react";
export type SliderElements = {
  slider: HTMLElement,
  elements: HTMLCollectionOf<Element>
};

/**
 * @param e '`React.MouseEvent`'\
  * The '`slider`'. from respose,  is a HTMLElement which contains the '`slider__fill`' element. \
  * This is the container which has all the slider's elements.\
  * The '`elements`' from response is a collection of HTML elements that era inside the '`slider`' element.\
 * @returns 
 ```ts
    { "slider": HTMLElement, "elements": HTMLCollectionOf<Element> }
```
 */
export function handlerMoveFC(e: React.MouseEvent): boolean | SliderElements {
  const divHTml = document.querySelector("section .slider__fill");
  if (!divHTml) {
    console.error("[useMoveFC]: 'slider__fill' was not found!");
    return false;
  }
  const rectArr = divHTml.getElementsByClassName("slider__fill-inner");
  if (rectArr.length === 0) {
    console.error("[useMoveFC]: 'slider__fill-inner' was not found!");
    return false;
  }
  if (e.type.toLocaleLowerCase() !== "mousedown") {
    return false;
  }

  return { "slider": divHTml as HTMLElement, "elements": rectArr } as SliderElements;
  
}
