import React from "react";
import DeafaultPoster from "../../img/iphone.jpg";

export default function Image({
  alt = "error",
  src = DeafaultPoster,
  className = "",
  title = "",
}) {
  return (
    <div className={`Image ${className}`}>
      <img src={src} alt={alt} title={title} />
    </div>
  );
}
