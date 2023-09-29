"use client";

import styles from "./Journey.module.css";
import React from "react";
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
    <section className={`${styles.Card} ${CardPostion}`}>
      <h1 className={styles.cardTitle}>{cardInfo.year}</h1>
      <p>{cardInfo.event}</p>
      <p>{cardInfo.decreption}</p>
    </section>
  );
}

export default Card;
