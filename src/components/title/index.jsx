import React from "react";

export default function Title({
  className = "",
  heading = "p",
  title = "title",
}) {
  switch (heading) {
    case "h1":
      return <h1 className={className}> {title}</h1>;
    case "h2":
      return <h2 className={className}> {title}</h2>;
    case "h3":
      return <h3 className={className}> {title}</h3>;
    case "h4":
      return <h4 className={className}> {title}</h4>;
    case "h5":
      return <h5 className={className}> {title}</h5>;
    case "h6":
      return <h6 className={className}> {title}</h6>;
    case "p":
      return <p className={`subtitle ${className}`}> {title}</p>;
    default:
      console.log(
        `Ошибка! %c${heading} такого пропса не существует`,
        "text-decoration:underline; font-size:30px;"
      );
  }
}
