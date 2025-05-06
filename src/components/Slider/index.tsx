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

        <div className="slider__fill">
          <div className="slider__fill-inner icons">
            <div className="icons__fill">
              <div className="icon"></div>
              <div className="icon2"></div>
              <div className="icon3"></div>
              <div className="icon4"></div>
              <div className="icon5"></div>
            </div>
            <div className="image">
              <img src="/pictures/image_70.png" alt="slider1" />
            </div>
            <div className="slider_showcase">
              <div className="h3 slider_name">
                <h3>205/55R16 PIRELLI CINTURATO P7 91VPIRELLI CINTURATO P7 91V</h3>
              </div>
              <div className="slider__rating">
                <span></span>
                <div className="slider__rating-common"><span>10</span></div>
              </div>
              <div className="icons__fill">
                <div className="icon">
                  <div></div>
                  <span>Зимняя</span>
                </div>
                <div className="icon icon2">
                  <div></div>
                  <span>Шипованная</span>
                </div>
                <div className="icon icon3">
                  <div></div>
                  <span>Грязевая</span>
                </div>
              </div>
              <div className="slider_showcase__price"></div>
            </div>
            <div className="slider_prices">
              <div className="slider_prices__inner">
                <div className="slider_prices__inner-old">6 750 ₽</div>
                <div className="slider_prices__inner-new">6 750 ₽</div>
              </div>
              <div className="slider_prices__calculate">
                <div className="calculate">
                  <div className="calculate__info">
                    <div className="calculate__reduce">-</div>
                    <div className="calculate__quatity">0</div>
                    <div className="calculate__increase">+</div>
                  </div>
                  <div className="calculate_button">
                    <span>В корзину</span>
                  </div>
                  <div className="calculate__liks"></div>
                </div>
                <button className="slider_showcase__button">Купить в один клик</button>
              </div>
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
