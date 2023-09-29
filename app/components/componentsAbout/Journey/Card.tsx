"use client";

import styles from "./Journey.module.css";
import { useEffect, useState } from "react";
type CardProps = {
  cardInfo: {
    Id: number;
    year: number;
    event: string;
    decreption: string;
    top: boolean;
    left: boolean;
  };
};

function Card({ cardInfo }: CardProps) {
  const [windowWidth, setWindowWidth] = useState(1000);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  });
  let CardPostion = "";
  if (cardInfo.top == true && cardInfo.left == true) {
    CardPostion = "topLeft";
  } else if (cardInfo.top == true && cardInfo.left == false) {
    CardPostion = "topRight";
  } else if (cardInfo.top == false && cardInfo.left == true) {
    CardPostion = "bottomLeft";
  } else {
    CardPostion = "bottomRight";
  }
  return (
    <section
      className={`${styles.Card}`}
      style={
        windowWidth > 720
          ? {
              gridArea: `${CardPostion}`,
              right: `${cardInfo.left == true ? "-25%" : "25%"}`,
            }
          : {}
      }
    >
      <h1 className={styles.cardTitle}>{cardInfo.year}</h1>
      <p>{cardInfo.event}</p>
      <p>{cardInfo.decreption}</p>
    </section>
  );
}

export default Card;
