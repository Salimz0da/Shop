import React from "react";
import Image from "../image";
import { Link } from "react-router-dom";
import Title from "../title";

export default function Card({
  image,
  title = "Card title",
  price = 0,
  path = "/",
}) {
  return (
    <React.Fragment>
      <div className="card">
        <Image src={image} title={title} />
        <Title className={"card-title"} title={title} />
        <div className="card-end">
          <p className="price">{price} руб.</p>
          <Link className="product" to={path}>
            Смотреть
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
