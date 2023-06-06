import React from "react";
import MacBook from "../../img/macBook.jpg";
import { Link } from "react-router-dom";
import MacBookMini from "../../img/mac-mini.jpg";
import Kalonka from "../../img/kalonka.jpg";
import IMAC from "../../img/imac.jpg";

export default function Product() {
  return (
    <div>
      <div className="container">
        <header>
          <div className="product-info">
            <img className="IMac" src={MacBook} alt="error" />
            <div>
              <h3 className="product-title">Apple MacBook Air 13</h3>
              <p className="price bottom">190 000 руб.</p>
              <Link className="basket" to={"/"}>
                В корзину
              </Link>
              <p className="product-info-name">
                Новый MacBook Air — ещё более тонкий и лёгкий, оснащён дисплеем
                Retina, клавиатурой нового поколения, трекпадом Force Touch и
                технологией Touch ID, которая защищает ваши данные и открывает
                доступ к ним только вам.
                <br /> <br /> Это самый экологичный Mac. Для его корпуса используется
                только переработанный алюминий.1 И это невероятно удобный
                MacBook Air, который справится с любыми задачами.
                <br /> <br /> Подробнее об особенностях и преимуществах MacBook Air.
              </p>
            </div>
          </div>
        </header>
        <footer>
          <div>
            <h2 className="title title-product">Сморите также</h2>
          </div>
          <div className="row">
            <div className="card">
              <img className="Imac" src={MacBookMini} alt="error" />
              <h3 className="card-title card-title-add">Apple Mac Pro</h3>
              <div className="card-end">
                <p className="price">150 000 руб.</p>
                <Link className="product" to={"/product/"}>
                  Смотреть
                </Link>
              </div>
            </div>
            <div className="card">
              <img className="Imac" src={Kalonka} alt="error" />
              <h3 className="card-title card-title-add">Apple Mac Pro</h3>
              <div className="card-end">
                <p className="price">190 000 руб.</p>
                <Link className="product" to={"/product/"}>
                  Смотреть
                </Link>
              </div>
            </div>
            <div className="card">
              <img className="Imac" src={IMAC} alt="error" />
              <h3 className="card-title">
                Apple iMac 27 <br /> Вторая линия названия
              </h3>
              <div className="card-end">
                <p className="price">95 000 руб.</p>
                <Link className="product" to={"/product/"}>
                  Смотреть
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
