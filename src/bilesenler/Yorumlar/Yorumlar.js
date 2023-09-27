import React from "react";
import Yorum from "./Yorum";
import "./Yorumlar.css";

const Yorumlar = (props) => {

  const { yorumlar } = props;

  return (
    <div>
     {yorumlar.map((yorum) => {
        return <Yorum key={Math.random()} yorum={yorum} />;
      })}
    </div>
  );
};

export default Yorumlar;
