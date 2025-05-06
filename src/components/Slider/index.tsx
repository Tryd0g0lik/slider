/**
 * src\components\Slider\index.tsx
 */
import React, {JSX} from "react";
import "src/components/Slider/styles/style.scss";

export function SliderFC(): JSX.Element {
  return (
    <div className="slider">
      <section className="slider__track">
        <div className="h2 slider_name">
          <h2>Хиты продаж</h2>
        </div>

        <div className="slider_icons__fill">
          <div className="slider_icons__fill-inner icons">
            <div className="icons">
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
              <div className="icon"></div>
            </div>
          </div>
          <div className="slider_icons__fill-inner icon2"></div>
          <div className="slider_icons__fill-inner icon3"></div>
          <div className="slider_icons__fill-inner icon4"></div>
          <div className="slider_icons__fill-inner icon5"></div>
        </div>
      </section>
    </div>
    );
}
