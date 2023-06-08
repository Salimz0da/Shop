import React from "react";
import IMAC from "../../img/imac.jpg";
import { Link } from "react-router-dom";
import MacBook from "../../img/macBook.jpg";
import Kalonka from "../../img/kalonka.jpg";
import MacBookMini from "../../img/mac-mini.jpg";
import Iphone from "../../img/iphone.jpg";
import Card from "../../components/card";

export default function Home() {
  return (
    <div>
      <div className="container">
        <header>
          <h1 className="title">Магазин</h1>
        </header>
        <section>
          <div className="row">
            <Card
              image={IMAC}
              title={`Apple iMac 27 Вторая линия названия`}
              price={95000}
              path="/product/"
            />
            <Card
              image={MacBook}
              title={`Apple MacBook Air 13`}
              price={110000}
              path="/product/"
            />
            <Card
              image={Kalonka}
              title={`Apple Mac Pro`}
              price={190000}
              path="/product/"
            />
            <Card
              image={MacBookMini}
              title={`Apple Mac Pro`}
              price={150000}
              path="/product/"
            />
            <Card
              image={Iphone}
              title={`Apple iPhone X 256 ГБ «серый...`}
              price={49000}
              path="/product/"
            />
          </div>
        </section>
        <footer className="footer">
          <Link to={"/"} className="btn">
            Назад
          </Link>
          <Link to={"/"} className="btn">
            1
          </Link>
          <Link to={"/"} className="btn">
            2
          </Link>
          <Link to={"/"} className="btn">
            3
          </Link>
          <Link to={"/"} className="btn">
            4
          </Link>
          <Link to={"/"} className="btn">
            Вперёд
          </Link>
        </footer>
      </div>
    </div>
  );
}
