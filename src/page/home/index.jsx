import React from "react";
import IMAC from "../../img/imac.jpg";
import { Link } from "react-router-dom";
import MacBook from "../../img/macBook.jpg";
import Kalonka from "../../img/kalonka.jpg";
import MacBookMini from "../../img/mac-mini.jpg";
import Iphone from "../../img/iphone.jpg";

export default function Home() {
  return (
    <div>
      <div className="container">
        <header>
          <h1 className="title">Магазин</h1>
        </header>
        <section>
          <div className="row">
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
            <div className="card">
              <img className="Imac" src={MacBook} alt="error" />
              <h3 className="card-title card-title-add">Apple MacBook Air 13</h3>
              <div className="card-end">
                <p className="price">110 000 руб.</p>
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
              <img className="Imac" src={Iphone} alt="error" />
              <h3 className="card-title card-title-add">Apple iPhone X 256 ГБ «серый...</h3>
              <div className="card-end">
                <p className="price">49 000 руб.</p>
                <Link className="product" to={"/product/"}>
                  Смотреть
                </Link>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <Link to={"/"} className="btn">Назад</Link>
          <Link to={"/"} className="btn">1</Link>
          <Link to={"/"} className="btn">2</Link>
          <Link to={"/"} className="btn">3</Link>
          <Link to={"/"} className="btn">4</Link>
          <Link to={"/"} className="btn">Вперёд</Link>
        </footer>
      </div>
    </div>
  );
}
